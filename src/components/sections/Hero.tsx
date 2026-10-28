import Link from "next/link";
import HeroVideo from "@/components/ui/HeroVideo";

const CHECKS = ["Reimagined UI", "Built-in GenAI", "AI Proctoring", "AI Authoring Tool"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white pt-10 pb-20 sm:pt-16 sm:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -top-48 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.32),transparent_70%)] blur-[70px]" />
        <div className="absolute -bottom-40 -left-28 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.14),transparent_70%)] blur-[70px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center gap-16 px-6">
        <div className="flex min-w-[280px] flex-[0.95_1_440px] flex-col gap-5">
          <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-gold-dark uppercase">
            The Future of Enterprise Learning
          </span>
          <h1 className="font-display leading-[1.18] font-bold text-charcoal">
            <span className="block text-[34px] sm:text-[38px]">ZhypLearn: A New Era{" "}of</span>
            <span className="block text-[34px] text-gold sm:text-[44px]">AI-Powered Learning</span>
          </h1>
          <p className="max-w-[520px] text-lg text-gray-700">
            ZhypLearn brings learning management, engaging learner experiences, and AI-powered
            content creation together in one intelligent learning platform.
          </p>
          <div className="mt-1.5 flex flex-wrap gap-3.5">
            <Link
              href="/book-a-demo"
              className="rounded-full bg-gold px-7 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-px hover:bg-gold-dark hover:shadow-[0_10px_28px_rgba(245,166,35,0.38)]"
            >
              Book a Demo
            </Link>
            <a
              href="#platform"
              className="rounded-full border-[1.5px] border-charcoal px-7 py-3.5 text-[15px] font-semibold text-charcoal transition hover:bg-charcoal hover:text-white"
            >
              Explore the Platform
            </a>
          </div>
          <div className="mt-3.5 flex flex-wrap gap-5">
            {CHECKS.map((label) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-[13.5px] font-semibold text-gray-700"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#DD8F16"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex min-w-[300px] flex-[1.15_1_480px] justify-center">
          <div className="animate-float relative w-full max-w-[500px]">
            <HeroVideo />

            <div className="absolute -right-4 -bottom-5 hidden items-center gap-2.5 rounded-2xl border border-gray-200 bg-white px-4 py-3 whitespace-nowrap shadow-[0_14px_32px_rgba(26,26,26,0.14)] sm:flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DD8F16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5l1.8 5.6L19.4 10l-5.6 1.9L12 17.5l-1.8-5.6L4.6 10l5.6-1.9z" />
              </svg>
              <span className="text-[12.5px] font-bold text-charcoal">Course Creation</span>
            </div>
            <div className="animate-float absolute -top-4 -left-5 hidden items-center gap-2.5 rounded-2xl border border-gray-200 bg-white px-4 py-3 whitespace-nowrap shadow-[0_14px_32px_rgba(26,26,26,0.14)] [animation-delay:1.4s] sm:flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DD8F16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9.5h18M9 9.5V20" />
              </svg>
              <span className="text-[12.5px] font-bold text-charcoal">Learning Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
