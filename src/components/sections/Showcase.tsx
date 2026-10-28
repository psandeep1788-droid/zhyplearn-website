import ScreenshotPlaceholder from "@/components/ui/ScreenshotPlaceholder";

const SHOTS: { caption: string; src?: string }[] = [
  { caption: "Course Themes" },
  { caption: "Asset Library", src: "/zhyplearn-showcase-asset-library.webp" },
  { caption: "Learning Insights", src: "/zhyplearn-showcase-learning-insights.webp" },
  {
    caption: "Skills & Competency Dashboard",
    src: "/zhyplearn-showcase-skills-competency-dashboard.webp",
  },
  { caption: "Admin Dashboard", src: "/zhyplearn-showcase-admin-dashboard.webp" },
  { caption: "Trainer Dashboard" },
  { caption: "Instructor-Led Training" },
  { caption: "Training Calendar", src: "/zhyplearn-showcase-training-calendar.webp" },
  { caption: "Learning Journey Map", src: "/zhyplearn-showcase-learning-journey-map.webp" },
  { caption: "My Skills", src: "/zhyplearn-showcase-my-skills.webp" },
  { caption: "Learner Home", src: "/zhyplearn-showcase-learner-home.webp" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOTS.map((shot) => (
            <div key={shot.caption}>
              <ScreenshotPlaceholder caption={shot.caption} src={shot.src} aspectRatio="4 / 3" />
              <p className="mt-2.5 text-[13.5px] font-bold text-charcoal">{shot.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
