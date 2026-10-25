import Link from "next/link";

/**
 * TEMPORARY placeholder destinations — these are generic platform homepages,
 * not Zhypility InfoSolutions' or ZhypLearn's official profiles. Replace each
 * `href` with the verified official profile URL before production launch.
 */
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10.5v6M8 7.8v.2M12.5 16.5v-3.5c0-1.2.8-2 2-2s2 .8 2 2v3.5" />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="4" />
        <path d="M10.3 9.3l5.2 2.7-5.2 2.7z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z" />,
  },
  {
    name: "X",
    href: "https://x.com/",
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
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/20 text-white/72 transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
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
          <span>Mumbai, India — Office</span>
          <span>UAE — Office</span>
          <span>Bhubaneswar, India — Development Centre</span>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-white/10 px-6 pt-5 text-[12.5px] text-white/45">
        <span>© 2026 Zhypility InfoSolutions. ZhypLearn is a product of Zhypility InfoSolutions. All rights reserved.</span>
        <Link href="/privacy">Privacy &amp; Legal</Link>
      </div>
    </footer>
  );
}
