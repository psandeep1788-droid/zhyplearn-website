import ScreenshotPlaceholder from "@/components/ui/ScreenshotPlaceholder";

const SHOTS = [
  "Course Themes",
  "Asset Library",
  "Learning Insights",
  "Skills & Competency Dashboard",
  "Admin Dashboard",
  "Trainer Dashboard",
  "Instructor-Led Training",
  "Training Calendar",
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-3 max-w-[680px] text-center">
          <span className="text-[13px] font-bold tracking-wide text-gold-dark uppercase">
            See ZhypLearn in Action
          </span>
          <h2 className="font-display mt-3 text-[26px] font-bold text-charcoal sm:text-[30px]">
            The Real Platform, Behind Every Capability
          </h2>
          <p className="mt-3.5 text-[16.5px] text-gray-700">
            A closer look at the tools your content teams, trainers and administrators actually
            use day to day.
          </p>
        </div>
        <p className="mb-10 text-center text-[12.5px] text-gray-500">
          Illustrative placeholders. Genuine ZhypLearn screenshots to follow.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOTS.map((caption) => (
            <div key={caption}>
              <ScreenshotPlaceholder caption={caption} aspectRatio="4 / 3" />
              <p className="mt-2.5 text-[13.5px] font-bold text-charcoal">{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
