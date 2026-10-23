"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

interface IndustryCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  icon: React.ReactNode;
}

const industryCards: IndustryCardData[] = [
  {
    id: "government",
    title: "Government",
    description: "Securing public infrastructure and citizen services.",
    image: "/images/industries/government-1200.webp",
    imagePosition: "object-[center_35%]",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M4 18h16M5 10v8M9 10v8M15 10v8M19 10v8M12 3l9 5H3l9-5z"
        />
      </svg>
    ),
  },
  {
    id: "smart-cities",
    title: "Smart Cities",
    description: "Improving safety, visibility, and operational efficiency.",
    image: "/images/about/smart-cities.webp",
    imagePosition: "object-[center_45%]",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4M9 7h1m-1 4h1m-1 4h1m6-8h1m-1 4h1m-1 4h1"
        />
      </svg>
    ),
  },
  {
    id: "airports-transportation",
    title: "Airports & Transportation",
    description: "Delivering intelligent security and monitoring environments.",
    image: "/images/about/airport-transportation.webp",
    imagePosition: "object-center",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
        />
      </svg>
    ),
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Protecting facilities, operations, and personnel.",
    image: "/images/industries/manufacturing-1200.webp",
    imagePosition: "object-center",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
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
  {
    id: "bfsi",
    title: "BFSI",
    description: "Strengthening physical and digital security frameworks.",
    image: "/images/industries/banking-1200.webp",
    imagePosition: "object-[center_30%]",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Creating secure and connected healthcare environments.",
    image: "/images/industries/healthcare-1200.webp",
    imagePosition: "object-center",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
      </svg>
    ),
  },
];

export default function AboutIndustries() {
  return (
    <section className="relative w-full bg-white py-7 md:py-8 lg:py-10 border-t border-slate-100">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10 md:mb-12">
          {/* Eyebrow */}
          <Reveal className="text-left">
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="h-[2px] w-6 bg-[#C9232C]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#142B45] uppercase">
                INDUSTRIES
              </span>
              <span className="h-[2px] w-6 bg-[#176DB2]" />
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.08} className="text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#142B45] leading-[1.18]">
              Industry Solutions Built Around{" "}
              <span className="text-[#C9232C]">Real Challenges</span>
            </h2>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.14} className="text-left">
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We work with industries to design, build, and manage secure, intelligent,
              and future-ready technology environments.
            </p>
          </Reveal>
        </div>

        {/* 3x2 Grid — Compact, Equal Height, Clean Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industryCards.map((card, idx) => (
            <Reveal key={card.id} delay={0.1 + (idx % 3) * 0.06} className="h-full">
              <article
                className="group relative flex flex-col justify-end h-[230px] sm:h-[240px] lg:h-[250px] w-full overflow-hidden rounded-xl bg-[#091C30] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl border border-slate-200/50 hover:border-slate-300/80 cursor-default select-none"
              >
                {/* Background Industry Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover ${card.imagePosition || "object-center"} transition-transform duration-500 ease-out group-hover:scale-105`}
                />

                {/* Refined Navy Gradient Scrim Overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#061424] via-[#091D33]/80 to-[#0A2540]/25 transition-opacity duration-300 group-hover:opacity-95"
                />

                {/* Subtle top-edge accent highlight */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Card Content Overlay */}
                <div className="relative z-10 p-5 sm:p-5.5 flex flex-col justify-end w-full">
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xs transition-all duration-300 group-hover:bg-[#C9232C] group-hover:border-[#C9232C] group-hover:text-white">
                      {card.icon}
                    </div>

                    <h3 className="text-base sm:text-[17px] font-bold text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Short Readable Description */}
                  <p className="text-xs sm:text-[13px] text-slate-200/85 leading-relaxed font-normal line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
