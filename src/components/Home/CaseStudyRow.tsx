'use client';

import Image from 'next/image';
import Link from 'next/link';

const insights = [
  {
    category: 'Data Centre',
    date: 'Sep 10, 2026',
    title: 'The Future of Data Centres: Trends Shaping 2025 and Beyond',
    image: '/images/industries/data-center-1200.webp',
    href: '/insights/future-of-data-centres',
  },
  {
    category: 'Cybersecurity',
    date: 'Sep 28, 2026',
    title: 'Strengthening Digital Trust with Zero Trust Architecture',
    image: '/images/industries/enterprise-1200.webp',
    href: '/insights/zero-trust-architecture',
  },
  {
    category: 'Telecommunications',
    date: 'Sep 15, 2026',
    title: '5G and Beyond: Building the Next Generation Network Infrastructure',
    image: '/images/industries/telecom-1200.webp',
    href: '/insights/5g-next-gen-network',
  },
];

export default function CaseStudyRow() {
  return (
    <section id="insights" className="w-full bg-section-alt py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">

        {/* Section Header */}
        <div className="mb-8 md:mb-10 lg:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-3">
              Blogs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
              Latest Blogs & Industry Perspectives
            </h2>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-base font-bold text-[#0F172A] hover:text-purple-600 transition-colors shrink-0"
          >
            <span>View all blogs</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" />
            </svg>
          </Link>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {insights.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="font-semibold text-purple-600">{item.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] leading-snug group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0F172A] group-hover:text-purple-600 transition-colors">
                  <span>Read more</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
