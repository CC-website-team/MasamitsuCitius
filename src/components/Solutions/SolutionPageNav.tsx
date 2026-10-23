"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { solutionNavRows } from "@/data/solutionsData";

export default function SolutionPageNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[64px] sm:top-[68px] lg:top-[72px] z-30 mt-[72px] sm:mt-[76px] lg:mt-[80px] bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 sm:py-3 shadow-sm">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col space-y-2 sm:space-y-2.5">
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
                const isActive =
                  pathname === item.path || pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.id}
                    href={item.path}
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
