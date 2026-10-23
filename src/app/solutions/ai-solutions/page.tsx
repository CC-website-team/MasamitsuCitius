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
  title: "AI Solutions | Citiuscomm × MASAMITSU",
  description:
    "AI that works in production, not just in demos. We architect hybrid multi-cloud foundations and deploy production-grade AI that transform enterprise operations.",
};

export default function AISolutionsPage() {
  const data = individualSolutionsData["ai-solutions"];

  if (!data) {
    notFound();
  }

  return (
    <main className="relative bg-[#FAFAFC] text-slate-900 min-h-screen">
      {/* 1. Sticky Sub‑Nav */}
      <SolutionPageNav />

      {/* 2. Hero */}
      <SolutionDetailHero data={data} />

      {/* 3. Capabilities */}
      <SolutionCapabilitiesGrid
        eyebrow="CAPABILITIES & PILLARS"
        title={data.capabilitiesTitle}
        subtitle={data.capabilitiesSubtitle}
        capabilities={data.capabilities}
      />


      {/* 5. Industry Use Cases */}
      <SolutionUseCases
        eyebrow="INDUSTRY USE CASES"
        title={data.useCasesTitle}
        subtitle={data.useCasesSubtitle}
        useCases={data.useCases}
      />

      {/* 6. CTA */}
      <CtaBand
        title="Ready to build what's next."
        description="Let's start the conversation."
        primaryLabel="Talk to Our Experts"
        primaryHref="/contact"
      />
    </main>
  );
}
