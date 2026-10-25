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
          <a
            href="mailto:elearning@Zhypility.com"
            className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-charcoal transition hover:-translate-y-px hover:bg-gray-100"
          >
            Schedule a Demo
          </a>
          <a
            href="tel:9321315629"
            className="rounded-full border-[1.5px] border-white/55 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/14"
          >
            Call 9321315629
          </a>
        </div>
      </div>
    </section>
  );
}
