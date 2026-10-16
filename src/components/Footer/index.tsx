"use client";

import Link from "next/link";
import MasamitsuCitiusLogo from "@/components/Common/MasamitsuCitiusLogo";

const footerNav = {
  company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Insights", href: "/insights" },
  ],
  solutions: [
    { label: "Surveillance & Security", href: "/solutions" },
    { label: "Cybersecurity Solutions", href: "/solutions" },
    { label: "Cloud & AI Solutions", href: "/solutions" },
    { label: "System Integration", href: "/solutions" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#142B45] text-slate-300 py-10 lg:py-14 border-t border-slate-800">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-700/60">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <MasamitsuCitiusLogo className="h-9 w-auto" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Combining Japanese engineering precision with Indian execution capabilities to build secure, intelligent &amp; resilient infrastructure.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/citiuscommunications/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-all hover:bg-[#176DB2] hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-all hover:bg-[#176DB2] hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white uppercase mb-4">
                COMPANY
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {footerNav.company.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-slate-300 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white uppercase mb-4">
                SOLUTIONS
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {footerNav.solutions.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-slate-300 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white uppercase mb-4">
                CONTACT
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <p><strong className="text-white">Email:</strong> sales@citiuscomm.com</p>
                <p><strong className="text-white">Phone:</strong> +91 7045908869</p>
                <p className="leading-relaxed text-xs text-slate-400 pt-1">
                  503, Filix Tower, LBS Marg, Bhandup (West), Mumbai – 400078
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-400">
          <p>© 2026 MASAMITSU CITIUS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
