"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeSolutionsList, HomeSolutionItem } from "@/data/homeServicesData";

// Circular red badge icon selector
const renderBadgeIcon = (id: string) => {
  switch (id) {
    case "network-solutions":
      return (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="2.8" />
          <circle cx="4" cy="5" r="2" />
          <circle cx="20" cy="5" r="2" />
          <circle cx="4" cy="19" r="2" />
          <circle cx="20" cy="19" r="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 6.5l4.5 4M18.5 6.5l-4.5 4M5.5 17.5l4.5-4M18.5 17.5l-4.5-4" />
        </svg>
      );
    case "cybersecurity-surveillance":
      return (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "cloud-infrastructure":
      return (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    case "application-development-management":
      return (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "devops":
      return (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a4 4 0 014-4c2.5 0 4 3 6 5s3.5 3 6 3a4 4 0 100-8c-2.5 0-4 3-6 5s-3.5 3-6 3a4 4 0 01-4-4z" />
        </svg>
      );
    case "ai":
      return (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "cloud-native-applications":
      return (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
};

export default function SolutionsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "infrastructure" | "engineering">("all");
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse drag-to-scroll state
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Filter items based on active category
  const filteredSolutions = homeSolutionsList.filter((item) => {
    if (activeCategory === "infrastructure") return item.category === "IT Infrastructure";
    if (activeCategory === "engineering") return item.category === "Application Engineering";
    return true;
  });

  // Calculate scroll boundaries and active card index
  const updateScrollState = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate which card is near the start
    const card = sliderRef.current.firstElementChild as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 20; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(filteredSolutions.length - 1, index)));
    }
  }, [filteredSolutions.length]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    updateScrollState();
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      slider.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Reset scroll position on category tab switch
  const handleCategoryChange = (cat: "all" | "infrastructure" | "engineering") => {
    setActiveCategory(cat);
    setActiveIndex(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Scroll prev/next
  const handleScroll = (direction: "prev" | "next") => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.firstElementChild as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 20 : 320;

    // On desktop scroll 2 cards, on mobile/tablet scroll 1 card
    const scrollAmount = window.innerWidth >= 1200 ? cardWidth * 2 : cardWidth;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Direct dot navigation
  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.children[index] as HTMLElement;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDownRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 6) {
      hasDraggedRef.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDownRef.current = false;
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 50);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
    }
  };

  return (
    <section id="services" className="relative w-full bg-[#FAFAFC] py-7 md:py-8 lg:py-10 border-t border-slate-100 overflow-hidden">
      {/* Background aesthetic touches */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#176DB2]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#C9232C]/4 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          {/* Left Title & Subtitle */}
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#C9232C]" />
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#142B45] uppercase">
                OUR SOLUTIONS
              </span>
              <span className="h-[2px] w-8 bg-[#176DB2]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-[#142B45] tracking-tight">
              End-to-End Technology <span className="text-[#C9232C]">Solutions</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl pt-1">
              From network infrastructure and cybersecurity to cloud architectures, DevOps, and enterprise AI, we deliver unified technology solutions for modern enterprises and government organizations.
            </p>
          </div>

          {/* Right Controls: Category Filter Tabs & Navigation Arrows */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 self-start md:self-end">
            {/* Category Filter Pills (Following Image 2 Grouping) */}
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-200/70 border border-slate-300/60 shadow-xs">
              <button
                type="button"
                onClick={() => handleCategoryChange("all")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${activeCategory === "all"
                  ? "bg-white text-[#142B45] shadow-xs"
                  : "text-slate-600 hover:text-[#142B45]"
                  }`}
              >
                All (7)
              </button>
              <button
                type="button"
                onClick={() => handleCategoryChange("infrastructure")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${activeCategory === "infrastructure"
                  ? "bg-white text-[#142B45] shadow-xs"
                  : "text-slate-600 hover:text-[#142B45]"
                  }`}
              >
                IT Infrastructure (3)
              </button>
              <button
                type="button"
                onClick={() => handleCategoryChange("engineering")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${activeCategory === "engineering"
                  ? "bg-white text-[#142B45] shadow-xs"
                  : "text-slate-600 hover:text-[#142B45]"
                  }`}
              >
                Application Engineering (4)
              </button>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous service"
                onClick={() => handleScroll("prev")}
                disabled={!canScrollPrev}
                className={`group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white shadow-xs transition-all duration-200 cursor-pointer ${!canScrollPrev
                  ? "opacity-35 cursor-not-allowed text-slate-400"
                  : "text-[#142B45] hover:bg-[#C9232C] hover:border-[#C9232C] hover:text-white hover:shadow-md"
                  }`}
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Next service"
                onClick={() => handleScroll("next")}
                disabled={!canScrollNext}
                className={`group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white shadow-xs transition-all duration-200 cursor-pointer ${!canScrollNext
                  ? "opacity-35 cursor-not-allowed text-slate-400"
                  : "text-[#142B45] hover:bg-[#C9232C] hover:border-[#C9232C] hover:text-white hover:shadow-md"
                  }`}
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-2 pb-6 slider-hide-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {filteredSolutions.map((card) => (
            <div
              key={card.id}
              onClick={handleCardClick}
              className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shrink-0 snap-start w-[86%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] min-h-[490px] sm:min-h-[510px] h-full"
            >
              <div className="flex flex-col flex-grow">
                {/* Top Image + Circular Red Badge Overlap (Image 1 reference) */}
                <Link
                  href={card.link}
                  tabIndex={0}
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-slate-100 shrink-0"
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-xs text-[#142B45] shadow-xs border border-white/40">
                    {card.category}
                  </div>
                </Link>

                {/* Card Content Body */}
                <div className="p-4 sm:p-5 lg:p-4 xl:p-4.5 2xl:p-5 flex flex-col flex-grow">
                  {/* Single-line Card Title with uniform height and alignment across all cards */}
                  <div className="h-7 sm:h-8 flex items-center mb-3 sm:mb-3.5">
                    <Link href={card.link} className="block w-full">
                      <h3
                        className="text-[13.5px] sm:text-[14.5px] lg:text-[12.5px] xl:text-[13.5px] 2xl:text-[15px] font-bold leading-tight text-[#142B45] group-hover:text-[#176DB2] transition-colors tracking-tight whitespace-nowrap overflow-hidden text-ellipsis"
                        title={card.title}
                      >
                        {card.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Capabilities List sitting directly below title with uniform row heights and spacing */}
                  <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-slate-600 mb-4 flex-grow">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 min-h-[34px] sm:min-h-[36px]">
                        <span className="text-[#C9232C] font-extrabold text-sm shrink-0 leading-tight">›</span>
                        <span className="leading-snug text-slate-600 group-hover:text-slate-800 transition-colors line-clamp-2" title={feature}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom "Learn More →" Link Aligned Uniformly across all cards */}
              <div className="px-4 sm:px-5 lg:px-4 xl:px-4.5 2xl:px-5 pb-4 sm:pb-5 pt-3.5 border-t border-slate-100/90 mt-auto flex items-center justify-between">
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C9232C] hover:text-[#176DB2] transition-colors group/link"
                >
                  <span>Learn More</span>
                  <span className="text-sm font-bold transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </Link>

                <span className="text-[11px] font-bold text-slate-300 tracking-wider">
                  {card.number}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Bar / Dots */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500">
            Showing <span className="text-[#142B45] font-bold">{filteredSolutions.length}</span> enterprise services
          </p>

          {/* Interactive Navigation Dots */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Solutions carousel pagination">
            {filteredSolutions.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                onClick={() => scrollToCard(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                  ? "w-7 bg-[#C9232C]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
              />
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Scroll or drag to explore</span>
            <span className="text-slate-400">→</span>
          </div>
        </div>

      </div>
    </section>
  );
}
