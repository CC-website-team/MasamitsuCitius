'use client';

import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import ServiceCard from '@/components/Services/ServiceCard';
import { homeServicesList } from '@/data/homeServicesData';

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-section-alt py-7 md:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 lg:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-3">
              WHAT WE DELIVER
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
              Infrastructure & Technology Services
            </h2>
          </div>

          <Link
            href="/solutions/services"
            className="inline-flex items-center gap-2 text-base font-bold text-[#0F172A] hover:text-purple-600 transition-colors shrink-0"
          >
            <span>View all services</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" />
            </svg>
          </Link>
        </div>

        {/* 3x2 Grid of 6 Service Cards */}
        <div className="grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServicesList.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05} className="h-full">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
