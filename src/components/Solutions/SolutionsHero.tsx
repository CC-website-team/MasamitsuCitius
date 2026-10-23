import React from "react";

export default function SolutionsHero() {
  return (
    <section className="relative pt-[110px] pb-10 md:pt-[130px] md:pb-12 lg:pt-[140px] lg:pb-14 bg-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">

          {/* Left Column: Eyebrow, Heading, Paragraph */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="h-[2px] w-6 bg-[#D95F02]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500">
                OUR SOLUTIONS
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Built for a more{" "}
              <span className="text-[#D95F02]">reliable</span> tomorrow<span className="text-slate-900">.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              We bring together leading products , services and system integration capabilities under one roof.
            </p>
          </div>

          {/* Right Column: Stacked Callout (Desktop) */}
          <div className="shrink-0 lg:pt-2">
            <div className="border-l-2 border-[#D95F02]/80 pl-4 py-0.5 text-xs sm:text-sm font-bold tracking-widest text-slate-600 wordcase leading-snug space-y-0.5">
              <div>Vendor agnostic</div>
              <div>Cost effective solution</div>
              <div>Flexible CapEx and OpEx models </div>
              <div>Faster Delievery</div>
              <div>PAN India capabilities</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
