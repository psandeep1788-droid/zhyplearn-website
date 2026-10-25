const SOLUTIONS = [
  {
    title: "Enterprises",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="1" />
        <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
      </>
    ),
    points: [
      "Centralized training across departments and regions",
      "Role-based access with organization-level data isolation",
      "AI-authored compliance and onboarding content",
    ],
  },
  {
    title: "SMEs",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.3 20a5.9 5.9 0 0 1 11.4 0" />
        <circle cx="17.5" cy="9.5" r="2.4" />
        <path d="M15.8 14a5 5 0 0 1 5.2 6" />
      </>
    ),
    points: [
      "Deliver professional learning programs with greater ease",
      "AI authoring cuts the time to build your first course",
      "Setup that scales with your team as you grow",
    ],
  },
  {
    title: "Educational Institutions",
    icon: (
      <>
        <path d="M12 3L2.5 8l9.5 5 9.5-5z" />
        <path d="M6.5 10.8V16c0 1.6 2.9 3 5.5 3s5.5-1.4 5.5-3v-5.2" />
      </>
    ),
    points: [
      "Course catalogues, cohorts and assessments in one place",
      "Interactive and immersive content for deeper engagement",
      "Completion records and reporting built in",
    ],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-charcoal">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-56 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.12),transparent_70%)] blur-[70px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-12 max-w-[640px]">
          <span className="text-[13px] font-bold tracking-wide text-gold uppercase">
            Solutions
          </span>
          <h2 className="font-display mt-3 text-[26px] font-bold text-white sm:text-[32px]">
            Solutions Built Around You
          </h2>
          <p className="mt-3.5 text-[16.5px] text-white/70">
            Whichever kind of organization you run, ZhypLearn adapts to how your people actually
            learn.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-3.5 rounded-[20px] border border-white/8 bg-[#242424] p-7 transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_44px_rgba(0,0,0,0.35),0_0_40px_rgba(245,166,35,0.12)]"
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
                  {s.icon}
                </svg>
              </div>
              <h3 className="font-display text-lg text-white">{s.title}</h3>
              <ul className="flex flex-col gap-2.5 text-[15px] text-white/78">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
