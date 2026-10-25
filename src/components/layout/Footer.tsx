import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-14 text-white/72">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-12 px-6">
        <div className="flex min-w-[220px] flex-1 flex-col gap-3">
          <span className="font-display text-xl font-bold text-gold">ZhypLearn</span>
          <p className="text-[13.5px] font-semibold text-gold">Empowering Your Learning Journey</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <strong className="text-[13px] tracking-wide text-white">COMPANY</strong>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book-a-demo">Book a Demo</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <strong className="text-[13px] tracking-wide text-white">CONTACT</strong>
          <a href="mailto:elearning@Zhypility.com">elearning@Zhypility.com</a>
          <a href="tel:9321315629">9321315629</a>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <strong className="text-[13px] tracking-wide text-gold">OUR PRESENCE</strong>
          <span>Mumbai, India — Office</span>
          <span>UAE — Office</span>
          <span>Bhubaneswar, India — Development Centre</span>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-white/10 px-6 pt-5 text-[12.5px] text-white/45">
        <span>© 2026 Zhypility InfoSolutions. ZhypLearn is a product of Zhypility InfoSolutions. All rights reserved.</span>
        <Link href="/privacy">Privacy &amp; Legal</Link>
      </div>
    </footer>
  );
}
