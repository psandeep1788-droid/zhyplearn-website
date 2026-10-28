import Image from "next/image";

const CHIPS = [
  "Question Translate",
  "Video Subtitle",
  "Audio Dubbing",
  "AR/VR Simulations",
  "WebXR",
  "Metaverse",
];

export default function Multilingual() {
  return (
    <section id="multilingual" className="relative overflow-hidden bg-gray-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -top-40 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.18),transparent_70%)] blur-[70px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto mb-11 max-w-[680px] text-center">
          <span className="text-[13px] font-bold tracking-wide text-gold-dark uppercase">
            Multilingual &amp; Immersive Learning
          </span>
          <h2 className="font-display mt-3 text-[26px] font-bold text-charcoal sm:text-[30px]">
            Learning Without Language or Experience Boundaries.
          </h2>
          <p className="mt-3.5 text-base text-gray-700">
            Extend learning experiences through multilingual capabilities and immersive
            technologies that bring digital learning closer to real-world situations: a single
            course, translated and dubbed for every region, delivered through hands-on AR/VR and
            WebXR simulations.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="animate-float w-full max-w-[640px]">
            <Image
              src="/zhyplearn-multilingual-immersive-learning.webp"
              alt="Illustration of ZhypLearn's multilingual and immersive learning capabilities: a subtitled course video with language selection, and AR/VR training delivered through a headset"
              width={1672}
              height={941}
              className="h-auto w-full rounded-2xl drop-shadow-[0_22px_44px_rgba(26,26,26,0.16)]"
            />
          </div>
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-charcoal-soft"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
