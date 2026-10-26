import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { isProductionDeploy, siteUrl } from "@/lib/env";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HashScrollFix from "@/components/HashScrollFix";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteDescription =
  "ZhypLearn is Zhypility InfoSolutions' AI-powered Learning Management System: AI-assisted content creation, assessment and verification, and multilingual, immersive learning.";

const siteTitle = "ZhypLearn: A New Era of AI-Powered Learning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: siteTitle,
    template: "%s | ZhypLearn",
  },
  description: siteDescription,
  robots: isProductionDeploy()
    ? { index: true, follow: true }
    : { index: false, follow: false },
  // No social-sharing image exists yet (see DECISIONS_LOG.md) — text-only
  // Open Graph/Twitter metadata for now; "summary" card (not
  // "summary_large_image", which expects an image) until one is supplied.
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl(),
    siteName: "ZhypLearn",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zhypility InfoSolutions",
  url: siteUrl(),
  description: "Developer of ZhypLearn, an AI-powered Learning Management System.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-charcoal-soft bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <HashScrollFix />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
