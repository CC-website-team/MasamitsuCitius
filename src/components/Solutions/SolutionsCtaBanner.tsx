import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SolutionsCtaBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Background Graphic / Mountain Skyline Overlay */}
      {/* CTA Gradient Background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute left-0 bottom-0 h-full w-full opacity-35"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 350 C 300 150, 600 450, 1300 200"
            stroke="url(#cta-grad-1)"
            strokeWidth="2"
          />

          <path
            d="M-50 280 C 400 380, 800 100, 1350 320"
            stroke="url(#cta-grad-2)"
            strokeWidth="1.5"
          />

          <defs>
            <linearGradient
              id="cta-grad-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>

            <linearGradient
              id="cta-grad-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

          {/* Left Text Box */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="h-[2px] w-6 bg-[#D95F02]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-300">
                LET'S BUILD WHAT'S NEXT
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-3">
              Ready to turn your next opportunity into impact?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Partner with CitiusComm and let's build a more connected tomorrow.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <span>Let's connect</span>
              <svg
                className="w-4 h-4 shrink-0"
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
      </div>
    </section>
  );
}
