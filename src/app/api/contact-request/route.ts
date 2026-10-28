import { NextRequest, NextResponse } from "next/server";
import { contactRequestSchema } from "@/lib/validation";
import { saveContactRequest, markContactEmailNotified } from "@/lib/db";
import { sendContactRequestNotification } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";
import { isDatabaseConfigured } from "@/lib/env";
import { getClientIp } from "@/lib/request";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests — please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot check — see /api/demo-request for why this runs before schema
  // validation and returns a silent fake success instead of an error.
  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    typeof (body as Record<string, unknown>).website === "string" &&
    (body as Record<string, unknown>).website !== ""
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 },
    );
  }

  if (!isDatabaseConfigured()) {
    // Foundation stage: Neon isn't connected yet. Fail loudly and honestly
    // rather than show a fake "thanks!" for a lead that was never stored.
    return NextResponse.json(
      { ok: false, error: "The contact form service is not configured yet." },
      { status: 503 },
    );
  }

  const { name, email, phone, subject, message } = parsed.data;

  let savedId: string;
  try {
    const saved = await saveContactRequest({ name, email, phone, subject, message });
    savedId = saved.id;
  } catch (err) {
    console.error("[contact-request] failed to save", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your message. Please try again shortly." },
      { status: 500 },
    );
  }

  // The message is safely stored at this point. Email is best-effort — its
  // failure must not be reported to the visitor as a failed submission.
  const emailResult = await sendContactRequestNotification({ name, email, phone, subject, message });
  if (emailResult.sent) {
    try {
      await markContactEmailNotified(savedId);
    } catch (err) {
      console.error("[contact-request] failed to mark email_notified", err);
    }
  }

  return NextResponse.json({ ok: true });
}
