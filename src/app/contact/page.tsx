import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ZhypLearn",
  description: "Get in touch with the ZhypLearn team.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl font-bold text-charcoal">Contact Us</h1>
      <div className="mt-6 flex flex-col gap-2 text-gray-700">
        <a href="mailto:elearning@Zhypility.com" className="font-semibold text-gold-dark">
          elearning@Zhypility.com
        </a>
        <a href="tel:9321315629" className="font-semibold text-gold-dark">
          9321315629
        </a>
      </div>
    </section>
  );
}
