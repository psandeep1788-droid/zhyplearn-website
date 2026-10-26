import { Resend } from "resend";
import { isEmailConfigured } from "./env";
import type { DemoRequestInput, ContactRequestInput } from "./db";

const NOTIFY_TO = "elearning@Zhypility.com";

/**
 * Sends the internal notification email for a new demo request.
 * Email failure must never cause the lead itself to be lost — the caller
 * saves to the database first and only attempts this afterwards, logging
 * (not throwing) on failure so the enquiry is still captured.
 */
export async function sendDemoRequestNotification(
  input: DemoRequestInput,
): Promise<{ sent: boolean; error?: string }> {
  if (!isEmailConfigured()) {
    console.warn("[email] RESEND_API_KEY not set — notification skipped, lead already saved");
    return { sent: false, error: "not_configured" };
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "ZhypLearn Website <onboarding@resend.dev>",
      to: NOTIFY_TO,
      replyTo: input.email,
      subject: `New demo request — ${input.company}`,
      text: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Company: ${input.company}`,
        "",
        "Message:",
        input.message,
      ].join("\n"),
    });
    return { sent: true };
  } catch (err) {
    console.error("[email] Resend send failed", err);
    return { sent: false, error: "send_failed" };
  }
}

/**
 * Sends the internal notification email for a new contact form
 * submission. Same best-effort contract as sendDemoRequestNotification —
 * the lead is saved to the database first and this must never cause it to
 * be lost.
 */
export async function sendContactRequestNotification(
  input: ContactRequestInput,
): Promise<{ sent: boolean; error?: string }> {
  if (!isEmailConfigured()) {
    console.warn("[email] RESEND_API_KEY not set — notification skipped, lead already saved");
    return { sent: false, error: "not_configured" };
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "ZhypLearn Website <onboarding@resend.dev>",
      to: NOTIFY_TO,
      replyTo: input.email,
      subject: `New contact enquiry — ${input.subject}`,
      text: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone}`,
        `Subject: ${input.subject}`,
        "",
        "Message:",
        input.message,
      ].join("\n"),
    });
    return { sent: true };
  } catch (err) {
    console.error("[email] Resend send failed", err);
    return { sent: false, error: "send_failed" };
  }
}
