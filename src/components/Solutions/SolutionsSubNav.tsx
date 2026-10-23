"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { solutionNavRows, SolutionNavItem } from "@/data/solutionsData";

export default function SolutionsSubNav() {
  const [activeTabId, setActiveTabId] = useState<string>(
    solutionNavRows[0].items[0].id
  );
  const [activeSectionSlug, setActiveSectionSlug] = useState<string>(
    solutionNavRows[0].items[0].targetSlug
  );

  const isManualScrollRef = useRef(false);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const subNavRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Helper function to perform smooth scroll to a section with offset for sticky header & subnav
  const scrollToSection = (slug: string, tabId: string) => {
    const element = document.getElementById(slug);
    if (!element) return false;

    isManualScrollRef.current = true;
    setActiveTabId(tabId);
    setActiveSectionSlug(slug);

    const subNavHeight = subNavRef.current?.offsetHeight || 90;
    const headerHeight =
      window.innerWidth >= 1024 ? 72 : window.innerWidth >= 640 ? 68 : 64;
    const totalOffset = headerHeight + subNavHeight + 16;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const targetY = Math.max(0, elementPosition - totalOffset);

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 850);

    return true;
  };

  const handleTabClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: SolutionNavItem
  ) => {
    const scrolled = scrollToSection(item.targetSlug, item.id);
    if (scrolled) {
      e.preventDefault();
      if (typeof window !== "undefined" && window.history.pushState) {
        window.history.pushState(null, "", `#${item.targetSlug}`);
      }
    }
  };

  // Scroll spy to update active state while scrolling manually
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrollRef.current) return;

      const subNavHeight = subNavRef.current?.offsetHeight || 90;
      const headerHeight =
        window.innerWidth >= 1024 ? 72 : window.innerWidth >= 640 ? 68 : 64;
      const stickyThreshold = headerHeight + subNavHeight + 40;

      const allSlugs = Array.from(
        new Set(
          solutionNavRows.flatMap((row) => row.items.map((it) => it.targetSlug))
        )
      );

      let currentSlug = allSlugs[0];

      for (let i = 0; i < allSlugs.length; i++) {
        const slug = allSlugs[i];
        const element = document.getElementById(slug);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= stickyThreshold) {
            currentSlug = slug;
          } else {
            break;
          }
        }
      }

      setActiveSectionSlug(currentSlug);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  // Handle URL hash on initial page load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashSlug = window.location.hash.replace("#", "");
      const matchedItem = solutionNavRows
        .flatMap((row) => row.items)
        .find((it) => it.targetSlug === hashSlug);

      if (matchedItem) {
        setTimeout(() => {
          scrollToSection(matchedItem.targetSlug, matchedItem.id);
        }, 150);
      }
    }
  }, []);

  return (
    <div
      ref={subNavRef}
      className="sticky top-[64px] sm:top-[68px] lg:top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 sm:py-3 shadow-sm"
    >
      <div
        ref={navContainerRef}
        className="mx-auto w-full max-w-[1240px] px-4 md:px-8 flex flex-col space-y-2 sm:space-y-2.5"
      >
        {solutionNavRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center w-full"
          >
            {/* Category Header Label + Orange Pipe Divider (Aligned to same vertical line) */}
            <div className="flex items-center w-[220px] sm:w-[250px] md:w-[270px] shrink-0 justify-between pl-2 sm:pl-4 md:pl-6 pr-4 sm:pr-6 md:pr-8">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap text-left">
                {row.category}
              </span>
              <span
                className="h-4 sm:h-4.5 w-[2px] rounded-full bg-[#D95F02] shrink-0 ml-3"
                aria-hidden="true"
              />
            </div>

            {/* Service Tabs */}
            <nav
              className="flex-1 flex items-center justify-start space-x-6 sm:space-x-8 md:space-x-10 overflow-x-auto custom-thin-scrollbar scroll-smooth py-1 min-w-0"
              aria-label={`${row.category} sub-navigation`}
            >
              {row.items.map((item) => {
                const isActive = isManualScrollRef.current
                  ? activeTabId === item.id
                  : activeSectionSlug === item.targetSlug;

                return (
                  <Link
                    key={item.id}
                    data-id={item.id}
                    data-slug={item.targetSlug}
                    href={`#${item.targetSlug}`}
                    onClick={(e) => handleTabClick(e, item)}
                    className={`group relative inline-flex items-center whitespace-nowrap py-1 text-sm sm:text-[15px] md:text-base font-semibold transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#D95F02]"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                    {/* Active underline indicator */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2.5px] rounded-full bg-[#D95F02] shadow-[0_2px_8px_rgba(217,95,2,0.5)] transition-all duration-300 ease-out ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}
