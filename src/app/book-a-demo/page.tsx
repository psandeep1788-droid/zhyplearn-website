import type { Metadata } from "next";
import DemoRequestForm from "@/components/forms/DemoRequestForm";

export const metadata: Metadata = {
  title: "Book a ZhypLearn Demo",
  description: "Book a personalised demo of ZhypLearn, the AI-powered Learning Management System.",
};

export default function BookADemoPage() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24">
      <h1 className="font-display text-3xl font-bold text-charcoal">Book a Demo</h1>
      <p className="mt-3 text-gray-700">
        Tell us a little about your organisation and we&apos;ll be in touch to schedule a
        personalised walkthrough of ZhypLearn.
      </p>
      <div className="mt-8">
        <DemoRequestForm />
      </div>
    </section>
  );
}
