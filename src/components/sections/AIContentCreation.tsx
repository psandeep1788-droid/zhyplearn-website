import ScreenshotPlaceholder from "@/components/ui/ScreenshotPlaceholder";

const CHIPS = [
  "ZhypLearn Courz Builder",
  "Course Branding",
  "eLearning Videos",
  "Flashcards",
  "eBooks",
  "Case Studies & Reports",
  "SCORM Output",
];

export default function AIContentCreation() {
  return (
    <section id="creation" className="relative overflow-hidden bg-gray-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -top-36 -left-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.2),transparent_70%)] blur-[70px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="flex flex-wrap items-center gap-14">
          <div className="flex min-w-[280px] flex-1 flex-col gap-4" style={{ flexBasis: "420px" }}>
            <span className="text-[13px] font-bold tracking-wide text-gold-dark uppercase">
              AI-Powered Content Creation
            </span>
            <h2 className="font-display text-[26px] font-bold text-charcoal sm:text-[30px]">
              From Ideas to Learning Content, Faster.
            </h2>
            <p className="text-base text-gray-700">
              Turn learning requirements into engaging digital experiences with ZhypLearn Courz
              Builder — our AI-assisted authoring workspace — and a rich range of learning
              formats, from a structured, branded course outline to the quiz questions that test
              it.
            </p>
            <p className="text-base font-medium text-charcoal-soft">
              Create AI-powered courses and export them as SCORM packages for use with compatible
              LMS platforms.
            </p>
            <div className="mt-0.5 flex flex-wrap gap-x-2 gap-y-1 text-[13.5px] font-semibold text-gray-700">
              <span>For content teams: less manual formatting</span>
              <span>·</span>
              <span>For admins: faster rollout</span>
              <span>·</span>
              <span>For learners: clearer courses</span>
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
          <div className="flex min-w-[280px] flex-1 justify-center" style={{ flexBasis: "440px" }}>
            <div className="relative w-full max-w-[470px]">
              <div className="animate-float">
                <ScreenshotPlaceholder caption="Course Builder Workspace" aspectRatio="470 / 300" />
              </div>
              <div className="relative z-10 -mt-12 -mr-4 ml-auto w-[58%]">
                <ScreenshotPlaceholder caption="AI-Authored Course" aspectRatio="4 / 3" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-2 text-right text-[12.5px] text-gray-500">
          Illustrative placeholders — genuine ZhypLearn screenshots to follow.
        </p>
      </div>
    </section>
  );
}
