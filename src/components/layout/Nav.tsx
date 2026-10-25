"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/#platform", label: "Platform" },
  { href: "/#creation", label: "AI Capabilities" },
  { href: "/#showcase", label: "In Action" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="font-display text-xl font-bold text-gold-dark">
          ZhypLearn
        </Link>
        <div className="hidden items-center gap-8 text-[14.5px] font-semibold md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gold-dark">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/book-a-demo"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-[13.5px] font-semibold text-white transition hover:bg-gold-dark md:inline-block"
          >
            Book a Demo
          </Link>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-charcoal md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-3 font-semibold"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book-a-demo" onClick={() => setOpen(false)} className="py-3 font-bold text-gold-dark">
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
