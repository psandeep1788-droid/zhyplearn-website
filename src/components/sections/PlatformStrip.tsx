const CAPABILITIES = [
  {
    title: "AI Content Creation",
    description: "Turn source material into structured, branded courses.",
    icon: (
      <path d="M3 21l3.6-.9L17.8 8.8a2 2 0 0 0 0-2.8l-1-1a2 2 0 0 0-2.8 0L2.9 16.3 2 21zM13.3 6.4l3 3" />
    ),
  },
  {
    title: "Interactive Learning",
    description: "Videos, quizzes, gamification and surveys that engage.",
    icon: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12l3 3 5-6" />,
  },
  {
    title: "Intelligent Assessment",
    description: "AI-proctored quizzes that verify real understanding.",
    icon: <path d="M12 3l7 3v6c0 4.6-3 8.2-7 9-4-.8-7-4.4-7-9V6zM9 12l2 2 4-4.5" />,
  },
  {
    title: "Immersive Experiences",
    description: "AR/VR and WebXR training for hands-on practice.",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="8" rx="4" />
        <circle cx="8.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="15.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export default function PlatformStrip() {
  return (
    <section id="platform" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <span className="text-[13px] font-bold tracking-wide text-gold-dark uppercase">
            Platform
          </span>
          <h2 className="font-display mt-3 text-[26px] font-bold text-charcoal sm:text-[30px]">
            One Platform. Multiple Ways to Transform Learning.
          </h2>
          <p className="mt-3.5 text-[16.5px] text-gray-700">
            ZhypLearn pairs a reimagined, modern interface with generative AI woven through every
            course. It&apos;s the foundation the capabilities below are built on.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="flex flex-col items-start gap-2.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-gold/22 bg-gradient-to-br from-gold/22 to-gold/6 text-gold-dark">
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
                  {c.icon}
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-charcoal">{c.title}</h3>
              <p className="text-[14.5px] text-gray-700">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
