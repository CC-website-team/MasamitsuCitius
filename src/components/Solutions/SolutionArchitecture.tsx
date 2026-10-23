import React from "react";
import Reveal from "@/components/ui/Reveal";
import { ArchitectureStep } from "@/data/individualSolutionsData";

interface SolutionArchitectureProps {
  title: string;
  subtitle: string;
  steps: ArchitectureStep[];
}

export default function SolutionArchitecture({
  title,
  subtitle,
  steps,
}: SolutionArchitectureProps) {
  return (
    <section className="py-7 md:py-8 lg:py-10 bg-section-alt relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8 relative z-10">



        {/* Multi-Step Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${steps.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            } gap-4 md:gap-5 lg:gap-6`}
        >
          {steps.map((step, idx) => (
            <Reveal key={step.number} delay={Math.min(idx * 0.05, 0.4)} className="h-full">
              <div className="relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">

                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl sm:text-3xl font-black text-[#D95F02] font-mono tracking-tight">
                      {step.number}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#D95F02]/40" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Optional Capabilities List */}
                  {step.capabilities && step.capabilities.length > 0 && (
                    <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3">
                      {step.capabilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#D95F02] font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>



              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
