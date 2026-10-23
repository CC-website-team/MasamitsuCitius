"use client";

import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    step: "01",
    title: "DESIGN",
    accentColor: "text-[#FF7A00]",
    bgColor: "bg-orange-50/80 border-orange-200/80",
    shadowColor: "shadow-orange-500/10 border-orange-100",
    description:
      "Develop detailed technical design and implementation plan.",
    icon: (
      <svg
        className="w-7 h-7 text-[#FF7A00]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zM4 7a2 2 0 100 4 2 2 0 000-4zm16 0a2 2 0 100 4 2 2 0 000-4zM6 11l4 7m4-7l-4 7m-6 2h16"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "DEPLOY",
    accentColor: "text-[#156EB0]",
    bgColor: "bg-blue-50/80 border-blue-200/80",
    shadowColor: "shadow-blue-500/10 border-blue-100",
    description:
      "Execute and integrate solutions with precision and efficiency.",
    icon: (
      <svg
        className="w-7 h-7 text-[#156EB0]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 7v6m-3-3h6"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "GOVERN",
    accentColor: "text-[#156EB0]",
    bgColor: "bg-blue-50/80 border-blue-200/80",
    shadowColor: "shadow-blue-500/10 border-blue-100",
    description:
      "Ensure quality, compliance and operational governance.",
    icon: (
      <svg
        className="w-7 h-7 text-[#156EB0]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01-.06-.312m-2.24 2.24a6 6 0 00-2.12 4.13h3.5m-3.5 0a6 6 0 01-1.37-3.63"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "SUPPORT",
    accentColor: "text-[#FF7A00]",
    bgColor: "bg-orange-50/80 border-orange-200/80",
    shadowColor: "shadow-orange-500/10 border-orange-100",
    description:
      "Provide continuous monitoring, maintenance and lifecycle support.",
    icon: (
      <svg
        className="w-7 h-7 text-[#FF7A00]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function Methodology() {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-white py-7 md:py-8 lg:py-10">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-8">
        {/* Eyebrow badge */}
        <Reveal className="text-left">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-6 rounded-full bg-[#156EB0]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#156EB0]">
              OUR METHODOLOGY
            </span>
          </div>
        </Reveal>

        {/* Main Heading */}
        <Reveal delay={0.1} className="text-left">
          <h1 className="max-w-4xl text-2xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-[#19344D] leading-tight">
            An approach that delivers value at every step.
          </h1>
        </Reveal>

        {/* 4-Step Cards Flow */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((item, idx) => (
            <Reveal key={item.title} delay={0.2 + idx * 0.08}>
              <div className="group flex flex-col items-center text-center">
                {/* Circular Outer Container */}
                <div
                  className={`relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl ${item.shadowColor} transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28`}
                >
                  {/* Inner ring */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full border ${item.bgColor} transition-colors sm:h-18 sm:w-18`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Step Title */}
                <h2
                  className={`mb-3 text-base sm:text-lg font-bold uppercase tracking-widest ${item.accentColor}`}
                >
                  {item.title}
                </h2>

                {/* Step Description */}
                <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
