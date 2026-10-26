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
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10.5v6M8 7.8v.2M12.5 16.5v-3.5c0-1.2.8-2 2-2s2 .8 2 2v3.5" />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@zhypilityinfosolutions718",
    // Brand red (#FF0000).
    color: "text-[#FF0000]",
    hoverBorder: "hover:border-[#FF0000]",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="4" />
        <path d="M10.3 9.3l5.2 2.7-5.2 2.7z" fill="currentColor" stroke="none" />
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
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#footer-instagram-gradient)" />
        <circle cx="12" cy="12" r="4" stroke="url(#footer-instagram-gradient)" />
        <circle cx="17.2" cy="6.8" r="1" fill="url(#footer-instagram-gradient)" stroke="none" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/zhypility.infosolutions.7/",
    // Brand blue (#1877F2).
    color: "text-[#1877F2]",
    hoverBorder: "hover:border-[#1877F2]",
    icon: <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z" />,
  },
  {
    name: "X",
    href: "https://x.com/ZhypLearn?s=20",
    // White, not black: this footer's background is always dark charcoal
    // (no light-mode variant exists for it), so white is what actually
    // gives X's brand-standard contrast here.
    color: "text-white",
    hoverBorder: "hover:border-white",
    icon: <path d="M4 4l16 16M20 4L4 20" />,
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
