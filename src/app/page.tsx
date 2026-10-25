import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PlatformStrip from "@/components/sections/PlatformStrip";
import AIContentCreation from "@/components/sections/AIContentCreation";
import Engagement from "@/components/sections/Engagement";
import Assessment from "@/components/sections/Assessment";
import Multilingual from "@/components/sections/Multilingual";
import PlatformManagement from "@/components/sections/PlatformManagement";
import Showcase from "@/components/sections/Showcase";
import Solutions from "@/components/sections/Solutions";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "ZhypLearn — AI-Powered Learning. Reimagined.",
  description:
    "ZhypLearn is Zhypility InfoSolutions' AI-powered Learning Management System. Create engaging learning experiences, deliver interactive training, and bring content, assessment and immersive learning together in one platform.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformStrip />
      <AIContentCreation />
      <Engagement />
      <Assessment />
      <Multilingual />
      <PlatformManagement />
      <Showcase />
      <Solutions />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
