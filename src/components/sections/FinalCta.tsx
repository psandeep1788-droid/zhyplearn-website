import Link from "next/link";

export default function FinalCta() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-gradient-to-br from-gold via-[#F7B542] to-gold-dark py-16 sm:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_70%)] blur-[70px]" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-4.5 px-6 text-center">
        <h2 className="font-display text-[26px] font-bold text-white sm:text-[30px]">
          Ready to Transform Learning?
        </h2>
        <p className="text-[16.5px] text-white/92">
          Experience the power of GenAI with ZhypLearn.
        </p>
        <div className="mt-1.5 flex flex-wrap justify-center gap-3.5">
          <Link
            href="/book-a-demo"
            className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-charcoal transition hover:-translate-y-px hover:bg-gray-100"
          >
            Book a Demo
          </Link>
        </div>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13.5px] font-medium text-white/85">
          <a href="mailto:elearning@Zhypility.com" className="hover:text-white">
            Email elearning@Zhypility.com
          </a>
          <span aria-hidden="true">·</span>
          <a href="tel:9321315629" className="hover:text-white">
            Call 9321315629
          </a>
        </div>
      </div>
    </section>
  );
}
