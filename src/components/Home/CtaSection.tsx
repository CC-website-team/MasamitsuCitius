"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-white py-7 md:py-8 lg:py-10 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT COLUMN — CTA CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#C9232C]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#142B45] uppercase">
                LET'S WORK TOGETHER
              </span>
              <span className="h-[2px] w-8 bg-[#C9232C]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.15] text-[#142B45]">
              Let's Build Your Next<br />
              <span className="text-[#C9232C]">Technology Project</span>
            </h2>

            <p className="max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Partner with <strong className="text-[#142B45] font-bold">MASAMITSU CITIUS</strong> for secure, intelligent and future-ready infrastructure solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#C9232C] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#a81a22] focus:outline-none"
              >
                <span>Let's Connect</span>
                <span className="text-base font-bold">→</span>
              </Link>


            </div>
          </div>

          {/* RIGHT COLUMN — BRIDGE SKYLINE VISUAL & SIDEBAR TEXT */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] lg:max-w-none rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/Partners/Building Tomorrow Beneath Mount Fuji.png"
                  alt="MASAMITSU CITIUS Technology Project Infrastructure"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#142B45]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Far Right Edge Vertical Typography */}

          </div>

        </div>

      </div>
    </section>
  );
}
