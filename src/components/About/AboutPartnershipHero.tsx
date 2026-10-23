"use client";

import React from "react";
import Image from "next/image";

export default function AboutPartnershipHero() {
  return (
    <section className="relative w-full bg-white pt-24 pb-7 md:pt-28 md:pb-8 lg:pt-32 lg:pb-10 border-b border-slate-100">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-start space-y-5 lg:space-y-6">

            {/* Eyebrow: Who We Are */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#C9232C]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#142B45] uppercase">
                WHO WE ARE
              </span>
              <span className="h-[2px] w-7 bg-[#176DB2]" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold leading-[1.15] text-[#142B45] tracking-tight">
              A Partnership Built Around{" "}
              <span className="text-[#C9232C]">Technology Excellence</span>
            </h1>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal">
              <p>
                <strong className="text-[#142B45] font-semibold">MASAMITSU × Citius</strong> was formed to bridge the gap between accessible world-class technology design and reliable project execution.
              </p>
              <p>
                By combining Japanese technology standards with Indian delivery expertise, we help organizations deploy technology solutions that are secure, scalable, and sustainable.Working ahead of time for security and supervision.
              </p>
            </div>

          </div>

          {/* Right Column: Image Displayed Seamlessly (No Cards or Boxes) */}
          <div className="lg:col-span-6 flex items-start justify-center lg:justify-end w-full">
            <div className="relative aspect-[1/1] sm:aspect-[1.05/1] w-full max-w-[520px] overflow-hidden rounded-2xl shadow-sm border border-slate-100">
              <Image
                src="/images/about/IMG-20260817-WA0017.jpg.jpeg"
                alt="A Partnership Built Around Technology Excellence - MASAMITSU and CitiusComm"
                fill
                className="object-cover object-[center_12%]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
