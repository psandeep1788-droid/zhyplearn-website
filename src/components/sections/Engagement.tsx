import ScreenshotPlaceholder from "@/components/ui/ScreenshotPlaceholder";

const CHIPS = [
  "Interactive Content",
  "Video with Question",
  "Quizzes",
  "Gamification",
  "Surveys & Polls",
  "Blended & Project-Based",
];

export default function Engagement() {
  return (
    <section id="engagement" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap-reverse items-center gap-14">
          <div className="flex min-w-[280px] flex-1 flex-col gap-2" style={{ flexBasis: "440px" }}>
            <ScreenshotPlaceholder
              caption="AI Tutor"
              src="/zhyplearn-engagement-ai-tutor.webp"
              aspectRatio="470 / 300"
              className="w-full max-w-[470px]"
            />
          </div>
          <div className="flex min-w-[280px] flex-1 flex-col gap-4" style={{ flexBasis: "420px" }}>
            <span className="text-[13px] font-bold tracking-wide text-gold-dark uppercase">
              Engaging &amp; Personal Learning
            </span>
            <h2 className="font-display text-[26px] font-bold text-charcoal sm:text-[30px]">
              Make Every Learning Experience More Engaging.
            </h2>
            <p className="text-base text-gray-700">
              Bring learning to life through interactive content and varied learning experiences
              that encourage participation and knowledge retention: video-based questions,
              flashcards, gamified challenges and more, built into the course itself.
            </p>
            <div className="mt-0.5 flex flex-wrap gap-x-2 gap-y-1 text-[13.5px] font-semibold text-gray-700">
              <span>For learners: more ways to participate</span>
              <span>·</span>
              <span>For creators: engagement built in</span>
              <span>·</span>
              <span>For organisations: stronger completion</span>
            </div>
            <div className="mt-1.5 flex flex-wrap gap-2.5">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-4 py-2.5 text-sm font-semibold text-charcoal-soft"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
