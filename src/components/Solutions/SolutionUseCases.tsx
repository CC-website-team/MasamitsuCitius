import React from "react";
import Reveal from "@/components/ui/Reveal";
import { SolutionUseCase } from "@/data/individualSolutionsData";

interface SolutionUseCasesProps {
  title: string;
  subtitle: string;
  useCases: SolutionUseCase[];
  eyebrow?: string;
}

export default function SolutionUseCases({
  title,
  subtitle,
  useCases,
  eyebrow = "INDUSTRY USE CASES",
}: SolutionUseCasesProps) {
  return (
    <section className="py-7 md:py-8 lg:py-10 bg-white border-t border-slate-200/70">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#D95F02] uppercase">
              {eyebrow}
            </span>
            <span className="h-[2px] w-6 bg-[#D95F02]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-5">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Responsive Use Case Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {useCases.map((useCase, idx) => (
            <Reveal key={useCase.sector} delay={idx * 0.08} className="h-full">
              <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0B132B] text-white shadow-lg relative overflow-hidden group hover:border-[#D95F02]/50 transition-all duration-300">

                {/* Background Scrim Accent */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-[#D95F02]/10 rounded-full blur-2xl group-hover:bg-[#D95F02]/20 transition-all duration-500" />

                <div>
                  {/* Sector Tag */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider text-orange-300 uppercase mb-4">
                    {useCase.sector}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                </div>

                {/* Highlight Metric Badge */}


              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
