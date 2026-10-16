"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { solutionNavRows } from "@/data/solutionsData";

export default function SolutionPageNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[64px] sm:top-[68px] lg:top-[72px] z-30 mt-[72px] sm:mt-[76px] lg:mt-[80px] bg-[#FAFAFC]/95 backdrop-blur-md border-b border-slate-200/90 py-3.5 sm:py-4 shadow-sm">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8 flex flex-col space-y-3 sm:space-y-3.5">
        {solutionNavRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center text-xs sm:text-sm font-semibold text-slate-700"
          >
            {/* Category Header Label + Orange Pipe Divider */}
            <div className="flex items-center min-w-[170px] sm:min-w-[215px] shrink-0 justify-between pr-3 sm:pr-5">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 whitespace-nowrap">
                {row.category}
              </span>
              <span
                className="h-4 sm:h-5 w-[2.5px] rounded-full bg-[#D95F02] shrink-0"
                aria-hidden="true"
              />
            </div>

            {/* Service Tabs */}
            <nav
              className="flex items-center space-x-5 sm:space-x-8 md:space-x-10 overflow-x-auto custom-thin-scrollbar scroll-smooth pb-0.5 min-w-0"
              aria-label={`${row.category} sub-navigation`}
            >
              {row.items.map((item) => {
                const isActive =
                  pathname === item.path || pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={`group relative inline-flex items-center whitespace-nowrap py-1 text-xs sm:text-sm md:text-[15px] font-bold transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#D95F02]"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                    {/* Active underline indicator */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#D95F02] shadow-[0_2px_8px_rgba(217,95,2,0.6)] transition-all duration-300 ease-out ${
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
