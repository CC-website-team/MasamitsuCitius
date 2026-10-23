'use client';

import Link from 'next/link';

interface CtaBandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaBand({
  title = "Ready to build what's next.",
  description = "Let's start the conversation.",
  primaryLabel = "Let's Connect",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="w-full bg-white py-7 md:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-r from-purple-50/40 via-orange-50/30 to-rose-50/40 p-8 sm:p-14 lg:p-20 shadow-xs">

          {/* Subtle flowing background gradient line art */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
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
                <linearGradient id="cta-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
                <linearGradient id="cta-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#F43F5E" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* CTA Content Flexbox */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-[680px]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                {title}
                {description && (
                  <span className="mt-1 block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    {description}
                  </span>
                )}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#0F172A] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#1E293B] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:ring-offset-2"
              >
                <span>{primaryLabel}</span>
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" />
                </svg>
              </Link>

              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-[#0F172A] shadow-xs transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  <span>{secondaryLabel}</span>
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
