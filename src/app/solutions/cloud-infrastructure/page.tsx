import React from "react";
import { notFound } from "next/navigation";
import { individualSolutionsData } from "@/data/individualSolutionsData";
import SolutionPageNav from "@/components/Solutions/SolutionPageNav";
import SolutionDetailHero from "@/components/Solutions/SolutionDetailHero";
import SolutionCapabilitiesGrid from "@/components/Solutions/SolutionCapabilitiesGrid";
import SolutionBusinessOutcomes from "@/components/Solutions/SolutionBusinessOutcomes";
import SolutionUseCases from "@/components/Solutions/SolutionUseCases";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Cloud Infrastructure Solutions | Citiuscomm × MASAMITSU",
  description:
    "We architect hybrid multi-cloud foundations and deploy production-grade AI that transform enterprise operations. Cloud landing zones, container orchestration, and continuous observability.",
};

export default function CloudInfrastructurePage() {
  const data = individualSolutionsData["cloud-infrastructure"];

  if (!data) {
    notFound();
  }

  return (
    <main className="relative bg-[#FAFAFC] text-slate-900 min-h-screen">
      {/* 1. Sticky Sub-Nav with active indicator */}
      <SolutionPageNav />

      {/* 2. Hero Section */}
      <SolutionDetailHero data={data} />

      {/* 3. Capabilities & Pillars Grid (5 Pillars) */}
      <SolutionCapabilitiesGrid
        eyebrow="CAPABILITIES & PILLARS"
        title={data.capabilitiesTitle}
        subtitle={data.capabilitiesSubtitle}
        capabilities={data.capabilities}
      />

      {/* 5. Real-World Industry Use Cases (5 Cards) */}
      <SolutionUseCases
        eyebrow="INDUSTRY USE CASES"
        title={data.useCasesTitle}
        subtitle={data.useCasesSubtitle}
        useCases={data.useCases}
      />

      {/* 6. Call to Action Band */}
      <CtaBand
        title="Build Your Next-Generation Cloud Foundation"
        description="Connect scalable cloud infrastructure with secure, resilient operations and production-ready AI."
        primaryLabel="Talk to Our Experts"
        primaryHref="/contact"
      />
    </main>
  );
}
