import { NextRequest, NextResponse } from "next/server";
import { demoRequestSchema } from "@/lib/validation";
import { saveDemoRequest, markEmailNotified } from "@/lib/db";
import { sendDemoRequestNotification } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";
import { isDatabaseConfigured } from "@/lib/env";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
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

  // Honeypot check runs before schema validation — a strict schema check
  // here would reject a filled honeypot with a revealing validation error
  // instead of the intended silent fake success, which defeats the point
  // (a bot that fills every field, including the hidden one, would learn
  // exactly what tripped it). Read loosely and defensively: any non-empty
  // string means a bot filled every field, including the hidden one.
  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    typeof (body as Record<string, unknown>).website === "string" &&
    (body as Record<string, unknown>).website !== ""
  ) {
    // Pretend success so bots don't learn to adapt, but never store or
    // email anything.
    return NextResponse.json({ ok: true });
  }

  const parsed = demoRequestSchema.safeParse(body);
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
      { ok: false, error: "The demo request service is not configured yet." },
      { status: 503 },
    );
  }

  const { name, email, company, message } = parsed.data;

  let savedId: string;
  try {
    const saved = await saveDemoRequest({ name, email, company, message });
    savedId = saved.id;
  } catch (err) {
    console.error("[demo-request] failed to save", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your request. Please try again shortly." },
      { status: 500 },
    );
  }

  // The lead is safely stored at this point. Email is best-effort — its
  // failure must not be reported to the visitor as a failed submission.
  const emailResult = await sendDemoRequestNotification({ name, email, company, message });
  if (emailResult.sent) {
    try {
      await markEmailNotified(savedId);
    } catch (err) {
      console.error("[demo-request] failed to mark email_notified", err);
    }
  }

  return NextResponse.json({ ok: true });
}
