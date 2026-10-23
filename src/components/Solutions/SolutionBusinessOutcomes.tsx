"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";

interface OutcomeItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const defaultOutcomes: OutcomeItem[] = [
  {
    id: "scalable-foundations",
    number: "01",
    title: "Scalable Hybrid & Multi-Cloud Foundations",
    description:
      "Deploy elastic cloud architectures and standardized landing zones that scale seamlessly across sites, racks, and regions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "reduced-disruption",
    number: "02",
    title: "Reduced Migration Disruption",
    description:
      "Structured dependency mapping, phased migration waves, and validated cutover runbooks to ensure business operational continuity.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "resilience-recovery",
    number: "03",
    title: "Improved Resilience & Recovery Readiness",
    description:
      "Automated backup replication, cloud-based disaster recovery landing zones, and regular failover testing to protect mission-critical data.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "visibility-utilisation",
    number: "04",
    title: "Better Cloud Visibility & Resource Utilisation",
    description:
      "Unified telemetry, real-time observability dashboards, and proactive cost optimization controls across private and public cloud workloads.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "governed-ai",
    number: "05",
    title: "Governed Deployment of Production AI Workloads",
    description:
      "Enterprise MLOps pipelines, AI safety guardrails, continuous model monitoring, and automated lifecycle governance from dev to production.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

interface SolutionBusinessOutcomesProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  outcomes?: OutcomeItem[];
}

export default function SolutionBusinessOutcomes({
  eyebrow = "BUSINESS OUTCOMES & VALUE",
  title = "Enterprise Value Delivered",
  subtitle = "Architected for reliability, scalability, and operational excellence across hybrid multi-cloud environments.",
  outcomes = defaultOutcomes,
}: SolutionBusinessOutcomesProps) {
  return (
    <section className="py-7 md:py-8 lg:py-10 bg-[#FAFAFC] border-t border-slate-200/70">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#D95F02] uppercase">
              {eyebrow}
            </span>
            <span className="h-[2px] w-6 bg-[#D95F02]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* 5 Outcomes Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {outcomes.map((item, idx) => (
            <Reveal key={item.id} delay={Math.min(idx * 0.07, 0.35)} className="h-full">
              <div className="group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-[#D95F02]/40 shadow-xs hover:shadow-lg transition-all duration-300">
                {/* Top Accent Line on Hover */}
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#D95F02] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />

                <div>
                  {/* Top Row: Icon + Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-orange-50 text-[#D95F02] group-hover:bg-[#D95F02] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#D95F02] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-[#D95F02] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
