"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PartnershipSection() {
  return (
    <section className="relative w-full bg-white py-7 md:py-8 lg:py-10 border-t border-slate-100">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT COLUMN — HEADING, TEXT & CTA */}
          <div className="lg:col-span-5 space-y-5 lg:space-y-6">
            {/* Section Eyebrow with subtle red & blue accents */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#C9232C]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#142B45] uppercase">
                OUR PARTNERSHIP
              </span>
              <span className="h-[2px] w-7 bg-[#176DB2]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-bold leading-[1.15] text-[#142B45] tracking-tight">
              Japanese Precision.<br />
              Indian Execution<br />
              <span className="text-[#C9232C]">Excellence.</span>
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                Technology projects succeed when architecture, execution, and accountability work together.
              </p>
              <p>
                <strong className="text-[#142B45] font-semibold">Masamitsu</strong> provides solution architecture, technical design, engineering governance, and quality assurance while <strong className="text-[#142B45] font-semibold">Citius</strong> delivers system integration, infrastructure deployment, project execution, and lifecycle support.
              </p>
              <p>
                Together we provide a unified delivery model that ensures projects are planned correctly, implemented efficiently, and supported throughout their operational lifecycle.
              </p>
            </div>

            <div className="pt-2">



            </div>
          </div>

          {/* RIGHT COLUMN — HANDSHAKE & CITYSCAPE IMAGE DIRECTLY ON PAGE */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative aspect-[834/367] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/Partners/handshake-partnership.png"
                alt="Japanese Precision and Indian Execution Excellence Partnership Handshake"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 720px"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
