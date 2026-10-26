import { neon } from "@neondatabase/serverless";
import { isDatabaseConfigured } from "./env";

export type DemoRequestInput = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function sql() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }
  return neon(process.env.DATABASE_URL);
}

async function ensureSchema() {
  const db = sql();
  await db`
    CREATE TABLE IF NOT EXISTS demo_requests (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      email_notified BOOLEAN NOT NULL DEFAULT false
    )
  `;
}

/**
 * Stores a demo request. Throws if the database isn't configured or the
 * insert fails — callers must not report success unless this resolves.
 */
export async function saveDemoRequest(
  input: DemoRequestInput,
): Promise<{ id: string }> {
  if (!isDatabaseConfigured()) {
    throw new Error("Database not configured");
  }
  const db = sql();
  await ensureSchema();
  const rows = await db`
    INSERT INTO demo_requests (name, email, company, message)
    VALUES (${input.name}, ${input.email}, ${input.company}, ${input.message})
    RETURNING id
  `;
  return { id: rows[0].id as string };
}

export async function markEmailNotified(id: string): Promise<void> {
  const db = sql();
  await db`UPDATE demo_requests SET email_notified = true WHERE id = ${id}`;
}

export type ContactRequestInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

async function ensureContactSchema() {
  const db = sql();
  await db`
    CREATE TABLE IF NOT EXISTS contact_requests (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      email_notified BOOLEAN NOT NULL DEFAULT false
    )
  `;
}

/**
 * Stores a contact form submission. Throws if the database isn't
 * configured or the insert fails — callers must not report success unless
 * this resolves.
 */
export async function saveContactRequest(
  input: ContactRequestInput,
): Promise<{ id: string }> {
  if (!isDatabaseConfigured()) {
    throw new Error("Database not configured");
  }
  const db = sql();
  await ensureContactSchema();
  const rows = await db`
    INSERT INTO contact_requests (name, email, phone, subject, message)
    VALUES (${input.name}, ${input.email}, ${input.phone}, ${input.subject}, ${input.message})
    RETURNING id
  `;
  return { id: rows[0].id as string };
}

export async function markContactEmailNotified(id: string): Promise<void> {
  const db = sql();
  await db`UPDATE contact_requests SET email_notified = true WHERE id = ${id}`;
}
