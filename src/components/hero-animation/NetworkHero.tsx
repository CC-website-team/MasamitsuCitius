"use client";

import React from "react";
import Link from "next/link";

export default function NetworkHero() {
  const heroGifPath = "/images/services/CCTV Camera Pan.gif";

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-[#07111E] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">

      {/* BACKGROUND CONTAINER WITH CCTV CAMERA PAN GIF */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-[#07111E]">
        <img
          src={heroGifPath}
          alt="MASAMITSU CITIUS CCTV Camera Background"
          className="w-full h-full object-cover object-right lg:object-[80%_center] scale-[0.75] sm:scale-[0.78] lg:scale-[0.80] origin-right select-none pointer-events-none transition-transform duration-700"
        />

        {/* DARK NAVY GRADIENT OVERLAYS FOR OPTIMAL CONTRAST & READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111E] via-[#07111E]/90 to-transparent z-10 w-full lg:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111E]/60 via-transparent to-[#07111E]/80 z-10" />
      </div>

      {/* HERO CONTENT CONTAINER */}
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT COLUMN — HEADLINE, DESCRIPTION & CTAs NEATLY ALIGNED */}
          <div className="lg:col-span-8 space-y-6">

            {/* Main Headline */}
            <h1 className="font-extrabold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] leading-[1.12]">
              Technology for{" "}
              <span className="text-[#176DB2]">Secure, Intelligent &amp;</span>{" "}
              Resilient Infrastructure
            </h1>

            {/* Sub-paragraph */}
            <p className="max-w-xl text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              <strong className="text-white font-bold">MASAMITSU</strong> and{" "}
              <strong className="text-white font-bold">CitiusComm</strong> together combine Japanese engineering expertise with Indian execution capabilities.The breath of services would cover surveillance, cybersecurity, system integration and critical infrastructure solutions for enterprises and government organizations.
            </p>

            {/* Action Buttons — Smooth transition to Red (#C9232C) on hover */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#C9232C] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#a81a22] focus:outline-none"
              >
                <span>Request Consultation</span>
                <span className="text-base font-bold">→</span>
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/80 bg-white/10 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C9232C] hover:border-[#C9232C] hover:text-white focus:outline-none"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN SPACE FOR UNCLUTTERED CCTV VISUAL */}
          <div className="lg:col-span-4 relative hidden lg:block pointer-events-none" />

        </div>
      </div>

    </section>
  );
}