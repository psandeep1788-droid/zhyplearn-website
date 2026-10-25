const CARDS = [
  {
    title: "Create & Organise Learning",
    description:
      "Build courses with the AI Authoring Tool and Course Branding, then organise them into a catalogue ready to assign.",
    extra:
      "Upload your existing SCORM course packages and manage your learning content in ZhypLearn.",
    icon: (
      <>
        <path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z" />
        <path d="M8 3v18" />
      </>
    ),
  },
  {
    title: "Deliver & Assess Training",
    description:
      "Deliver interactive, video-based and immersive training, then verify understanding with AI-proctored quizzes.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="13" rx="2" />
        <path d="M10 9.3v5.4l4.5-2.7z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "Review Progress & Activity",
    description:
      "See completion records and learning activity as teams move through their assigned courses.",
    icon: <path d="M4 20V11M10 20V4M16 20v-9M4 20h16" />,
  },
];

export default function PlatformManagement() {
  return (
    <section id="management" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <span className="text-[13px] font-bold tracking-wide text-gold-dark uppercase">
            Platform Management
          </span>
          <h2 className="font-display mt-3 text-[26px] font-bold text-charcoal sm:text-[30px]">
            Manage the Full Learning Lifecycle
          </h2>
          <p className="mt-3.5 text-[16.5px] text-gray-700">
            Beyond the AI capabilities above, ZhypLearn gives administrators a single place to run
            learning end to end.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="relative rounded-[20px] border border-gray-200 bg-white p-7 shadow-[0_1px_2px_rgba(26,26,26,0.04),0_8px_24px_rgba(26,26,26,0.05)] transition hover:-translate-y-0.75 hover:shadow-[0_0_0_1px_rgba(245,166,35,0.22),0_20px_44px_rgba(26,26,26,0.12),0_0_44px_rgba(245,166,35,0.12)]"
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
                  {card.icon}
                </svg>
              </div>
              <h3 className="font-display mt-4.5 text-[17px] font-semibold text-charcoal">
                {card.title}
              </h3>
              <p className="mt-2 text-[14.5px] text-gray-700">{card.description}</p>
              {card.extra && (
                <p className="mt-2 text-[14.5px] font-medium text-charcoal-soft">{card.extra}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
