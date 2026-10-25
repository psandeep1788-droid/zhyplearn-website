"use client";

import { useRef, useState, FormEvent, ChangeEvent, FocusEvent } from "react";
import { demoRequestSchema } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "email" | "company" | "message";

const FIELD_SCHEMAS = {
  name: demoRequestSchema.shape.name,
  email: demoRequestSchema.shape.email,
  company: demoRequestSchema.shape.company,
  message: demoRequestSchema.shape.message,
};

// Advisory only — a hint toward a business email, never a submission block.
const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "aol.com",
  "live.com",
  "protonmail.com",
]);

function validateField(field: FieldName, value: string): string | undefined {
  const result = FIELD_SCHEMAS[field].safeParse(value);
  return result.success ? undefined : result.error.issues[0]?.message;
}

export default function DemoRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [showEmailHint, setShowEmailHint] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  function handleChange(field: FieldName) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setFieldErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
      if (field === "email") setShowEmailHint(false);
    };
  }

  function handleBlur(field: FieldName) {
    return (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const error = validateField(field, e.target.value);
      setFieldErrors((prev) => ({ ...prev, [field]: error }));
      if (field === "email" && !error) {
        const domain = e.target.value.split("@")[1]?.toLowerCase();
        setShowEmailHint(Boolean(domain && PERSONAL_EMAIL_DOMAINS.has(domain)));
      }
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const result = demoRequestSchema.safeParse({ ...values, website: "" });
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
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypotRef.current?.value ?? "" }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        setValues({ name: "", email: "", company: "", message: "" });
        setFieldErrors({});
      } else {
        setStatus("error");
        setErrorMessage(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error — please check your connection and try again.");
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
        <h3 className="font-display text-xl font-bold text-charcoal">Request received</h3>
        <p className="text-gray-700">
          Thank you — your demo request has been received. Our team will be in touch shortly to
          schedule a time.
        </p>
      </div>
    );
  }

  const fields: { name: FieldName; label: string; type?: string }[] = [
    { name: "name", label: "Name" },
    { name: "email", label: "Work email", type: "email" },
    { name: "company", label: "Company" },
  ];

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

      {fields.map((field) => (
        <label key={field.name} className="flex flex-col gap-1.5 text-sm font-semibold text-charcoal">
          {field.label}
          <input
            name={field.name}
            type={field.type ?? "text"}
            value={values[field.name]}
            onChange={handleChange(field.name)}
            onBlur={handleBlur(field.name)}
            aria-invalid={Boolean(fieldErrors[field.name])}
            aria-describedby={fieldErrors[field.name] ? `${field.name}-error` : undefined}
            className={`rounded-lg border px-4 py-3 font-normal ${
              fieldErrors[field.name] ? "border-red-400" : "border-gray-200"
            }`}
          />
          {fieldErrors[field.name] && (
            <p id={`${field.name}-error`} className="text-sm font-normal text-red-600">
              {fieldErrors[field.name]}
            </p>
          )}
          {field.name === "email" && showEmailHint && (
            <p className="flex items-start justify-between gap-3 rounded-lg bg-gray-100 px-3 py-2 text-[13px] font-normal text-gray-700">
              <span>A business or institutional email helps our team respond faster — personal addresses are fine too.</span>
              <button
                type="button"
                onClick={() => setShowEmailHint(false)}
                aria-label="Dismiss suggestion"
                className="shrink-0 text-gray-500 hover:text-charcoal"
              >
                ×
              </button>
            </p>
          )}
        </label>
      ))}

      <label className="flex flex-col gap-1.5 text-sm font-semibold text-charcoal">
        What would you like to know?
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange("message")}
          onBlur={handleBlur("message")}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={`rounded-lg border px-4 py-3 font-normal ${
            fieldErrors.message ? "border-red-400" : "border-gray-200"
          }`}
        />
        {fieldErrors.message && (
          <p id="message-error" className="text-sm font-normal text-red-600">
            {fieldErrors.message}
          </p>
        )}
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm font-semibold text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gold px-7 py-3.5 font-semibold text-white transition hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request a Demo"}
      </button>
    </form>
  );
}
