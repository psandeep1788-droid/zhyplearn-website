import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Zhypility InfoSolutions, the company behind ZhypLearn — our team, our Mumbai head office and Bhubaneswar development center, and our commitment to intelligent eLearning solutions.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div>
          <span className="text-[13px] font-bold tracking-wide text-gold uppercase">About</span>
          <h1 className="font-display mt-3 text-3xl font-bold text-charcoal sm:text-4xl">
            About Us
          </h1>
          <div className="mt-6 flex flex-col gap-5 text-[16px] text-gray-700">
            <p>
              Together, their combined experience forms the foundation for delivering
              future-ready learning solutions that empower organizations worldwide.
            </p>
            <p className="rounded-2xl border border-gold/25 bg-gold/8 px-5 py-4 text-[16.5px] font-medium text-charcoal-soft">
              From upskilling and reskilling initiatives to compliance learning and leadership
              development, Zhypility InfoSolutions is dedicated to being your trusted partner in
              fostering a culture of continuous learning and measurable business outcomes through
              intelligent eLearning solutions.
            </p>
            <p>
              Our Head Office is located in Mumbai along with a dedicated development center
              based out of Bhubaneswar, Odisha, serving as the hub for our operations and
              innovation.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px] border border-gray-200 shadow-[0_8px_24px_rgba(26,26,26,0.05)]">
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              title="Introduction to Zhypility InfoSolutions"
              src="https://www.youtube.com/embed/wMbHt4A8Rxk"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
