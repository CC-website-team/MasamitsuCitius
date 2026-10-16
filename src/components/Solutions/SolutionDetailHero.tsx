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
    <section className="relative z-10 overflow-hidden bg-[#061324] text-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 min-h-[480px] md:min-h-[520px] flex items-center">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={data.imageAlt || "Enterprise technology infrastructure"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top md:object-right opacity-90 md:opacity-100"
        />
        {/* Cool-toned Dark Blue Gradient Overlay: Strong opaque cover on left, fading to reveal illuminated server racks on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051120] via-[#061528]/95 to-[#081B34]/35 w-full md:w-[75%] lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051120]/95 via-[#061528]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051120]/60 via-transparent to-[#051120]/70 pointer-events-none" />
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
