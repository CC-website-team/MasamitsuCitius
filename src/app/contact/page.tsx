"use client";

import { useState } from "react";
import ContactGlobe from "@/components/Contact/ContactGlobe";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/ui/icons";

/* ─── Office data ─────────────────────────────────────────── */
const headquarters = {
  city: "Mumbai",
  label: "Headquarters",
  companyName: "CITIUS COMMUNICATIONS",
  address:
    "503, Filix Tower, LBS Marg,\nOpp. Asian Paints, Bhandup (West),\nMumbai – 400078.",
  phone: "+91 7045908869 / +91 9831427082",
  email: "sales@citiuscomm.com",
  mapSrc:
    "https://maps.google.com/maps?q=503+Filix+Tower+LBS+Marg+Bhandup+West+Mumbai+400078&z=15&output=embed",
  mapLink:
    "https://maps.google.com?q=503+Filix+Tower+LBS+Marg+Bhandup+West+Mumbai+400078",
};

const japanOffice = {
  city: "Miyakonojo, Miyazaki",
  country: "Japan",
  label: "Japan Office",
  companyName: "MASAMITSU CO., LTD.",
  address:
    "3017-104 Miyamaru, Miyakonojo,\nMiyazaki 885-0078,\nJapan",
  email: "info@mnes.jp",
  mapSrc:
    "https://maps.google.com/maps?q=3017-104+Miyamaru,+Miyakonojo,+Miyazaki+885-0078,+Japan&z=15&output=embed",
  mapLink:
    "https://maps.google.com?q=3017-104+Miyamaru,+Miyakonojo,+Miyazaki+885-0078,+Japan",
};

const branches = [
  {
    city: "Kolkata",
    country: "India",
    email: "sales@citiuscomm.com",
    address:
      "GE-56, Rajdanga Main Rd, Sarat Park,\nBosepukur Purbapara,Sector G, East Kolkata Twp, \nKolkata, West Bengal 700107",
  },
  {
    city: "Delhi",
    country: "India",
    email: "sales@citiuscomm.com",
    address:
      "Citius Communications Pvt. Ltd., Ground Floor – B25, Okhla Industrial Area, Phase-II, New Delhi – 110020.",
  },
  {
    city: "Singapore",
    country: "Singapore",
    email: "sales@citiuscomm.com",
    address:
      "CITIUS COMMUNICATIONS PTE. LTD., 1 North Bridge Road, #07-10, High Street Centre, Singapore 179094.",
  },
];

/* ─── SVG Icons ───────────────────────────────────────────── */
const PinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 21s-7-5.5-7-11.5a7 7 0 0 1 14 0C19 15.5 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

const MailIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const ChatIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const LockIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M10 2L2 10M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="relative bg-white text-[#0A2540]">

      {/* ─── HERO SECTION: CINEMATIC DIGITAL CONNECTIVITY ───────────── */}
      <section className="relative z-10 overflow-hidden bg-[#040C1A] text-white pt-[110px] pb-10 md:pt-[130px] md:pb-12 lg:pt-[140px] lg:pb-14">

        {/* Background Network Graphic Overlay */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Cyan / Blue Radial Glow */}
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5FF]/[0.08] blur-3xl" />
          <div className="absolute top-[20%] right-[-5%] h-[400px] w-[500px] rounded-full bg-[#156EB0]/[0.15] blur-3xl" />

          {/* Subtle Network Mesh Grid Backdrop */}
          <div
            className="ds-dots absolute inset-0 text-white/[0.08]"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />

          {/* SVG Network Lines Graphic */}
          <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1440 600" fill="none">
            <circle cx="720" cy="300" r="280" stroke="url(#cyanGlow)" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="720" cy="300" r="420" stroke="url(#blueGlow)" strokeWidth="1" strokeDasharray="6 12" />
            <path d="M100 300 C 400 150, 1040 150, 1340 300" stroke="url(#cyanGlow)" strokeWidth="1.5" />
            <path d="M200 450 C 500 200, 940 200, 1240 450" stroke="url(#blueGlow)" strokeWidth="1.5" />
            <defs>
              <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#156EB0" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#156EB0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#156EB0" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">

            {/* Top-Left Side Block (Desktop) */}
            <div className="hidden lg:block lg:col-span-3">
              <Reveal>
                <div className="border-l border-[#00E5FF]/40 pl-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400 leading-snug">
                  CONNECTING <br />
                  IDEAS ACROSS <br />
                  A SMARTER <br />
                  WORLD.
                </div>
              </Reveal>
            </div>

            {/* Central Hero Block */}
            <div className="lg:col-span-6 flex flex-col items-center text-center">

              {/* Tagline */}


              {/* Main Heading */}
              <Reveal delay={0.08}>
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Contact <span className="text-[#D95F02]">Us</span>
                </h1>
              </Reveal>

              {/* Subtitle */}
              <Reveal delay={0.16}>
                <p className="mb-8 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed">
                  Have a question, a project in mind or just want to learn more? We&apos;re here to help.
                </p>
              </Reveal>

              {/* Translucent Communication Icon Bar */}
              <Reveal delay={0.24}>
                <div className="mb-8 flex items-center justify-center gap-4 sm:gap-6 rounded-full bg-white/10 border border-white/25 px-6 sm:px-8 py-3.5 shadow-[0_0_30px_rgba(0,229,255,0.2)] backdrop-blur-md">
                  <span className="text-white hover:text-[#00E5FF] transition-colors"><MailIcon size={20} /></span>
                  <span className="h-4 w-[1px] bg-white/30" />
                  <span className="text-white hover:text-[#00E5FF] transition-colors"><PhoneIcon size={20} /></span>
                  <span className="h-4 w-[1px] bg-white/30" />
                  <span className="text-white hover:text-[#00E5FF] transition-colors"><PinIcon size={20} /></span>


                </div>
              </Reveal>



            </div>

            {/* Bottom-Right Side Block (Desktop) */}
            <div className="hidden lg:block lg:col-span-3 text-right">
              <Reveal delay={0.2}>
                <div className="border-r border-[#D95F02]/60 pr-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400 leading-snug">
                  TO A BRIGHTER <br />
                  TOMORROW
                </div>
              </Reveal>
            </div>

          </div>

          {/* Bottom Center Pillars */}
          <div className="mt-14 pt-8 border-t border-white/10 text-center">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Let’s Turn Possibilities Into Progress.
            </span>
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: LET'S TALK & SEND US A MESSAGE FORM ─────────── */}
      <section id="contact-form" className="relative z-10 py-12 md:py-16 lg:py-20 bg-section-alt border-b border-slate-200/60">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">

            {/* Left Column: Let's Talk Info */}
            <div className="lg:col-span-5 pr-0 lg:pr-6">


              <Reveal delay={0.08}>
                <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A2540]">
                  Let&apos;s <span className="text-[#D95F02]">talk.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mb-10 text-base text-[#4A6785] leading-relaxed max-w-md">
                  Our team is here to answer your questions and explore opportunities.
                </p>
              </Reveal>

              {/* Direct Contact Items */}
              <div className="space-y-6 mb-10">

                {/* Email */}
                <Reveal delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF3E8] text-[#D95F02]">
                      <MailIcon size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</span>
                      <a href="mailto:sales@citiuscomm.com" className="block text-base font-bold text-[#0A2540] hover:text-[#156EB0] transition-colors">
                        sales@citiuscomm.com
                      </a>
                    </div>
                  </div>
                </Reveal>

                {/* Phone */}
                <Reveal delay={0.24}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF3E8] text-[#D95F02]">
                      <PhoneIcon size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</span>
                      <a href="tel:+918012345678" className="block text-base font-bold text-[#0A2540] hover:text-[#156EB0] transition-colors">
                        +91 7045908869 / +91 9831427082
                      </a>
                    </div>
                  </div>
                </Reveal>

                {/* Our Office */}
                <Reveal delay={0.28}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF3E8] text-[#D95F02]">
                      <PinIcon size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Office</span>
                      <p className="text-sm font-semibold text-[#0A2540] leading-relaxed max-w-xs">
                        503, Filix Tower, LBS Marg,
                        Opp. Asian Paints, Bhandup (West),
                        Mumbai – 400078.
                      </p>
                    </div>
                  </div>
                </Reveal>

              </div>

              {/* Bottom Accent Note */}


            </div>

            {/* Right Column: Send Us A Message Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 lg:p-12 shadow-xl">

                  <div className="mb-6 flex items-center gap-2.5">
                    <span className="h-0.5 w-6 rounded-full bg-[#D95F02]" />
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#D95F02]">
                      SEND US A MESSAGE
                    </span>
                  </div>

                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        ✓
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2540]">Thank you!</h3>
                      <p className="mt-2 text-sm text-[#4A6785]">
                        Your message has been received. Our team will reach out to you within one business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">

                      {/* Name & Work Email Grid */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0A2540] placeholder:text-slate-400 focus:border-[#156EB0] focus:bg-white focus:outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
                            Work Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0A2540] placeholder:text-slate-400 focus:border-[#156EB0] focus:bg-white focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your company name"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0A2540] placeholder:text-slate-400 focus:border-[#156EB0] focus:bg-white focus:outline-none transition-all"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project or enquiry..."
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0A2540] placeholder:text-slate-400 focus:border-[#156EB0] focus:bg-white focus:outline-none transition-all resize-y"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#0A2540] py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#156EB0] shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#156EB0]"
                      >
                        <span>Send message</span>
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      {/* Lock Privacy Note */}
                      <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-2">
                        <LockIcon />
                        <span>Your information is safe with us. We respect your privacy.</span>
                      </p>

                    </form>
                  )}

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>


      {/* ─── SECTION 4: GLOBAL OFFICES DIRECTORY ────────────────────── */}
      <section id="global-offices" className="relative z-10 py-12 md:py-16 lg:py-20 bg-white border-t border-slate-200/60">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="mb-12 text-left">
            <div className="mb-4 inline-flex items-center gap-2">
              <Badge variant="brand" dot>Global Offices</Badge>
            </div>
            <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold text-[#0A2540]">
              Always Close to Where You Need Us
            </h2>
            <p className="max-w-2xl text-base text-[#4A6785] leading-relaxed">
              A strong presence across India with growing international operations in Singapore.
            </p>
          </div>

          {/* Headquarters (Mumbai) & Japan Office 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Card: Mumbai Headquarters */}
            <Reveal>
              <div className="ds-tile p-6 sm:p-8 border border-slate-200 bg-white shadow-md rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3E8] text-[#D95F02]">
                      <PinIcon size={26} />
                    </div>
                    <div>
                      <span className="mb-1 inline-block rounded-full bg-[#0A2540] px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                        {headquarters.label}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0A2540]">{headquarters.city}</h3>
                    </div>
                  </div>

                  <p className="mb-6 whitespace-pre-line border-b border-slate-100 pb-6 text-base leading-relaxed text-[#4A6785]">
                    {headquarters.address}
                  </p>

                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-[#4A6785]">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F1F9] text-[#156EB0]">
                        <PhoneIcon />
                      </div>
                      <span className="font-semibold text-[#0A2540]">{headquarters.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F1F9] text-[#156EB0]">
                        <MailIcon />
                      </div>
                      <a href={`mailto:${headquarters.email}`} className="font-semibold text-[#156EB0] hover:underline">
                        {headquarters.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map Frame for Mumbai */}
                <div className="relative min-h-[260px] h-[280px] overflow-hidden rounded-xl border border-slate-200 shadow-inner mt-2">
                  <a
                    href={headquarters.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-md bg-[#0A2540] px-3 py-1.5 text-xs font-medium text-white shadow transition-colors hover:bg-[#156EB0]"
                  >
                    Open in Maps <ExternalIcon />
                  </a>
                  <iframe
                    src={headquarters.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mumbai Headquarters Map"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </Reveal>

            {/* Right Card: Japan Office */}
            <Reveal delay={0.12}>
              <div className="ds-tile p-6 sm:p-8 border border-slate-200 bg-white shadow-md rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3E8] text-[#D95F02]">
                      <PinIcon size={26} />
                    </div>
                    <div>
                      <span className="mb-1 inline-block rounded-full bg-[#0A2540] px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                        {japanOffice.label}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0A2540]">{japanOffice.companyName}</h3>
                    </div>
                  </div>

                  <p className="mb-6 whitespace-pre-line border-b border-slate-100 pb-6 text-base leading-relaxed text-[#4A6785]">
                    {japanOffice.address}
                  </p>

                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-[#4A6785]">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F1F9] text-[#156EB0]">
                        <PinIcon size={16} />
                      </div>
                      <span className="font-semibold text-[#0A2540]">{japanOffice.city}, {japanOffice.country}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F1F9] text-[#156EB0]">
                        <MailIcon />
                      </div>
                      <a href={`mailto:${japanOffice.email}`} className="font-semibold text-[#156EB0] hover:underline">
                        {japanOffice.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map Frame for Japan */}
                <div className="relative min-h-[260px] h-[280px] overflow-hidden rounded-xl border border-slate-200 shadow-inner mt-2">
                  <a
                    href={japanOffice.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-md bg-[#0A2540] px-3 py-1.5 text-xs font-medium text-white shadow transition-colors hover:bg-[#156EB0]"
                  >
                    Open in Maps <ExternalIcon />
                  </a>
                  <iframe
                    src={japanOffice.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Japan Office Map - Miyakonojo, Miyazaki"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Regional Branches */}
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((office, i) => (
              <Reveal key={office.city} delay={i * 0.08} className="h-full">
                <div
                  tabIndex={0}
                  role="region"
                  aria-label={`${office.city} office`}
                  className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#156EB0]/40 focus:shadow-md focus:border-[#156EB0] focus:outline-none transition-all duration-300"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-1">{office.city}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{office.country}</p>

                    {/* Inline expanding address on hover / focus */}
                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus:grid-rows-[1fr] group-focus:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 transition-all duration-300 ease-in-out">
                      <div className="overflow-hidden">
                        <div className="pt-3 mt-3 border-t border-slate-100">
                          <p className="whitespace-pre-line text-xs leading-relaxed text-[#4A6785]">
                            {office.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`mailto:${office.email}`}
                    className="mt-6 flex items-center gap-2 text-xs font-bold text-[#156EB0] hover:underline"
                  >
                    <MailIcon size={14} />
                    <span className="truncate">{office.email}</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* CTA BAND */}
      <CtaBand
        title="Ready to build what's next?"
        description="Let's start the conversation."
        primaryLabel="Email Our Team"
        primaryHref="mailto:sales@citiuscomm.com"
        secondaryLabel="Explore Solutions"
        secondaryHref="/solutions/services"
      />

    </main>
  );
}

