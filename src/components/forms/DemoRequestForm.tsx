"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function DemoRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
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
      <div className="rounded-2xl border border-gray-200 bg-gray-100 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-charcoal">Thank you</h3>
        <p className="mt-2 text-gray-700">
          Your demo request has been received. Our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from real visitors via CSS, bots fill every field */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <label className="flex flex-col gap-1.5 text-sm font-semibold text-charcoal">
        Name
        <input name="name" required minLength={2} className="rounded-lg border border-gray-200 px-4 py-3 font-normal" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-charcoal">
        Work email
        <input name="email" type="email" required className="rounded-lg border border-gray-200 px-4 py-3 font-normal" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-charcoal">
        Company
        <input name="company" required minLength={2} className="rounded-lg border border-gray-200 px-4 py-3 font-normal" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-charcoal">
        What would you like to know?
        <textarea name="message" required minLength={10} rows={4} className="rounded-lg border border-gray-200 px-4 py-3 font-normal" />
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
