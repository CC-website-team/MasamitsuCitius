import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SolutionItem } from "@/data/solutionsData";

interface SolutionSectionCardProps {
  item: SolutionItem;
  isLast?: boolean;
}

export default function SolutionSectionCard({ item, isLast = false }: SolutionSectionCardProps) {
  const isImageRight = item.layout === "text-left";
  const isOdd = parseInt(item.number, 10) % 2 !== 0;
  const bgClass = isOdd ? "bg-section-alt" : "bg-white";

  return (
    <section
      id={item.slug}
      className={`scroll-mt-32 sm:scroll-mt-36 py-7 md:py-8 lg:py-10 ${bgClass} ${
        !isLast ? "border-b border-slate-200/70" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 items-start">
          
          {/* Text Column */}
          <div
            className={`lg:col-span-6 flex flex-col justify-start ${
              isImageRight ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Number with Orange Line */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase">
                {item.number}
              </span>
              <span className="h-[3px] w-8 rounded-full bg-[#D95F02] shadow-[0_1px_4px_rgba(217,95,2,0.4)]" aria-hidden="true" />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-5">
              <Link
                href={item.ctaHref}
                className="hover:text-[#D95F02] transition-colors duration-200"
              >
                {item.title}
              </Link>
            </h2>

            {/* Tagline */}
            <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug mb-3">
              {item.tagline}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-7">
              {item.description}
            </p>

            {/* CTA Link */}
            <div>
              <Link
                href={item.ctaHref}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#D95F02] hover:text-[#B54E02] transition-colors duration-200 group"
              >
                <span>{item.ctaLabel}</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`lg:col-span-6 w-full ${
              isImageRight ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Link
              href={item.ctaHref}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm bg-slate-100 group block focus:outline-none focus:ring-2 focus:ring-[#D95F02]"
            >
              <Image
                src={item.imagePath}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                priority={item.number === "01"}
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
