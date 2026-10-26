"use client";

import { useRef, useState, FormEvent, ChangeEvent, FocusEvent } from "react";
import { contactRequestSchema } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "email" | "phone" | "subject" | "message";

const FIELD_SCHEMAS = {
  name: contactRequestSchema.shape.name,
  email: contactRequestSchema.shape.email,
  phone: contactRequestSchema.shape.phone,
  subject: contactRequestSchema.shape.subject,
  message: contactRequestSchema.shape.message,
};

function validateField(field: FieldName, value: string): string | undefined {
  const result = FIELD_SCHEMAS[field].safeParse(value);
  return result.success ? undefined : result.error.issues[0]?.message;
}

const FIELDS: { name: FieldName; label: string; type?: string; element?: "textarea" }[] = [
  { name: "name", label: "Name" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Number", type: "tel" },
  { name: "subject", label: "Subject" },
  { name: "message", label: "Message", element: "textarea" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);

  function handleChange(field: FieldName) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setFieldErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };
  }

  function handleBlur(field: FieldName) {
    return (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const error = validateField(field, e.target.value);
      setFieldErrors((prev) => ({ ...prev, [field]: error }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const result = contactRequestSchema.safeParse({ ...values, website: "" });
    if (!result.success) {
      const nextErrors: Partial<Record<FieldName, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldName;
        if (key && FIELD_SCHEMAS[key] && !nextErrors[key]) nextErrors[key] = issue.message;
      }
      setFieldErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypotRef.current?.value ?? "" }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        setValues({ name: "", email: "", phone: "", subject: "", message: "" });
        setFieldErrors({});
      } else {
        setStatus("error");
        setErrorMessage(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-gray-100 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="font-display text-xl font-bold text-charcoal">Message received</h3>
        <p className="text-gray-700">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot — hidden from real visitors via CSS, bots fill every field */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {FIELDS.map((field) => (
        <label key={field.name} className="flex flex-col gap-1.5 text-sm font-semibold text-charcoal">
          {field.label}
          {field.element === "textarea" ? (
            <textarea
              name={field.name}
              rows={5}
              value={values[field.name]}
              onChange={handleChange(field.name)}
              onBlur={handleBlur(field.name)}
              aria-invalid={Boolean(fieldErrors[field.name])}
              aria-describedby={fieldErrors[field.name] ? `${field.name}-error` : undefined}
              className={`rounded-lg border px-4 py-3 font-normal transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 ${
                fieldErrors[field.name] ? "border-red-400" : "border-gray-200"
              }`}
            />
          ) : (
            <input
              name={field.name}
              type={field.type ?? "text"}
              value={values[field.name]}
              onChange={handleChange(field.name)}
              onBlur={handleBlur(field.name)}
              aria-invalid={Boolean(fieldErrors[field.name])}
              aria-describedby={fieldErrors[field.name] ? `${field.name}-error` : undefined}
              className={`rounded-lg border px-4 py-3 font-normal transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 ${
                fieldErrors[field.name] ? "border-red-400" : "border-gray-200"
              }`}
            />
          )}
          {fieldErrors[field.name] && (
            <p id={`${field.name}-error`} className="text-sm font-normal text-red-600">
              {fieldErrors[field.name]}
            </p>
          )}
        </label>
      ))}

      {status === "error" && (
        <p role="alert" className="text-sm font-semibold text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gold px-7 py-3.5 font-semibold text-white transition hover:bg-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
