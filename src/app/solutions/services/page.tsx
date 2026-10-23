import { solutionsData } from "@/data/solutionsData";
import SolutionsHero from "@/components/Solutions/SolutionsHero";
import SolutionsSubNav from "@/components/Solutions/SolutionsSubNav";
import SolutionSectionCard from "@/components/Solutions/SolutionSectionCard";
import SolutionsCtaBanner from "@/components/Solutions/SolutionsCtaBanner";

export const metadata = {
  title: "Solutions | Citiuscomm",
  description:
    "End-to-end technology solutions that help businesses, communities and industries stay ahead. Explore Networking & FTTx, Data Centre, Cyber Security, Managed Services, Electric Mobility, and IoT & Industrial Automation.",
};

export default function SolutionsPage() {
  return (
    <main className="relative bg-[#FAFAFC] text-slate-900 min-h-screen">
      {/* 1. Hero Section */}
      <SolutionsHero />

      {/* 2. Sticky Sub-Nav Tabs */}
      <SolutionsSubNav />

      {/* 3. The 6 Alternating Solution Sections */}
      <div className="relative">
        {solutionsData.map((item, index) => (
          <SolutionSectionCard
            key={item.slug}
            item={item}
            isLast={index === solutionsData.length - 1}
          />
        ))}
      </div>

      {/* 4. Opportunity CTA Banner */}
      <SolutionsCtaBanner />
    </main>
  );
}
