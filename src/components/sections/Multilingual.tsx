const CHIPS = [
  "Question Translate",
  "Video Subtitle",
  "Audio Dubbing",
  "AR/VR Simulations",
  "WebXR",
  "Metaverse",
];

export default function Multilingual() {
  return (
    <section id="multilingual" className="relative overflow-hidden bg-gray-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -top-40 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.18),transparent_70%)] blur-[70px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto mb-11 max-w-[680px] text-center">
          <span className="text-[13px] font-bold tracking-wide text-gold-dark uppercase">
            Multilingual &amp; Immersive Learning
          </span>
          <h2 className="font-display mt-3 text-[26px] font-bold text-charcoal sm:text-[30px]">
            Learning Without Language or Experience Boundaries.
          </h2>
          <p className="mt-3.5 text-base text-gray-700">
            Extend learning experiences through multilingual capabilities and immersive
            technologies that bring digital learning closer to real-world situations — a single
            course, translated and dubbed for every region, delivered through hands-on AR/VR and
            WebXR simulations.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="animate-float">
            <svg
              width="500"
              height="340"
              viewBox="0 0 500 340"
              role="img"
              aria-label="Illustration of a combined multilingual and immersive learning interface, with a subtitled video and language list on the left, an AR/VR scene on the right, and a row of selectable languages below"
              className="h-auto max-w-full drop-shadow-[0_22px_44px_rgba(26,26,26,0.16)]"
            >
              <rect x="2" y="2" width="496" height="300" rx="18" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
              <path d="M2 20a18 18 0 0 1 18-18h458a18 18 0 0 1 18 18v16H2z" fill="#1A1A1A" />
              <circle cx="26" cy="20" r="5" fill="#F5A623" />
              <circle cx="44" cy="20" r="5" fill="#4B5563" />
              <circle cx="62" cy="20" r="5" fill="#4B5563" />
              <rect x="24" y="52" width="220" height="180" rx="14" fill="#1A1A1A" />
              <path d="M108 118l28 18-28 18z" fill="#F5A623" />
              <rect x="40" y="200" width="188" height="14" rx="7" fill="#2B2B2B" />
              <rect x="52" y="204" width="160" height="6" rx="3" fill="#F5F6F8" />
              <rect x="268" y="52" width="208" height="180" rx="14" fill="#F5F6F8" />
              <circle cx="372" cy="142" r="86" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.6" />
              <rect x="320" y="118" width="104" height="52" rx="20" fill="#1A1A1A" />
              <circle cx="350" cy="144" r="15" fill="#F5A623" />
              <circle cx="386" cy="144" r="15" fill="#F5A623" />
              <rect x="360" y="132" width="16" height="8" rx="4" fill="#1A1A1A" />
              <path d="M320 134c-10 0-10 24 0 24" stroke="#1A1A1A" strokeWidth="7" strokeLinecap="round" fill="none" />
              <path d="M424 134c10 0 10 24 0 24" stroke="#1A1A1A" strokeWidth="7" strokeLinecap="round" fill="none" />
              <rect x="24" y="244" width="101" height="26" rx="13" fill="#FFFFFF" stroke="#F5A623" strokeWidth="1.6" />
              <circle cx="40" cy="257" r="4" fill="#F5A623" />
              <rect x="52" y="253" width="58" height="8" rx="4" fill="#2B2B2B" />
              <rect x="139" y="244" width="101" height="26" rx="13" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.2" />
              <circle cx="155" cy="257" r="4" fill="none" stroke="#C9CDD3" strokeWidth="1.6" />
              <rect x="167" y="253" width="58" height="8" rx="4" fill="#9CA3AF" />
              <rect x="254" y="244" width="101" height="26" rx="13" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.2" />
              <circle cx="270" cy="257" r="4" fill="none" stroke="#C9CDD3" strokeWidth="1.6" />
              <rect x="282" y="253" width="58" height="8" rx="4" fill="#9CA3AF" />
              <rect x="369" y="244" width="101" height="26" rx="13" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.2" />
              <circle cx="385" cy="257" r="4" fill="none" stroke="#C9CDD3" strokeWidth="1.6" />
              <rect x="397" y="253" width="58" height="8" rx="4" fill="#9CA3AF" />
            </svg>
          </div>
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-charcoal-soft"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
