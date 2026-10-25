import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ZhypLearn privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl font-bold text-charcoal">Privacy Policy</h1>
      <p className="mt-4 text-gray-700">
        Final privacy policy content is pending — to be drafted and reviewed before launch.
      </p>
    </section>
  );
}
