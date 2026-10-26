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
    addressLines: ["HIG-148, Sailashree Vihar", "Bhubaneswar, Odisha-21", "India"],
    // No map link: the only map link associated with this office on the
    // live reference site actually resolves to Primus Business Park in
    // Thane (the Corporate Office's building), not Bhubaneswar — so it is
    // not a verified destination for this address. Omitted rather than
    // shown incorrectly; needs a verified link supplied before launch.
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

function formatTelHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="flex flex-col gap-3.5 rounded-[20px] border border-gray-200 bg-white p-7 shadow-[0_8px_24px_rgba(26,26,26,0.05)] transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_16px_36px_rgba(26,26,26,0.1)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-gold/22 bg-gradient-to-br from-gold/22 to-gold/6 text-gold-dark">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18M6 21V8l6-4 6 4v13M9 21v-6h6v6" />
        </svg>
      </div>
      <h3 className="font-display text-lg font-bold text-charcoal">{office.name}</h3>
      <div className="flex flex-col gap-1 text-[15px] text-gray-700">
        {office.companyLine && <span className="font-semibold text-charcoal">{office.companyLine}</span>}
        {office.addressLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      {office.phones && office.phones.length > 0 && (
        <div className="flex flex-col gap-1">
          {office.phones.map((phone) => (
            <a key={phone} href={formatTelHref(phone)} className="text-[15px] font-semibold text-gold-dark hover:underline">
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
          className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold-dark hover:underline"
        >
          View on map
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {OFFICES.map((office) => (
          <OfficeCard key={office.name} office={office} />
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="max-w-[480px]">
          <h2 className="font-display text-2xl font-bold text-charcoal">Send Us a Message</h2>
          <p className="mt-3 text-[15.5px] text-gray-700">
            Tell us what you need and our team will respond as soon as possible.
          </p>
        </div>
        <div className="rounded-[20px] border border-gray-200 bg-white p-7 shadow-[0_8px_24px_rgba(26,26,26,0.05)] sm:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
