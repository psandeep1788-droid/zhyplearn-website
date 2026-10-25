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
            AI-Powered Learning Management System
          </span>
          <h1 className="font-display text-[34px] leading-[1.12] font-bold text-charcoal sm:text-[44px]">
            ZhypLearn —{" "}
            <span className="bg-gradient-to-r from-gold-dark via-gold to-[#FFC861] bg-clip-text text-transparent">
              AI-Powered Learning.
            </span>{" "}
            Reimagined.
          </h1>
          <p className="max-w-[520px] text-lg text-gray-700">
            Create engaging learning experiences, deliver interactive training, and bring content,
            assessment and immersive learning together in one AI-powered platform.
          </p>
          <div className="mt-1.5 flex flex-wrap gap-3.5">
            <a
              href="#demo"
              className="rounded-full bg-gold px-7 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-px hover:bg-gold-dark hover:shadow-[0_10px_28px_rgba(245,166,35,0.38)]"
            >
              Book a Demo
            </a>
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
          <div className="animate-float relative">
            <svg
              width="500"
              height="360"
              viewBox="0 0 500 360"
              role="img"
              aria-label="Preview of the ZhypLearn dashboard showing a navigation sidebar, course overview, an AI content-creation panel, learning modules and assessment activity"
              className="h-auto max-w-full drop-shadow-[0_28px_56px_rgba(26,26,26,0.18)]"
            >
              <rect x="2" y="2" width="496" height="356" rx="22" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
              <path d="M2 24a22 22 0 0 1 22-22h450a22 22 0 0 1 22 22v18H2z" fill="#1A1A1A" />
              <circle cx="28" cy="24" r="5.5" fill="#F5A623" />
              <circle cx="48" cy="24" r="5.5" fill="#4B5563" />
              <circle cx="68" cy="24" r="5.5" fill="#4B5563" />
              <rect x="24" y="60" width="112" height="276" rx="14" fill="#F5F6F8" />
              <rect x="38" y="76" width="84" height="26" rx="8" fill="#F5A623" />
              <circle cx="52" cy="152" r="5" fill="none" stroke="#9CA3AF" strokeWidth="1.6" />
              <rect x="64" y="147" width="54" height="9" rx="4.5" fill="#2B2B2B" />
              <circle cx="52" cy="184" r="5" fill="none" stroke="#9CA3AF" strokeWidth="1.6" />
              <rect x="64" y="179" width="54" height="9" rx="4.5" fill="#9CA3AF" />
              <circle cx="52" cy="216" r="5" fill="none" stroke="#9CA3AF" strokeWidth="1.6" />
              <rect x="64" y="211" width="54" height="9" rx="4.5" fill="#9CA3AF" />
              <circle cx="52" cy="248" r="5" fill="none" stroke="#9CA3AF" strokeWidth="1.6" />
              <rect x="64" y="243" width="54" height="9" rx="4.5" fill="#9CA3AF" />
              <rect x="152" y="60" width="160" height="128" rx="14" fill="#F5F6F8" />
              <rect x="166" y="76" width="92" height="9" rx="4.5" fill="#1A1A1A" />
              <rect x="182" y="100" width="10" height="58" rx="3" fill="#F5A623" />
              <rect x="200" y="118" width="10" height="40" rx="3" fill="#1A1A1A" />
              <rect x="218" y="92" width="10" height="66" rx="3" fill="#F5A623" />
              <rect x="236" y="126" width="10" height="32" rx="3" fill="#E5E7EB" />
              <rect x="254" y="108" width="10" height="50" rx="3" fill="#1A1A1A" />
              <rect x="272" y="96" width="10" height="62" rx="3" fill="#F5A623" />
              <rect x="328" y="60" width="148" height="128" rx="14" fill="#FFFFFF" stroke="#F5A623" strokeWidth="1.6" />
              <path d="M346 80l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#F5A623" />
              <rect x="364" y="78" width="96" height="9" rx="4.5" fill="#1A1A1A" />
              <rect x="342" y="102" width="118" height="7" rx="3.5" fill="#E5E7EB" />
              <rect x="342" y="116" width="90" height="7" rx="3.5" fill="#E5E7EB" />
              <rect x="342" y="140" width="76" height="20" rx="10" fill="#F5A623" />
              <rect x="152" y="200" width="160" height="136" rx="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.2" />
              <rect x="166" y="214" width="84" height="9" rx="4.5" fill="#1A1A1A" />
              <circle cx="176" cy="244" r="7" fill="#F5A623" />
              <path d="M172 244l3 3 6-6" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="190" y="240" width="98" height="8" rx="4" fill="#2B2B2B" />
              <circle cx="176" cy="270" r="7" fill="none" stroke="#DD8F16" strokeWidth="1.8" />
              <rect x="190" y="266" width="98" height="8" rx="4" fill="#E5E7EB" />
              <circle cx="176" cy="296" r="7" fill="none" stroke="#DD8F16" strokeWidth="1.8" />
              <rect x="190" y="292" width="80" height="8" rx="4" fill="#E5E7EB" />
              <rect x="328" y="200" width="148" height="136" rx="14" fill="#F5F6F8" />
              <circle cx="384" cy="266" r="34" fill="none" stroke="#E5E7EB" strokeWidth="9" />
              <circle
                cx="384"
                cy="266"
                r="34"
                fill="none"
                stroke="#F5A623"
                strokeWidth="9"
                strokeDasharray="160 214"
                strokeLinecap="round"
                transform="rotate(-90 384 266)"
              />
              <rect x="430" y="230" width="34" height="9" rx="4.5" fill="#1A1A1A" />
              <rect x="430" y="248" width="40" height="16" rx="8" fill="#F5A623" />
              <rect x="430" y="276" width="42" height="18" rx="9" fill="#E8F6EE" />
            </svg>

            <div className="absolute -right-4 -bottom-5 hidden items-center gap-2.5 rounded-2xl border border-gray-200 bg-white px-4 py-3 whitespace-nowrap shadow-[0_14px_32px_rgba(26,26,26,0.14)] sm:flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DD8F16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5l1.8 5.6L19.4 10l-5.6 1.9L12 17.5l-1.8-5.6L4.6 10l5.6-1.9z" />
              </svg>
              <span className="text-[12.5px] font-bold text-charcoal">AI-Assisted Creation</span>
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
