import React from "react";
import Image from "next/image";
import { IndividualSolutionDetail } from "@/data/individualSolutionsData";

interface SolutionDetailHeroProps {
  data: IndividualSolutionDetail;
}

export default function SolutionDetailHero({ data }: SolutionDetailHeroProps) {
  const heroImage =
    data.imagePath && data.imagePath.trim() !== ""
      ? data.imagePath
      : "/images/solutions/cloud-infrastructure-hero.png";

  return (
    <section className="relative z-10 overflow-hidden bg-[#051120] text-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 min-h-[480px] md:min-h-[520px] lg:min-h-[540px] flex items-center">
      {/* Full-width 16:9 Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={data.imageAlt || "Enterprise technology infrastructure"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-right"
        />
        {/*
          Smooth asymmetric gradient overlay:
          - Strongest dark coverage on the left (solid #051120) behind heading and text content for crystal-clear readability
          - Smooth, progressive linear transition across the center
          - Fades out cleanly toward the right to showcase the 16:9 background image with high fidelity and zero murky opacity
        */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,17,32,0.98) 0%, rgba(5,17,32,0.94) 32%, rgba(5,17,32,0.80) 50%, rgba(5,17,32,0.40) 70%, rgba(5,17,32,0.05) 90%, rgba(5,17,32,0.0) 100%)",
          }}
        />
        {/* Subtle top/bottom edge blend to seamlessly transition into surrounding page chrome */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051120]/40 via-transparent to-[#051120]/60 pointer-events-none" />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8 relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow badge */}
          {data.eyebrow && (
            <div className="flex items-center gap-2 mb-3.5 sm:mb-4">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#D95F02] uppercase">
                {data.eyebrow}
              </span>
              <span className="h-[2px] w-6 bg-[#D95F02]" aria-hidden="true" />
            </div>
          )}

          {/* Title & Orange Highlight */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold tracking-tight text-white leading-[1.08]">
            <span className="block max-w-lg">{data.title}</span>
            {data.highlight && (
              <span className="text-[#D95F02] block mt-1 sm:mt-1.5 font-extrabold">
                {data.highlight}
              </span>
            )}
          </h1>

          {/* Subheading / Tagline */}
          {data.tagline && (
            <h2 className="mt-5 mb-2.5 text-base sm:text-lg md:text-xl font-bold text-white leading-snug tracking-wide">
              {data.tagline}
            </h2>
          )}

          {/* Hero Supporting Paragraphs */}
          {data.heroDescription && (
            <div className="mt-5 space-y-4 text-sm sm:text-base md:text-[16px] text-slate-200/90 leading-relaxed max-w-xl font-normal">
              {data.heroDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
