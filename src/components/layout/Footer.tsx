import Link from "next/link";

/**
 * YouTube, Instagram, Facebook and X are verified official Zhypility
 * InfoSolutions profiles, supplied 2026-10-26. LinkedIn remains a
 * TEMPORARY placeholder (a generic platform homepage, not a verified
 * profile) — replace its `href` once the official LinkedIn profile URL
 * is supplied, before production launch.
 */
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    // Brand blue (#0A66C2).
    color: "text-[#0A66C2]",
    hoverBorder: "hover:border-[#0A66C2]",
    // Solid "in" lettermark, matching LinkedIn's actual brand icon (not
    // an outline) so it reads as the real logo, not a tinted line.
    icon: (
      <>
        <rect x="4" y="9.3" width="3.2" height="9.7" fill="currentColor" stroke="none" />
        <circle cx="5.6" cy="5.7" r="1.9" fill="currentColor" stroke="none" />
        <path
          d="M10.6 9.3h3.1v1.7c.5-.9 1.7-1.9 3.4-1.9 3.1 0 4.5 2 4.5 5V19h-3.2v-4.6c0-1.5-.5-2.5-1.8-2.5-1 0-1.7.7-2 1.4-.1.3-.1.6-.1 1V19h-3.2V9.3z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@zhypilityinfosolutions718",
    // Brand red (#FF0000).
    color: "text-[#FF0000]",
    hoverBorder: "hover:border-[#FF0000]",
    // Solid filled "TV" badge with a white play triangle, matching the
    // real YouTube mark instead of an outlined rectangle.
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="4" fill="currentColor" stroke="none" />
        <path d="M10.3 9.3l5.2 2.7-5.2 2.7z" fill="white" stroke="none" />
      </>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zhypilityinfosolutions/",
    // Gradient is applied directly on the icon's own paths below (SVG
    // strokes/fills can't follow a single `currentColor`), so no text
    // color class is needed here.
    color: "",
    hoverBorder: "hover:border-[#E1306C]",
    // Solid gradient-filled badge with a white lens ring and dot,
    // matching the real Instagram mark instead of a gradient outline.
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
        <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#footer-instagram-gradient)" stroke="none" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="17.1" cy="6.9" r="1.1" fill="white" stroke="none" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/zhypility.infosolutions.7/",
    // Brand blue (#1877F2).
    color: "text-[#1877F2]",
    hoverBorder: "hover:border-[#1877F2]",
    // Solid filled "f" mark (same path as before, now filled instead of
    // stroked) matching the real Facebook logo.
    icon: <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z" fill="currentColor" stroke="none" />,
  },
  {
    name: "X",
    href: "https://x.com/ZhypLearn?s=20",
    // White, not black: this footer's background is always dark charcoal
    // (no light-mode variant exists for it), so white is what actually
    // gives X's brand-standard contrast here.
    color: "text-white",
    hoverBorder: "hover:border-white",
    // X's mark is bold crossing strokes, not a filled shape — a thicker,
    // round-capped stroke reads closer to the real logo than the thin
    // shared line weight used elsewhere.
    icon: <path d="M4 4l16 16M20 4L4 20" strokeWidth="2.6" strokeLinecap="round" />,
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
            src="/zhypility-logo.webp"
            alt="Zhypility InfoSolutions — Empowering Your Learning Journey"
            width={1500}
            height={456}
            className="h-14 w-auto self-start"
          />
          <div className="mt-2 flex flex-col gap-2.5">
            <strong className="text-[13px] tracking-wide text-white">CONNECT WITH US</strong>
            <div className="flex flex-wrap items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <div key={social.name} className="group relative">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/20 ${social.color} transition ${social.hoverBorder} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold`}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
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
          <a href="mailto:elearning@Zhypility.com">elearning@Zhypility.com</a>
          <a href="tel:9321315629">9321315629</a>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <strong className="text-[13px] tracking-wide text-gold">OUR PRESENCE</strong>
          <span>Mumbai, India · Office</span>
          <span>UAE · Office</span>
          <span>Bhubaneswar, India · Development Centre</span>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-white/10 px-6 pt-5 text-[12.5px] text-white/45">
        <span>© 2026 Zhypility InfoSolutions. ZhypLearn is a product of Zhypility InfoSolutions. All rights reserved.</span>
        <Link href="/privacy">Privacy &amp; Legal</Link>
      </div>
    </footer>
  );
}
