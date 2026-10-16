import AboutPartnershipHero from "@/components/About/AboutPartnershipHero";
import Methodology from "@/components/About/Methodology";
import AboutIndustries from "@/components/About/AboutIndustries";
{/*import VisionMission from "@/components/About/VisionMission";*/ }
import LeadershipMatters from "@/components/About/LeadershipMatters";
import CtaBand from "@/components/CtaBand";
import PageBackdrop from "@/components/ui/PageBackdrop";

export const metadata = {
  title: "About Us | Citiuscomm",
  description:
    "Citiuscomm builds technology ecosystems that scale with ambition, combining innovation, reliability, and deep execution expertise.",
};

const AboutPage = () => (
  <main className="bg-white">
    {/* One dot grid for the whole page */}
    <PageBackdrop />

    <div className="relative z-10">
      {/* 1. Hero Section: A Partnership Built Around Technology Excellence */}
      <AboutPartnershipHero />

      {/* 2. Methodology Section */}
      <Methodology />

      {/* 3. Industries Section */}
      <AboutIndustries />

      {/* 2. Vision & Mission Section 
      <VisionMission />*/}

      {/* 3. Leadership Matters Section */}
      <LeadershipMatters />

      {/* 4. Call to Action Band */}

    </div>
  </main>
);

export default AboutPage;
