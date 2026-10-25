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
      <div className="mx-auto flex h-[92px] max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" aria-label="Zhypility InfoSolutions — Home" className="flex shrink-0 items-center">
          {/* Served as-is from /public, not through next/image, so the
              original file is never re-encoded or resized server-side --
              required: "do not re-encode or modify the source image." */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/zhypility-logo.webp"
            alt="Zhypility InfoSolutions"
            width={1500}
            height={456}
            className="h-14 w-auto sm:h-16"
          />
        </Link>
        <div className="hidden shrink-0 items-center gap-5 text-[14.5px] font-semibold whitespace-nowrap lg:flex xl:gap-8">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gold-dark">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Login access coming soon"
            aria-label="Login (coming soon)"
            className="hidden shrink-0 cursor-not-allowed rounded-full border-[1.5px] border-gray-200 px-5 py-2.5 text-[13.5px] font-semibold whitespace-nowrap text-gray-400 lg:inline-block"
          >
            Login
          </button>
          <Link
            href="/book-a-demo"
            className="hidden shrink-0 rounded-full bg-gold px-5 py-2.5 text-[13.5px] font-semibold whitespace-nowrap text-white transition hover:bg-gold-dark lg:inline-block"
          >
            Book a Demo
          </Link>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-charcoal lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-gray-200 bg-white px-6 py-4 lg:hidden">
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
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Login access coming soon"
            aria-label="Login (coming soon)"
            className="cursor-not-allowed border-b border-gray-100 py-3 text-left font-semibold text-gray-400"
          >
            Login
          </button>
          <Link href="/book-a-demo" onClick={() => setOpen(false)} className="py-3 font-bold text-gold-dark">
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
