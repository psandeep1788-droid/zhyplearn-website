import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Zhypility InfoSolutions, the company behind ZhypLearn — our team, our Mumbai head office and Bhubaneswar development center, and our commitment to intelligent eLearning solutions.",
};

type Founder = {
  name: string;
  designation: string;
  description: string;
  image: string;
  // Verified against the founders' own listed profiles on
  // zhypility.com/about-us/#founder — not guessed.
  linkedin?: string;
};

const FOUNDERS: Founder[] = [
  {
    name: "Sandeep Patil",
    designation: "Founder & Director",
    description:
      "Mr. Sandeep Patil brings 30+ years of extensive tech experience from the U.K. and U.S., providing a global perspective that fuels the company's innovative and scalable eLearning solutions.",
    image: "/zhyplearn-founder-sandeep-patil.webp",
    linkedin: "https://in.linkedin.com/in/patilsp",
  },
  {
    name: "Subham Acharya",
    designation: "Co-Founder & Director",
    description:
      "Mr. Subham Acharya contributes over 20+ years of expertise as a learning consultant, specializing in instructional design and corporate training to create impactful, learner-centered programs.",
    image: "/zhyplearn-founder-subham-acharya.webp",
    linkedin: "https://in.linkedin.com/in/subham-acharya-7a515419",
  },
];

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-6 py-9 text-center shadow-[0_6px_18px_rgba(26,26,26,0.04)] sm:px-8">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-gold/25 sm:h-32 sm:w-32">
        <Image
          src={founder.image}
          alt={`Portrait of ${founder.name}, ${founder.designation} at Zhypility InfoSolutions`}
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>
      <h3 className="font-display mt-5 text-xl font-bold text-gold-dark">{founder.name}</h3>
      <p className="mt-1 text-[14.5px] font-bold text-charcoal">{founder.designation}</p>
      <p className="mt-4 max-w-[340px] text-[15px] leading-relaxed text-gray-700">
        {founder.description}
      </p>
      {founder.linkedin && (
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${founder.name} on LinkedIn`}
          className="mt-5 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="1" y="1" width="22" height="22" rx="5" fill="#0A66C2" stroke="none" />
            <rect x="5.2" y="9.3" width="3" height="9.2" fill="white" stroke="none" />
            <circle cx="6.7" cy="5.9" r="1.8" fill="white" stroke="none" />
            <path
              d="M10.6 9.3h2.9v1.6c.5-.8 1.6-1.8 3.2-1.8 3 0 4.3 1.9 4.3 4.8v4.6h-3v-4.3c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.8 1.3-.1.3-.1.6-.1 1v4.3h-3V9.3z"
              fill="white"
              stroke="none"
            />
          </svg>
        </a>
      )}
    </div>
  );
}

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

      <div className="mt-24">
        <h2 className="font-display text-center text-2xl font-bold text-gold-dark sm:text-3xl">
          Founder&rsquo;s Desk
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {FOUNDERS.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
