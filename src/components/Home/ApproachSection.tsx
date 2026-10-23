"use client";

import React from "react";

interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Architect",
    description: "Understand requirements and define the right solution architecture.",
  },
  {
    number: "02",
    title: "Design",
    description: "Develop detailed technical design and implementation plan.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Execute and integrate solutions with precision and efficiency.",
  },
  {
    number: "04",
    title: "Govern",
    description: "Ensure quality, compliance and operational governance.",
  },
  {
    number: "05",
    title: "Support",
    description: "Provide continuous monitoring, maintenance and lifecycle support.",
  },
];

export default function ApproachSection() {
  return (
    <section className="relative w-full bg-white py-7 md:py-8 lg:py-10 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">

        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold tracking-[0.2em] text-slate-500 uppercase">
              OUR APPROACH
            </span>
            <span className="h-[2px] w-9 rounded-full bg-gradient-to-r from-[#F25A24] to-orange-300" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-[#0F172A] tracking-tight">
            One Partnership.{" "}
            <span className="bg-gradient-to-r from-[#5B1E38] via-[#C9232C] to-[#F25A24] bg-clip-text text-transparent">
              Complete Accountability.
            </span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed max-w-2xl pt-1">
            A unified delivery model from architecture to operations, ensuring successful outcomes at every stage.
          </p>
        </div>

        {/* Desktop / Large Screen Timeline Flow (5 Steps) */}
        <div className="relative hidden lg:block">

          {/* Subtle Dynamic Wave SVG Background */}
          <div className="pointer-events-none absolute inset-0 -top-8 -bottom-6 w-full h-[260px] overflow-visible z-0" aria-hidden="true">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 1200 240"
              fill="none"
            >
              <defs>
                <linearGradient id="approachWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F25A24" stopOpacity="0" />
                  <stop offset="25%" stopColor="#F25A24" stopOpacity="0.25" />
                  <stop offset="55%" stopColor="#F25A24" stopOpacity="0.15" />
                  <stop offset="85%" stopColor="#F25A24" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F25A24" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="approachWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="10%" stopColor="#CBD5E1" stopOpacity="0.1" />
                  <stop offset="35%" stopColor="#94A3B8" stopOpacity="0.2" />
                  <stop offset="60%" stopColor="#F25A24" stopOpacity="0.2" />
                  <stop offset="90%" stopColor="#F25A24" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="approachWaveFill" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="20%" stopColor="#F25A24" stopOpacity="0" />
                  <stop offset="45%" stopColor="#F25A24" stopOpacity="0.035" />
                  <stop offset="60%" stopColor="#F25A24" stopOpacity="0.015" />
                  <stop offset="85%" stopColor="#F25A24" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#F25A24" stopOpacity="0" />
                </linearGradient>
              </defs>


            </svg>
          </div>

          {/* Continuous Connecting Line between Node Centers */}
          <div
            className="pointer-events-none absolute top-[36px] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 z-0"
            aria-hidden="true"
          />

          {/* Small Orange Connecting Dots in the 4 gaps */}
          {/* Gap 1 (between 01 & 02) */}
          <div
            className="pointer-events-none absolute top-[36px] left-[20%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F25A24] shadow-[0_0_6px_rgba(242,90,36,0.5)] z-10"
            aria-hidden="true"
          />
          {/* Gap 2 (between 02 & 03) */}
          <div
            className="pointer-events-none absolute top-[36px] left-[40%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F25A24] shadow-[0_0_6px_rgba(242,90,36,0.5)] z-10"
            aria-hidden="true"
          />
          {/* Gap 3 (between 03 & 04) */}
          <div
            className="pointer-events-none absolute top-[36px] left-[60%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F25A24] shadow-[0_0_6px_rgba(242,90,36,0.5)] z-10"
            aria-hidden="true"
          />
          {/* Gap 4 (between 04 & 05) */}
          <div
            className="pointer-events-none absolute top-[36px] left-[80%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F25A24] shadow-[0_0_6px_rgba(242,90,36,0.5)] z-10"
            aria-hidden="true"
          />

          {/* 5 Process Nodes Grid */}
          <div className="relative z-10 grid grid-cols-5 gap-4">
            {approachSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center group">

                {/* 3D Sphere Style Number Badge */}
                <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08),0_4px_12px_rgba(242,90,36,0.12)] border border-slate-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_14px_30px_-5px_rgba(242,90,36,0.2)]">
                  {/* Subtle Orange Glow Top-Right Arc */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#F25A24] border-r-[#F25A24]/70 rotate-[-15deg] pointer-events-none opacity-85"
                    aria-hidden="true"
                  />

                  {/* Number Text */}
                  <span className="text-lg font-bold text-[#0F172A] tracking-tight">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0F172A] mt-6 mb-2.5 group-hover:text-[#F25A24] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-[200px] px-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Responsive Timeline View */}
        <div className="relative lg:hidden">
          {/* Vertical Connecting Line */}
          <div
            className="pointer-events-none absolute left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200 z-0"
            aria-hidden="true"
          />

          <div className="space-y-8 relative z-10">
            {approachSteps.map((step, idx) => (
              <div key={step.number} className="flex items-start gap-5 group">

                {/* Number Badge */}
                <div className="relative flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08),0_4px_10px_rgba(242,90,36,0.12)] border border-slate-100">
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#F25A24] border-r-[#F25A24]/70 rotate-[-15deg] pointer-events-none opacity-85"
                    aria-hidden="true"
                  />
                  <span className="text-base font-bold text-[#0F172A]">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1 group-hover:text-[#F25A24] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
