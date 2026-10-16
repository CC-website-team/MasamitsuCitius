"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import MasamitsuCitiusLogo from "@/components/Common/MasamitsuCitiusLogo";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 bg-white ${
        sticky ? "shadow-md py-2.5 sm:py-3" : "py-3 sm:py-3.5 border-b border-slate-100"
      }`}
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <MasamitsuCitiusLogo className="h-11 sm:h-12 md:h-[50px] lg:h-[52px] xl:h-[54px] w-auto transition-all duration-300" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {menuData.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`relative py-1 text-[14px] font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-[#142B45] font-bold"
                      : "text-slate-600 hover:text-[#142B45]"
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full bg-[#C9232C]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#142B45] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1a385a] focus:outline-none"
            >
              <span>Contact Us</span>
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-200 ${
                navbarOpen ? "translate-y-[7px] rotate-45" : "mb-1.5"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-200 ${
                navbarOpen ? "opacity-0" : "mb-1.5"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-200 ${
                navbarOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {navbarOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {menuData.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => setNavbarOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#C9232C] font-bold"
                      : "text-slate-700 hover:text-[#142B45]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setNavbarOpen(false)}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#142B45] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1a385a]"
              >
                <span>Contact Us</span>
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
