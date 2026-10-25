import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZhypLearn — AI-Powered Learning. Reimagined.",
  description:
    "ZhypLearn is Zhypility InfoSolutions' AI-powered Learning Management System. Create engaging learning experiences, deliver interactive training, and bring content, assessment and immersive learning together in one platform.",
};

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 py-28 text-center">
      <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">
        AI-Powered Learning Management System
      </span>
      <h1 className="font-display text-4xl font-bold text-charcoal">
        ZhypLearn — AI-Powered Learning. Reimagined.
      </h1>
      <p className="max-w-xl text-lg text-gray-700">
        The full homepage experience is being built next, matching the approved design
        reference. This is the project foundation — routing, styling, and the demo-request
        form are live and testable.
      </p>
      <a
        href="/book-a-demo"
        className="mt-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-white transition hover:bg-gold-dark"
      >
        Book a Demo
      </a>
    </section>
  );
}
