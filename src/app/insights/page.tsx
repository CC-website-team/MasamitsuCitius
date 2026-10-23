"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";

interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

const CATEGORIES = [
  "All",
  "Technology",
  "Industry Trends",
  "Case Studies",
];

const FEATURED_ARTICLE: Article = {
  id: "featured-1",
  title: "Building the infrastructure for a more connected tomorrow.",
  description:
    "How next-generation networks are enabling smarter businesses, resilient communities and a more sustainable future.",
  date: "Sep 08, 2026",
  category: "Industry Trends",
  image: "/images/insights/server-room.jpg",
  tags: ["Infrastructure", "Connectivity", "Future Tech"],
  featured: true,
};

const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "The evolving role of data centres in a connected era",
    description:
      "Why modern data centres are the backbone of digital transformation.",
    date: "Aug 23, 2026",
    category: "Technology",
    image: "/images/solutions/Data centre and cloud.png",
    tags: ["Technology", "Digital Transformation"],
  },
  {
    id: "art-2",
    title: "Sustainable infrastructure for a brighter tomorrow",
    description:
      "Exploring how smarter solutions can reduce environmental impact and drive long-term value.",
    date: "Aug 18, 2026",
    category: "Sustainability",
    image: "/images/about/visimage.jpg",
    tags: ["Sustainability", "Smart Cities"],
  },
  {
    id: "art-3",
    title: "People and partnerships power progress",
    description:
      "How collaboration and expertise create meaningful, real-world change.",
    date: "Aug 12, 2026",
    category: "Partnerships",
    image: "/images/solutions/Cybersecurity.png",
    tags: ["Partnerships", "Growth"],
  },
  {
    id: "art-4",
    title: "Applied AI in telecom operational support systems",
    description:
      "Leveraging automated intelligence to predict network outages before they impact subscribers.",
    date: "Jul 30, 2026",
    category: "Technology",
    image: "/images/solutions/Ai solution applied ai.png",
    tags: ["AI & Automation", "Telecom"],
  },
  {
    id: "art-5",
    title: "Next-gen optical transport for carrier networks",
    description:
      "Designing ultra-broadband connectivity to meet surging enterprise data demands.",
    date: "Jul 14, 2026",
    category: "Industry Trends",
    image: "/images/solutions/Network service.png",
    tags: ["Networks", "Optical Transport"],
  },
  {
    id: "art-6",
    title: "Transforming SAARC regional connectivity",
    description:
      "A deep dive into cross-border network integration across challenging geographic terrains.",
    date: "Jun 25, 2026",
    category: "Case Studies",
    image: "/images/about/missionimg.jpg",
    tags: ["Case Study", "SAARC"],
  },
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="relative bg-white text-[#0A2540]">
      {/* Page Background Texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="ds-dots absolute inset-0 text-slate-200/60"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0, black 8%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0, black 8%, black 88%, transparent 100%)",
          }}
        />
        <div className="absolute -top-32 left-1/2 h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-[#156EB0]/[0.03] blur-3xl" />
      </div>

      {/* ─── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative z-10 pt-[110px] pb-10 md:pt-[130px] md:pb-12 lg:pt-[140px] lg:pb-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Hero Left Column */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="h-0.5 w-6 rounded-full bg-[#D95F02]" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#D95F02]">
                    INSIGHTS
                  </span>
                  <span className="h-[2px] w-8 bg-[#176DB2]" />
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#0A2540] sm:text-5xl lg:text-6xl leading-[1.08]">
                  Blogs &amp; Articles
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-[#4A6785]">
                  Explore expert perspectives, industry trends and real-world stories on
                  technology, infrastructure and connectivity.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <Link
                  href="#articles-list"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0A2540] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#156EB0] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#156EB0]"
                >
                  <span>Explore articles</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            {/* Hero Right Column (Text Block) */}
            <div className="lg:col-span-5 lg:pl-10">
              <Reveal delay={0.15}>
                <div className="flex flex-col border-l-2 border-slate-200/80 pl-6 sm:pl-8 py-1">
                  <div className="flex flex-col text-xs font-bold uppercase tracking-[0.18em] text-[#4A6785] space-y-2 mb-6">
                    <span>PERSPECTIVES</span>
                    <span>THAT SHAPE</span>
                    <span>TOMORROW.</span>
                  </div>

                  <span className="h-0.5 w-6 rounded-full bg-[#D95F02] mb-4" />

                  <p className="text-sm font-medium leading-relaxed text-[#0A2540] max-w-[240px]">
                    Insights today,
                    connections tomorrow
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CATEGORY TABS & SEARCH BAR ──────────────────────────────── */}
      <section id="articles-list" className="relative z-10 pb-12">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="flex flex-col gap-6 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between">

            {/* Categories Scrollable Tabs */}
            <div className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar py-1">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative shrink-0 text-sm font-medium transition-colors pb-3 ${isActive
                      ? "text-[#0A2540] font-bold"
                      : "text-slate-500 hover:text-[#0A2540]"
                      }`}
                  >
                    {cat}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[#D95F02]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72 lg:w-80 shrink-0">
              <svg
                className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics..."
                className="w-full rounded-full border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-2 text-sm text-[#0A2540] placeholder:text-slate-400 focus:border-[#156EB0] focus:bg-white focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─── FEATURED ARTICLE SECTION ────────────────────────────────── */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="relative z-10 py-12 md:py-16 lg:py-20 bg-section-alt">
          <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
            <Reveal>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-0.5 w-6 rounded-full bg-[#D95F02]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#D95F02]">
                  LATEST ARTICLE
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md lg:grid-cols-12">

                {/* Left Text Block */}
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-6 lg:p-12">
                  <div>
                    <h2 className="mb-4 text-2xl font-extrabold leading-snug text-[#0A2540] sm:text-3xl lg:text-3.5xl group-hover:text-[#156EB0] transition-colors">
                      {FEATURED_ARTICLE.title}
                    </h2>
                    <p className="mb-8 text-sm sm:text-base leading-relaxed text-[#4A6785]">
                      {FEATURED_ARTICLE.description}
                    </p>
                  </div>

                  <div>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#D95F02] transition-colors hover:text-[#e66f00]"
                    >
                      <span>Read the full article</span>
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Image Block */}
                <div className="relative aspect-[16/10] min-h-[260px] overflow-hidden lg:col-span-6 lg:aspect-auto lg:min-h-[380px]">
                  <Image
                    src={FEATURED_ARTICLE.image}
                    alt={FEATURED_ARTICLE.title}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Date Overlay Badge */}
                  <div className="absolute right-4 top-4 rounded-lg bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {FEATURED_ARTICLE.date}
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ─── LATEST ARTICLES SECTION ─────────────────────────────────── */}
      <section className="relative z-10 pb-10 md:pb-12 lg:pb-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="mb-8 flex items-center justify-between">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-6 rounded-full bg-[#D95F02]" />
                <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#D95F02]">
                  FEATURED ARTICLES
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Link
                href="#"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#0A2540] hover:text-[#156EB0] transition-colors"
              >


              </Link>
            </Reveal>
          </div>

          {/* Cards Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, i) => (
                <Reveal key={article.id} delay={(i % 3) * 0.08}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
                    {/* Image Header */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        {/* Meta Row: Date | Category */}
                        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                          <span>{article.date}</span>
                          <span>|</span>
                          <span className="text-slate-600 font-semibold">{article.category}</span>
                        </div>

                        {/* Article Title */}
                        <h3 className="mb-3 text-lg font-bold text-[#0A2540] group-hover:text-[#156EB0] transition-colors leading-snug">
                          {article.title}
                        </h3>

                        {/* Article Description */}
                        <p className="mb-6 text-sm text-[#4A6785] leading-relaxed line-clamp-3">
                          {article.description}
                        </p>
                      </div>

                      <div>
                        {/* Read More Link */}
                        <div className="mb-5">
                          <Link
                            href="#"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#D95F02] hover:text-[#e66f00] transition-colors"
                          >
                            <span>Read more</span>
                            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>

                        {/* Tag Pills */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg font-semibold text-[#0A2540]">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full bg-[#0A2540] px-6 py-2 text-sm font-semibold text-white hover:bg-[#156EB0] transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>


    </main>
  );
}
