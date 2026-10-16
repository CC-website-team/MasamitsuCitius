import React from "react";
import { notFound } from "next/navigation";
import { individualSolutionsData } from "@/data/individualSolutionsData";
import SolutionPageNav from "@/components/Solutions/SolutionPageNav";
import SolutionDetailHero from "@/components/Solutions/SolutionDetailHero";
import SolutionCapabilitiesGrid from "@/components/Solutions/SolutionCapabilitiesGrid";
import SolutionScopeFeatures from "@/components/Solutions/SolutionScopeFeatures";
import SolutionUseCases from "@/components/Solutions/SolutionUseCases";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Connectivity Solutions | Citiuscomm",
  description:
    "We architect and manage the connectivity layer that links your sites, data centres, clouds, devices and people — securely and reliably.",
};

export default function DataCentreCloudSolutionPage() {
  const data = individualSolutionsData["data-centre-cloud"];

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
        eyebrow="PHYSICAL TO CLOUD NETWORKING"
        title={data.capabilitiesTitle}
        subtitle={data.capabilitiesSubtitle}
        capabilities={data.capabilities}
      />


      {/* Real-World Use Cases / Target Industry Deployments */}
      <SolutionUseCases
        eyebrow="INDUSTRY USE CASES"
        title={data.useCasesTitle}
        subtitle={data.useCasesSubtitle}
        useCases={data.useCases}
      />

      {/* CTA Band */}
      <CtaBand />
    </main>
  );
}

