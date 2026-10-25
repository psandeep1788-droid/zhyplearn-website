import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zhypility InfoSolutions",
  description: "About Zhypility InfoSolutions, the company behind ZhypLearn.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl font-bold text-charcoal">About Zhypility InfoSolutions</h1>
      <p className="mt-4 text-gray-700">
        Content for this page is pending — final copy to be added during homepage/content
        development, once approved.
      </p>
    </section>
  );
}
