export default function Assessment() {
  return (
    <section id="assessment" className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6">
        <div className="flex min-w-[280px] flex-1 flex-col gap-4" style={{ flexBasis: "420px" }}>
          <span className="text-[13px] font-bold tracking-wide text-gold-dark uppercase">
            Assessment &amp; Verification
          </span>
          <h2 className="font-display text-[26px] font-bold text-charcoal sm:text-[30px]">
            Assess Learning. Strengthen Accountability.
          </h2>
          <p className="text-base text-gray-700">
            Bring assessments and learning verification into the experience: AI Proctoring
            supports more meaningful evaluation, while every quiz result feeds a simple overview
            admins can review.
          </p>
          <p className="text-[13.5px] text-gray-700">
            AI Proctoring supports assessment integrity; it is not a guarantee against all forms
            of misconduct.
          </p>
          <div className="mt-1.5 flex flex-wrap gap-2.5">
            {["AI Proctoring", "Quizzes"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-charcoal-soft"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="flex min-w-[260px] flex-1 flex-col items-center gap-2.5" style={{ flexBasis: "360px" }}>
          <div className="animate-float">
            <svg
              width="376"
              height="340"
              viewBox="0 0 376 340"
              role="img"
              aria-label="Illustration of an assessment interface showing a progress bar, answer options, an AI proctoring status indicator in the header, and a sample results row"
              className="h-auto max-w-full drop-shadow-[0_20px_40px_rgba(26,26,26,0.14)]"
            >
              <rect x="2" y="2" width="372" height="330" rx="18" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
              <path d="M2 20a18 18 0 0 1 18-18h334a18 18 0 0 1 18 18v16H2z" fill="#1A1A1A" />
              <circle cx="26" cy="20" r="5" fill="#F5A623" />
              <circle cx="44" cy="20" r="5" fill="#4B5563" />
              <circle cx="62" cy="20" r="5" fill="#4B5563" />
              <rect x="288" y="10" width="72" height="20" rx="10" fill="#2B2B2B" />
              <circle cx="300" cy="20" r="3.5" fill="#F5A623" />
              <rect x="310" y="16" width="42" height="8" rx="4" fill="#FFFFFF" opacity="0.85" />
              <rect x="24" y="50" width="324" height="8" rx="4" fill="#E5E7EB" />
              <rect x="24" y="50" width="220" height="8" rx="4" fill="#F5A623" />
              <rect x="24" y="74" width="230" height="12" rx="6" fill="#1A1A1A" />
              <rect x="24" y="102" width="324" height="40" rx="12" fill="#F5F6F8" stroke="#E5E7EB" strokeWidth="1.2" />
              <circle cx="44" cy="122" r="8" fill="none" stroke="#DD8F16" strokeWidth="2" />
              <rect x="64" y="117" width="210" height="10" rx="5" fill="#2B2B2B" />
              <rect x="24" y="150" width="324" height="40" rx="12" fill="#FFFFFF" stroke="#F5A623" strokeWidth="1.6" />
              <circle cx="44" cy="170" r="8" fill="#F5A623" />
              <path d="M40 170l3 3 6-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="64" y="165" width="210" height="10" rx="5" fill="#2B2B2B" />
              <rect x="24" y="198" width="324" height="40" rx="12" fill="#F5F6F8" stroke="#E5E7EB" strokeWidth="1.2" />
              <circle cx="44" cy="218" r="8" fill="none" stroke="#DD8F16" strokeWidth="2" />
              <rect x="64" y="213" width="170" height="10" rx="5" fill="#2B2B2B" />
              <rect x="24" y="254" width="324" height="1" fill="#E5E7EB" />
              <rect x="24" y="272" width="92" height="7" rx="3.5" fill="#9CA3AF" />
              <rect x="24" y="290" width="134" height="11" rx="5.5" fill="#1A1A1A" />
              <rect x="258" y="284" width="90" height="22" rx="11" fill="#E8F6EE" />
              <rect x="272" y="291" width="62" height="8" rx="4" fill="#1D8A4C" />
            </svg>
          </div>
          <p className="mt-3.5 text-[13px] text-gray-700 italic">
            Sample learner result shown for illustration only, not a real learner record.
          </p>
        </div>
      </div>
    </section>
  );
}
