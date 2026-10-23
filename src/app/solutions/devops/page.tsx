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
  title: "DevOps Solutions | Citiuscomm × MASAMITSU",
  description:
    "We design, develop, modernise, secure and operate business applications across their entire lifecycle, from custom development to automated delivery, continuous security and 24/7 managed support.",
};

const devopsOutcomes = [
  {
    id: "faster-releases",
    number: "01",
    title: "Faster and More Consistent Software Releases",
    description:
      "Automated CI/CD pipelines eliminate manual deployment bottlenecks, enabling predictable, repeatable, and frequent software release cadences.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "improved-quality",
    number: "02",
    title: "Improved Delivery Quality and Deployment Reliability",
    description:
      "Automated regression testing, environment consistency, and canary release strategies ensure resilient rollouts with minimal failure rates.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "earlier-security",
    number: "03",
    title: "Earlier Identification of Security Vulnerabilities",
    description:
      "Shift-left automated security scanning, container auditing, and secrets management detect vulnerabilities during development, not after release.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "visibility-resilience",
    number: "04",
    title: "Greater Application Visibility and Operational Resilience",
    description:
      "End-to-end distributed tracing, application performance measurement, and real-time observability provide complete operational transparency.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "continuous-operations",
    number: "05",
    title: "Continuous Operations and 24/7 Managed Support",
    description:
      "Site reliability engineering (SRE) practices, automated alert routing, and SLA-backed management ensure high application availability.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function DevOpsPage() {
  const data = individualSolutionsData["devops"];

  if (!data) {
    notFound();
  }

  return (
    <main className="relative bg-[#FAFAFC] text-slate-900 min-h-screen">
      {/* 1. Sticky Sub-Nav with active indicator */}
      <SolutionPageNav />

      {/* 2. Hero Section */}
      <SolutionDetailHero data={data} />

      {/* 3. Core Capabilities Grid (4 Supplied Pillars) */}
      <SolutionCapabilitiesGrid
        eyebrow="SOFTWARE EXCELLENCE"
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
        title="Deliver Better Software, Faster."
        description="Build a secure, automated and reliable software delivery lifecycle with integrated DevOps engineering and continuous operations."
        primaryLabel="Talk to Our Experts"
        primaryHref="/contact"
      />
    </main>
  );
}
