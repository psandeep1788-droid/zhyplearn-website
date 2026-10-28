import Link from "next/link";

/**
 * YouTube, Instagram, Facebook and X are verified official Zhypility
 * InfoSolutions profiles, supplied 2026-10-26. LinkedIn remains a
 * TEMPORARY placeholder (a generic platform homepage, not a verified
 * profile) — replace its `href` once the official LinkedIn profile URL
 * is supplied, before production launch.
 */
// Each icon is a full brand-coloured badge with a white glyph — the same
// "coloured square app icon" look these platforms use for their own
// favicons — rather than a tinted outline on a neutral button.
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <>
        <rect x="1" y="1" width="22" height="22" rx="5" fill="#0A66C2" stroke="none" />
        <rect x="5.2" y="9.3" width="3" height="9.2" fill="white" stroke="none" />
        <circle cx="6.7" cy="5.9" r="1.8" fill="white" stroke="none" />
        <path
          d="M10.6 9.3h2.9v1.6c.5-.8 1.6-1.8 3.2-1.8 3 0 4.3 1.9 4.3 4.8v4.6h-3v-4.3c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.8 1.3-.1.3-.1.6-.1 1v4.3h-3V9.3z"
          fill="white"
          stroke="none"
        />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@zhypilityinfosolutions718",
    icon: (
      <>
        <rect x="1" y="1" width="22" height="22" rx="5" fill="#FF0000" stroke="none" />
        <path d="M9.6 8.4l6.3 3.6-6.3 3.6z" fill="white" stroke="none" />
      </>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zhypilityinfosolutions/",
    icon: (
      <>
        <defs>
          <linearGradient id="footer-instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FEDA75" />
            <stop offset="30%" stopColor="#F58529" />
            <stop offset="55%" stopColor="#DD2A7B" />
            <stop offset="80%" stopColor="#8134AF" />
            <stop offset="100%" stopColor="#515BD4" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="22" height="22" rx="5" fill="url(#footer-instagram-gradient)" stroke="none" />
        <rect x="7" y="7" width="10" height="10" rx="3" fill="none" stroke="white" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.6" fill="none" stroke="white" strokeWidth="1.6" />
        <circle cx="16.3" cy="7.7" r="1" fill="white" stroke="none" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/zhypility.infosolutions.7/",
    icon: (
      <>
        <rect x="1" y="1" width="22" height="22" rx="5" fill="#1877F2" stroke="none" />
        <path
          d="M13.5 9h2.3V6.2h-2.3c-2 0-3.3 1.4-3.3 3.4V11H8.4v2.8h1.8V18h2.9v-4.2h2.1l.4-2.8h-2.5V9.9c0-.5.3-.9.9-.9z"
          fill="white"
          stroke="none"
        />
      </>
    ),
  },
  {
    name: "X",
    href: "https://x.com/ZhypLearn?s=20",
    icon: (
      <>
        <rect x="1" y="1" width="22" height="22" rx="5" fill="#000000" stroke="none" />
        <path d="M7 7l10 10M17 7L7 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal py-14 text-white/72">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-12 px-6">
        <div className="flex min-w-[220px] flex-1 flex-col gap-3">
          {/* Same source file as the header, served as-is (no next/image,
              no re-encoding). Tagline text removed separately below since
              the logo image already contains it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/zhyplearn-logo.png"
            alt="ZhypLearn — AI Powered LMS"
            width={1628}
            height={574}
            className="h-20 w-auto self-start"
          />
          <div className="mt-2 flex flex-col gap-2.5">
            <strong className="text-[13px] tracking-wide text-white">Follow us</strong>
            <div className="flex flex-wrap items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <div key={social.name} className="group relative">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-[34px] w-[34px] items-center justify-center overflow-hidden rounded-[9px] transition hover:scale-105 hover:shadow-[0_6px_16px_rgba(0,0,0,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
                      {social.icon}
                    </svg>
                  </a>
                  {/* Visual-only tooltip: the link's own aria-label already
                      gives the accessible name, so this is hidden from
                      assistive tech to avoid a duplicate announcement.
                      Positioned below the icon, not above — the "CONNECT
                      WITH US" label sits directly above this row with no
                      room for a tooltip to open upward without overlapping
                      it. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md bg-charcoal-soft px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap text-white opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    {social.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <strong className="text-[13px] tracking-wide text-white">COMPANY</strong>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book-a-demo">Book a Demo</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <strong className="text-[13px] tracking-wide text-white">CONTACT</strong>
          <a href="mailto:elearning@Zhypility.com" className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-gold">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
            elearning@Zhypility.com
          </a>
          <a href="tel:9321315629" className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-gold">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            9321315629
          </a>
          <a href="tel:+971505349599" className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-gold">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +971 505349599
          </a>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <Link
            href="/contact"
            className="w-fit text-[13px] font-bold tracking-wide text-gold underline-offset-4 transition hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            OUR PRESENCE
          </Link>
          <Link href="/contact" className="w-fit underline-offset-4 transition hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            Mumbai, India · Office
          </Link>
          <Link href="/contact" className="w-fit underline-offset-4 transition hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            UAE · Office
          </Link>
          <Link href="/contact" className="w-fit underline-offset-4 transition hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            Bhubaneswar, India · Development Centre
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-white/10 px-6 pt-5 text-[12.5px] text-white/45">
        <span>© 2026 Zhypility InfoSolutions. ZhypLearn is a product of Zhypility InfoSolutions. All rights reserved.</span>
        <div className="flex flex-wrap gap-4">
          <Link href="/legal#privacy">Privacy Statement</Link>
          <Link href="/legal#disclaimer">Legal Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
