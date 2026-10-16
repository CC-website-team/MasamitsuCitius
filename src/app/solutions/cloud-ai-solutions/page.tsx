import React from "react";
import { notFound } from "next/navigation";
import { individualSolutionsData } from "@/data/individualSolutionsData";
import SolutionPageNav from "@/components/Solutions/SolutionPageNav";
import SolutionDetailHero from "@/components/Solutions/SolutionDetailHero";
import SolutionCapabilitiesGrid from "@/components/Solutions/SolutionCapabilitiesGrid";
import SolutionArchitecture from "@/components/Solutions/SolutionArchitecture";
import SolutionUseCases from "@/components/Solutions/SolutionUseCases";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Cloud & AI Solutions | Citiuscomm",
  description:
    "Integrated enterprise hybrid multi-cloud foundations, automated landing zones, generative AI applications, computer vision, and 24/7 MLOps governance.",
};

export default function CloudAiSolutionsPage() {
  const data = individualSolutionsData["cloud-ai-solutions"];

  if (!data) {
    notFound();
  }

  return (
    <main className="relative bg-[#FAFAFC] text-slate-900 min-h-screen">
      {/* Sticky Sub-Nav */}
      <SolutionPageNav />

      {/* Hero Section */}
      <SolutionDetailHero data={data} />

      {/* Capabilities & Pillars Grid */}
      <SolutionCapabilitiesGrid
        title={data.capabilitiesTitle}
        subtitle={data.capabilitiesSubtitle}
        capabilities={data.capabilities}
      />

      {/* Architecture & Delivery Process */}
      <SolutionArchitecture
        title={data.architectureTitle}
        subtitle={data.architectureSubtitle}
        steps={data.architectureSteps}
      />

      {/* Real-World Use Cases */}
      <SolutionUseCases
        title={data.useCasesTitle}
        subtitle={data.useCasesSubtitle}
        useCases={data.useCases}
      />

      {/* CTA Band */}
      <CtaBand />
    </main>
  );
}
