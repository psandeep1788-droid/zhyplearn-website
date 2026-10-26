import Image from "next/image";

type ScreenshotPlaceholderProps = {
  caption: string;
  /** Once a real screenshot is supplied, pass its path here — no layout change needed. */
  src?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
};

/**
 * Stand-in for a genuine ZhypLearn product screenshot not yet supplied.
 * Same frame treatment as a real screenshot so swapping one in later is a
 * single `src` prop, not a layout change.
 */
export default function ScreenshotPlaceholder({
  caption,
  src,
  alt,
  aspectRatio = "4 / 3",
  className = "",
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_1px_2px_rgba(26,26,26,0.04),0_20px_44px_rgba(26,26,26,0.12)] ${className}`}
    >
      <div className="h-[5px] bg-gradient-to-r from-gold to-gold-dark" />
      {src ? (
        <div className="relative" style={{ aspectRatio }}>
          <Image src={src} alt={alt ?? caption} fill className="object-cover" />
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-100 to-white px-6 py-10 text-center"
          style={{ aspectRatio }}
          role="img"
          aria-label={`${caption} — product screenshot coming soon`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-gold/22 bg-gradient-to-br from-gold/22 to-gold/6 text-gold-dark">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="2.5" />
              <circle cx="9" cy="10" r="1.6" />
              <path d="M3 16.5l5-4.5 4 3.5 3-3L21 16" />
            </svg>
          </div>
          <p className="font-display text-[13.5px] font-semibold text-charcoal">{caption}</p>
          <p className="text-[12px] font-medium text-gray-500 italic">
            Coming soon
          </p>
        </div>
      )}
    </div>
  );
}
