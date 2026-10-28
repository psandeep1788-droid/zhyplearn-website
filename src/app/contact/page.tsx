import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zhypility InfoSolutions — reach our Corporate Office, Development Center, or UAE Office, or send us a message about ZhypLearn.",
};

type Office = {
  name: string;
  companyLine?: string;
  addressLines: string[];
  phones?: string[];
  mapHref?: string;
};

const OFFICES: Office[] = [
  {
    name: "Corporate Office",
    companyLine: "Zhypility InfoSolutions",
    addressLines: ["506, 5th Floor, Primus Business Park", "Thane, Mumbai 400604", "India"],
    phones: ["+91 9321315629", "+91 9337127011"],
    // Verified: resolves directly to the "Zhypility Infosolutions" Google
    // Maps place pin at this address.
    mapHref: "https://maps.app.goo.gl/GeZJ4pyaRXzBhJKN7",
  },
  {
    name: "Development Center",
    addressLines: [
      "Plot No- 81, 2nd Floor",
      "Sai Saraswati Complex,",
      "District Center, Chandrasekharpur",
      "Bhubaneswar – 751016",
    ],
    phones: ["+91 9337127011"],
    // No map link: no verified Google Maps destination has been supplied
    // for this address yet. Omitted rather than shown incorrectly, or
    // invented — needs a verified link supplied before launch.
  },
  {
    name: "UAE Office",
    addressLines: [
      "26th Floor, Amber Gem Tower",
      "Sheikh Khalifa Bin Zayed Street",
      "Al Rashidiya -3, Ajman",
      "United Arab Emirates",
    ],
    phones: ["+971 505349599"],
    // No map link: this is an updated address with no supplied or
    // verified map destination. The old Ras Al Khaimah office's map link
    // must not be reused here — needs a verified link supplied before
    // launch.
  },
];

// Precise coordinates of the "ZHYPILITY INFOSOLUTIONS" Google Maps place
// pin at the Corporate Office address, extracted from the verified
// https://maps.app.goo.gl/GeZJ4pyaRXzBhJKN7 redirect (not guessed/geocoded
// from the address text).
const MUMBAI_OFFICE_COORDS = { lat: 19.1985595, lng: 72.9559074 };
const MUMBAI_MAP_EMBED_SRC = `https://www.google.com/maps?q=${MUMBAI_OFFICE_COORDS.lat},${MUMBAI_OFFICE_COORDS.lng}&z=17&output=embed`;
const MUMBAI_MAP_LINK = "https://maps.app.goo.gl/GeZJ4pyaRXzBhJKN7";

function formatTelHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="flex flex-col gap-2.5 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_6px_18px_rgba(26,26,26,0.04)] transition hover:border-gold/40 hover:shadow-[0_10px_26px_rgba(26,26,26,0.08)]">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-gold/22 bg-gradient-to-br from-gold/22 to-gold/6 text-gold-dark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 21h18M6 21V8l6-4 6 4v13M9 21v-6h6v6" />
          </svg>
        </span>
        <h3 className="font-display text-base font-bold text-charcoal">{office.name}</h3>
      </div>
      <div className="flex flex-col gap-0.5 pl-[46px] text-[14.5px] text-gray-700">
        {office.companyLine && <span className="font-semibold text-charcoal">{office.companyLine}</span>}
        {office.addressLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      {office.phones && office.phones.length > 0 && (
        <div className="flex flex-col gap-0.5 pl-[46px]">
          {office.phones.map((phone) => (
            <a key={phone} href={formatTelHref(phone)} className="text-[14.5px] font-semibold text-gold-dark hover:underline">
              {phone}
            </a>
          ))}
        </div>
      )}
      {office.mapHref && (
        <a
          href={office.mapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[46px] mt-0.5 inline-flex w-fit items-center gap-1.5 text-[13.5px] font-semibold text-gold-dark hover:underline"
        >
          View on map
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-[640px]">
        <span className="text-[13px] font-bold tracking-wide text-gold uppercase">Contact</span>
        <h1 className="font-display mt-3 text-3xl font-bold text-charcoal sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-3.5 text-[16.5px] text-gray-700">
          Reach us at any of our offices below, or send us a message and our team will get back to
          you.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-gold/25 bg-gold/8 px-5 py-4 text-[15px]">
        <span className="font-semibold text-charcoal">General Enquiries:</span>
        <a href="mailto:elearning@zhypility.com" className="font-semibold text-gold-dark hover:underline">
          elearning@zhypility.com
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="flex flex-col gap-4">
          {OFFICES.map((office) => (
            <OfficeCard key={office.name} office={office} />
          ))}
        </div>

        <div className="rounded-[20px] border border-gray-200 bg-white p-7 shadow-[0_8px_24px_rgba(26,26,26,0.05)] sm:p-9">
          <h2 className="font-display text-2xl font-bold text-charcoal">Send Us a Message</h2>
          <p className="mt-3 text-[15.5px] text-gray-700">
            Tell us what you need and our team will respond as soon as possible.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-2xl font-bold text-charcoal">Find Our Mumbai Office</h2>
        <p className="mt-3 max-w-[640px] text-[15.5px] text-gray-700">
          Zhypility InfoSolutions, 506, 5th Floor, Primus Business Park, Thane, Mumbai 400604,
          India.
        </p>
        <div className="mt-6 overflow-hidden rounded-[20px] border border-gray-200 shadow-[0_8px_24px_rgba(26,26,26,0.05)]">
          <iframe
            title="Zhypility InfoSolutions — Corporate Office, Thane, Mumbai"
            src={MUMBAI_MAP_EMBED_SRC}
            className="h-[320px] w-full sm:h-[380px] lg:h-[440px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href={MUMBAI_MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-[14.5px] font-semibold text-gold-dark hover:underline"
        >
          Get directions
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}
