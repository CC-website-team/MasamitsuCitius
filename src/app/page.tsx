import ScrollUp from "@/components/Common/ScrollUp";
import NetworkHero from "@/components/hero-animation/NetworkHero";
import PartnershipSection from "@/components/Home/PartnershipSection";
import SolutionsSection from "@/components/Home/SolutionsSection";
import IndustriesSection from "@/components/Home/IndustriesSection";
import CtaSection from "@/components/Home/CtaSection";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">
      <ScrollUp />
      <div className="relative z-10">
        {/* Section 1: CCTV Video Hero */}
        <NetworkHero />

        {/* Section 2: Japanese Precision. Indian Execution Excellence. Partnership */}
        <PartnershipSection />

        {/* Section 3: End-to-End Technology Solutions Cards */}
        <SolutionsSection />


        {/* Section 5: Let's Build Your Next Technology Project CTA */}
        <CtaSection />
      </div>
    </main>
  );
}
