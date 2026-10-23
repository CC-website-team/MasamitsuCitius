"use client";

import React from "react";
import { processSteps } from "@/data/solutionsData";

// Icons matching reference image:
const DiscoverIcon = () => (
  <svg className="w-7 h-7 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-7 h-7 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m8-10h-2M6 12H4m14.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 6a6 6 0 00-6 6c0 2.22 1.21 4.156 3 5.196V18a1 1 0 001 1h4a1 1 0 001-1v-.804c1.79-1.04 3-2.976 3-5.196a6 6 0 00-6-6z" />
  </svg>
);

const DeployIcon = () => (
  <svg className="w-7 h-7 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const OptimiseIcon = () => (
  <svg className="w-7 h-7 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const GrowIcon = () => (
  <svg className="w-7 h-7 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.97 5.97 0 00-.942 3.197m0 0A9.093 9.093 0 012.25 18.24a3 3 0 014.682-2.72m.94 3.198l-.001.031c0 .225.012.447.037.666A11.94 11.94 0 0012 21a11.94 11.94 0 005.963-1.584M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const stepIcons = [DiscoverIcon, DesignIcon, DeployIcon, OptimiseIcon, GrowIcon];

export default function SolutionsProcess() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] py-7 md:py-8 lg:py-10">
      {/* Decorative Corner Background Overlay - Top Right Soft Radial Glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-bl from-slate-200/50 via-slate-100/30 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Decorative Corner Background Overlay - Bottom Left Warm Orange Arches */}
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 opacity-70"
        aria-hidden="true"
      >
        <svg viewBox="0 0 300 300" fill="none" className="h-full w-full">
          <circle cx="20" cy="280" r="260" stroke="#FDBA74" strokeWidth="1.2" strokeOpacity="0.35" />
          <circle cx="20" cy="280" r="200" stroke="#F97316" strokeWidth="1" strokeOpacity="0.25" />
          <circle cx="20" cy="280" r="140" stroke="#D95F02" strokeWidth="1" strokeOpacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 md:px-8">


        {/* Process Cards Grid with Connecting Wave */}
        <div className="relative mt-2">
          {/* Connecting Curved Wave Line + Arrows (Desktop / Tablet view) */}
          <div className="pointer-events-none absolute left-0 top-7 hidden h-16 w-full lg:block z-0" aria-hidden="true">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 60" fill="none">
              {/* Smooth Sine Wave Path connecting 5 nodes */}
              <path
                d="M 100 30 Q 200 10, 300 28 T 500 30 T 700 28 T 900 30"
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>

            {/* Connecting Arrow Circle 1 (between Step 1 & 2) */}
            <div className="absolute left-[20%] top-[14px] -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs text-slate-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" />
              </svg>
            </div>

            {/* Connecting Arrow Circle 2 (between Step 2 & 3) */}
            <div className="absolute left-[40%] top-[24px] -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs text-slate-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" />
              </svg>
            </div>

            {/* Connecting Arrow Circle 3 (between Step 3 & 4) */}
            <div className="absolute left-[60%] top-[22px] -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs text-slate-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" />
              </svg>
            </div>

            {/* Connecting Arrow Circle 4 (between Step 4 & 5) */}
            <div className="absolute left-[80%] top-[24px] -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs text-slate-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" />
              </svg>
            </div>
          </div>

          {/* 5 Step Cards */}
          <div className="relative z-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step, idx) => {
              const IconComponent = stepIcons[idx];

              return (
                <div key={step.id} className="group relative pt-10">
                  {/* Outer Card Body */}
                  <div className="relative flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-white/90 p-6 pt-12 text-center shadow-[0_10px_30px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200/80 hover:shadow-[0_20px_40px_-15px_rgba(217,95,2,0.12)]">

                    {/* Floating Circular Icon Badge */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white border border-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:scale-105">

                        {/* Orange Arc Accent around top-left perimeter */}
                        <div
                          className="absolute inset-[-2px] rounded-full border-[2.5px] border-transparent border-t-[#D95F02] border-l-[#D95F02] -rotate-45 opacity-90"
                          aria-hidden="true"
                        />

                        {/* Icon */}
                        <div className="relative z-10">
                          <IconComponent />
                        </div>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="mb-1 font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Small Orange Divider Line under Title */}
                    <div className="my-2 h-[2px] w-6 rounded-full bg-[#D95F02]/80" aria-hidden="true" />

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[180px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
