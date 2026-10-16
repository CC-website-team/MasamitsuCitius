import React from "react";

interface SolutionScopeFeaturesProps {
  title?: string;
  subtitle?: string;
  features: string[];
  eyebrow?: string;
}

export default function SolutionScopeFeatures({
  title = "Scope and Features",
  subtitle = "Comprehensive end-to-end execution across discovery, architecture, automation, operations, and governance.",
  features,
  eyebrow,
}: SolutionScopeFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <section className="relative z-10 bg-[#070E1B] text-white py-12 md:py-16 lg:py-20 border-t border-slate-800/80 overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D95F02_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {eyebrow && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#D95F02] uppercase">
                {eyebrow}
              </span>
              <span className="h-[2px] w-6 bg-[#D95F02]" aria-hidden="true" />
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 11 Features Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={idx}
                className="group relative bg-slate-900/90 bg-gradient-to-b from-slate-850/90 to-slate-900/95 border border-slate-800 hover:border-[#D95F02]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Top Row: Icon + Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D95F02]/15 border border-[#D95F02]/30 text-[#D95F02] group-hover:bg-[#D95F02] group-hover:text-white transition-colors duration-300">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#D95F02] transition-colors">
                    {num}
                  </span>
                </div>

                {/* Feature Description */}
                <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed group-hover:text-white transition-colors">
                  {feature}
                </p>

                {/* Bottom subtle accent line on hover */}
                <div className="mt-5 h-0.5 w-0 bg-[#D95F02] transition-all duration-300 group-hover:w-full rounded-full" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
