"use client";

import React from "react";
import Link from "next/link";

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const industriesData: IndustryItem[] = [
  {
    id: "government",
    name: "Government",
    icon: (
      <svg className="w-8 h-8 text-[#142B45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "smart-cities",
    name: "Smart Cities",
    icon: (
      <svg className="w-8 h-8 text-[#142B45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "airports",
    name: "Airports",
    icon: (
      <svg className="w-8 h-8 text-[#142B45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: (
      <svg className="w-8 h-8 text-[#142B45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "telecom",
    name: "Telecom",
    icon: (
      <svg className="w-8 h-8 text-[#142B45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    id: "bfsi",
    name: "BFSI",
    icon: (
      <svg className="w-8 h-8 text-[#142B45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: (
      <svg className="w-8 h-8 text-[#142B45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative w-full bg-white py-7 md:py-8 lg:py-10 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#C9232C]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#142B45] uppercase">
                INDUSTRIES WE SERVE
              </span>
              <span className="h-[2px] w-8 bg-[#C9232C]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-[#142B45] tracking-tight">
              Technology Solutions for <span className="text-[#C9232C]">Every Sector</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              From mission-critical public infrastructure to high-demand enterprise environments, we deliver reliable and scalable systems.
            </p>
          </div>

          <div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#142B45] hover:text-[#C9232C] transition-colors group"
            >
              <span>Explore All Industries</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-5">
          {industriesData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center justify-center p-5 rounded-xl border border-slate-100 bg-[#FAFAFC] hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#142B45] shadow-xs group-hover:scale-110 group-hover:text-[#C9232C] transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#142B45] group-hover:text-[#C9232C] transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

