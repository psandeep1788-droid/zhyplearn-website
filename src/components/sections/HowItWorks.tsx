const STEPS = [
  {
    title: "Create & Assign",
    description: "Author courses with AI assistance and assign them to the right teams.",
  },
  {
    title: "Learn & Engage",
    description: "Interactive, visual and immersive content keeps learners engaged.",
  },
  {
    title: "Assess & Verify",
    description: "AI-proctored quizzes and assessments confirm real understanding.",
  },
  {
    title: "Track & Report",
    description: "Dashboards, completion records and certificates, in real time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-[620px] text-center">
          <span className="text-[13px] font-bold tracking-wide text-gold-dark uppercase">
            How It Works
          </span>
          <h2 className="font-display mt-3.5 text-[26px] font-bold text-charcoal sm:text-[32px]">
            From Course to Completion
          </h2>
          <p className="mt-3.5 text-base text-gray-700">
            A simple, consistent flow from course creation to verified learning outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col items-start rounded-[18px] border border-gray-200 bg-white p-7"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-gold/28 bg-gold/12 font-display text-sm font-bold text-gold-dark">
                {i + 1}
              </div>
              <h3 className="font-display mt-4.5 text-[17px] text-charcoal">{step.title}</h3>
              <p className="mt-2 text-[15px] text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
