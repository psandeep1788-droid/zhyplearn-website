"use client";

import Link from "next/link";
import { useState } from "react";

const FAQS = [
  {
    question: "What is ZhypLearn?",
    answer:
      "ZhypLearn is Zhypility InfoSolutions' AI-powered Learning Management System: AI-assisted content creation, assessment and verification, and multilingual, immersive learning.",
  },
  {
    question: "How can AI help us create training courses?",
    answer:
      "ZhypLearn Courz Builder, our AI-assisted authoring workspace, turns learning requirements into engaging content, from a structured, branded course outline to the quiz questions that test it. Formats include eLearning videos, flashcards, eBooks and case studies.",
  },
  {
    question: "Can we use our existing SCORM courses?",
    answer:
      "Yes, upload your existing SCORM course packages and manage your learning content in ZhypLearn.",
  },
  {
    question: "Can we export AI-generated courses as SCORM?",
    answer:
      "Yes, create AI-powered courses and export them as SCORM packages for use with compatible LMS platforms.",
  },
  {
    question: "Is ZhypLearn suitable for different types of organisations?",
    answer:
      "Yes. ZhypLearn is built to adapt to different kinds of organisations, including enterprises, SMEs and educational institutions, each with their own way of structuring and delivering training.",
  },
  {
    question: "Can ZhypLearn support our organisation's learning requirements?",
    answer:
      "ZhypLearn brings AI-powered content creation, assessment and verification, multilingual and immersive learning, and platform management into one place. Every organisation's requirements are a little different, so the most direct way to find out is a short demo against your own setup.",
  },
  {
    question: "How can we determine whether ZhypLearn is right for our team?",
    answer:
      "The most practical next step is a live demo. We'll walk through ZhypLearn against your own requirements so you can see it in context before deciding.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a demo and our team will walk you through ZhypLearn and answer any remaining questions about your specific setup.",
  },
];

function FAQItem({
  id,
  question,
  answer,
  open,
  onToggle,
}: {
  id: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const triggerId = `faq-trigger-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="rounded-[18px] border border-gray-200 bg-white">
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-[16px] font-semibold text-charcoal transition hover:text-gold-dark sm:text-[17px]"
        >
          {question}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`shrink-0 text-gold-dark transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h3>
      {open && (
        <div id={panelId} role="region" aria-labelledby={triggerId} className="px-6 pb-5 text-[15px] text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(id: number) {
    setOpenIndex((prev) => (prev === id ? null : id));
  }

  return (
    <section id="faqs" className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-[620px] text-center">
          <h2 className="font-display text-[26px] font-bold text-gold sm:text-[30px]">FAQs</h2>
        </div>
        <div className="mx-auto flex max-w-[760px] flex-col gap-4">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.question}
              id={i}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
        <p className="mt-8 text-center text-[14.5px] text-gray-700">
          Still have questions?{" "}
          <Link href="/book-a-demo" className="font-semibold text-gold-dark hover:text-gold">
            Book a demo
          </Link>{" "}
          and we&apos;ll walk through it with you.
        </p>
      </div>
    </section>
  );
}
