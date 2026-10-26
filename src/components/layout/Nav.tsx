"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PRODUCT_LINKS = [
  { href: "/#platform", label: "Platform Overview" },
  { href: "/#creation", label: "AI Capabilities" },
  { href: "/#showcase", label: "See It in Action" },
];

const NAV_LINKS = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function ProductDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="product-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 hover:text-gold-dark"
      >
        Product
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div
          id="product-menu"
          className="absolute top-full left-0 mt-2.5 min-w-[220px] overflow-hidden rounded-2xl border border-gray-200 bg-white py-1.5 shadow-[0_14px_32px_rgba(26,26,26,0.14)]"
        >
          {PRODUCT_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-[14.5px] font-semibold text-charcoal-soft transition hover:bg-gray-100 hover:text-gold-dark"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[92px] max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" aria-label="ZhypLearn — Home" className="flex shrink-0 items-center">
          {/* Served as-is from /public, not through next/image, so the
              original file is never re-encoded or resized server-side --
              required: "do not re-encode or modify the source image." */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/zhyplearn-logo.png"
            alt="ZhypLearn — AI Powered LMS"
            width={1628}
            height={574}
            className="h-14 w-auto sm:h-16"
          />
        </Link>
        <div className="hidden shrink-0 items-center gap-5 text-[14.5px] font-semibold whitespace-nowrap lg:flex xl:gap-8">
          <ProductDropdown />
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gold-dark">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://app.ignitenx.com/zhypility/login"
            className="hidden shrink-0 rounded-full border-[1.5px] border-charcoal px-5 py-2.5 text-[13.5px] font-semibold whitespace-nowrap text-charcoal transition hover:bg-charcoal hover:text-white lg:inline-block"
          >
            Login
          </a>
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
          {PRODUCT_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-3 font-semibold"
            >
              {l.label}
            </Link>
          ))}
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-3 font-semibold"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://app.ignitenx.com/zhypility/login"
            onClick={() => setOpen(false)}
            className="border-b border-gray-100 py-3 text-left font-semibold"
          >
            Login
          </a>
          <Link href="/book-a-demo" onClick={() => setOpen(false)} className="py-3 font-bold text-gold-dark">
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
