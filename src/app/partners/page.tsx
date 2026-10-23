import CtaBand from "@/components/CtaBand";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import SectionAccent from "@/components/ui/SectionAccent";
import citiusProducts from "@/data/citiusProducts";
import whyPartner from "@/data/whyPartner";
import partnerEcosystem from "@/data/partnerEcosystem";
import {
  ChartIcon,
  LightbulbIcon,
  UsersIcon,
  ShieldIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Partners | Citiuscomm",
  description:
    "Why partner with Citiuscomm: our OSS/BSS, applied AI, and IoT solutions, our own product ventures, and the ecosystem of brands we build with.",
};

const isLinked = (url: string) => url !== "#";

/**
 * 2x2 Approach pillars matching screenshot reference
 */
const approachPillars = [
  {
    title: "Shared Growth",
    description: "Expand into new markets together.",
    icon: ChartIcon,
  },
  {
    title: "Innovation",
    description: "Bring next-gen solutions to life faster.",
    icon: LightbulbIcon,
  },
  {
    title: "Expertise",
    description: "Combine strengths for greater value.",
    icon: UsersIcon,
  },
  {
    title: "Lasting Impact",
    description: "Build sustainable, long-term partnerships.",
    icon: ShieldIcon,
  },
];

export default function PartnersPage() {
  // 3 copies of partnerEcosystem array for seamless, gapless horizontal marquee
  const marqueeItems = [
    ...partnerEcosystem,
    ...partnerEcosystem,
    ...partnerEcosystem,
  ];

  return (
    <main className="relative bg-white text-[#0A2540]">
      {/* Background backdrop with subtle radial glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="ds-dots absolute inset-0 text-slate-200/70"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0, black 8%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0, black 8%, black 88%, transparent 100%)",
          }}
        />
        <div className="absolute -top-32 left-1/2 h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-[#156EB0]/[0.04] blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] h-[400px] w-[500px] rounded-full bg-[#D95F02]/[0.03] blur-3xl" />
      </div>

      {/* ─── HERO SECTION (Full-Width Responsive Background with Subtle Left Overlay) ───── */}
      <section className="relative z-10 min-h-[520px] md:min-h-[580px] lg:min-h-[620px] w-full overflow-hidden bg-[#070E20] pt-[110px] pb-12 md:pt-[135px] md:pb-16 lg:pt-[145px] lg:pb-20 flex items-center text-white">
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Partners/partners-hero.png"
            alt="Partners Background"
            fill
            priority
            className="object-cover object-right sm:object-right-center select-none"
            sizes="100vw"
          />
          {/* Subtle Left-Only Navy Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070E20] via-[#070E20]/90 via-40% md:via-50% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070E20]/90 via-transparent to-transparent sm:hidden" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="max-w-xl md:max-w-2xl">
            <Reveal>
              <div className="mb-3.5 flex items-center gap-2.5">
                <span className="h-0.5 w-6 rounded-full bg-[#D95F02]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#D95F02]">
                  PARTNERS
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[3.5rem] leading-[1.1]">
                Stronger together for a <br className="hidden sm:inline" />
                <span className="text-[#D95F02]">connected tomorrow.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mb-8 text-base sm:text-lg leading-relaxed text-slate-200 max-w-xl">
                We collaborate with global technology leaders to deliver innovative solutions, deeper expertise and greater value to our customers.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#partner-ecosystem"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#D95F02] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b84e00] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D95F02]"
                >
                  <span>Partner with us</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            {/* Bottom Key Pillars Bar */}

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: OUR APPROACH ─────────────────────────────────── */}
      <section className="relative z-10 border-t border-slate-100 bg-section-alt py-7 md:py-8 lg:py-10">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Approach Left Column */}
            <div className="lg:col-span-5 pr-0 lg:pr-6">
              <Reveal>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="h-0.5 w-6 rounded-full bg-[#D95F02]" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#D95F02]">
                    OUR APPROACH
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mb-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2540] leading-tight">
                  A partnership <br className="hidden sm:inline" />
                  built for what&apos;s next<span className="text-[#D95F02]">.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mb-8 text-base text-[#4A6785] leading-relaxed max-w-md">
                  We work closely with our partners to create mutual growth and shape the future of connectivity.
                </p>
              </Reveal>


            </div>

            {/* Vertical Divider Line on Large Screens */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center">
              <div className="h-64 w-[1px] bg-slate-200" />
            </div>

            {/* Approach Right Column: 2x2 Grid */}
            <div className="lg:col-span-6">
              <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
                {approachPillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <Reveal key={pillar.title} delay={i * 0.08}>
                      <div className="flex flex-col items-start">
                        <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-[#E8F1F9] text-[#156EB0] p-3 shadow-sm">
                          <Icon size={24} />
                        </div>
                        <h3 className="mb-1.5 text-lg font-bold text-[#0A2540]">
                          {pillar.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#4A6785]">
                          {pillar.description}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: TRUSTED BY GLOBAL LEADERS (CAROUSEL) ────────── */}
      <section id="partner-ecosystem" className="relative z-10 py-7 md:py-8 lg:py-10 bg-white border-t border-slate-100 overflow-hidden">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8 mb-10">
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-6 rounded-full bg-[#D95F02]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#D95F02]">
                OUR PARTNER ECOSYSTEM
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2540]">
              Trusted by global leaders<span className="text-[#D95F02]"></span>
            </h2>
          </Reveal>
        </div>

        {/* Auto-sliding Infinite Continuous Marquee */}
        <div className="relative w-full border-y border-slate-200/80 bg-slate-50/40 py-6">
          {/* Horizontal Edge Fades for Seamless Mask */}
          <div className="ds-fade-x overflow-hidden">
            <div
              className="ds-marquee-track"
              style={{ animationDuration: "42s" }}
            >
              {marqueeItems.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-16 w-52 sm:w-60 shrink-0 items-center justify-center border-r border-slate-200/70 px-6 py-2 transition-opacity duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={
                      partner.logoScale
                        ? { maxHeight: `${2.4 * partner.logoScale}rem` }
                        : { maxHeight: "2.4rem" }
                    }
                    className="w-auto max-w-[140px] select-none object-contain opacity-85 hover:opacity-100 transition-opacity"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Interactive Partner Ecosystem Catalog Grid */}
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8 mt-16">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0A2540]">
              Partner Directory
            </h3>
            <p className="text-sm text-[#4A6785]">
              Explore our global ecosystem of technology, telecom, cloud, and security partners.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {partnerEcosystem.map((partner, i) => {
              const cardContent = (
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  <div className="mb-3 flex h-14 w-full items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      style={{ maxHeight: `${2.2 * (partner.logoScale ?? 1)}rem` }}
                      className="w-auto max-w-[120px] object-contain opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#0A2540] group-hover:text-[#156EB0] transition-colors">
                    {partner.name}
                  </span>
                  <span className="mt-0.5 text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    {partner.sector}
                  </span>
                </div>
              );

              return (
                <Reveal key={partner.name} delay={(i % 6) * 0.04}>
                  {isLinked(partner.url) ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-2 transition-all duration-200 hover:-translate-y-1 hover:border-[#156EB0] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#156EB0]"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-2 transition-all duration-200">
                      {cardContent}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CtaBand />
    </main>
  );
}

