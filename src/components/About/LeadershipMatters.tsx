"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Member = {
  id: number;
  name: string;
  role: string;
  description: string;
  image?: string;
  linkedin?: string;
};

const topLeaders: Member[] = [
  {
    id: 1,
    name: "Surenddra Sancheti",
    role: "FOUNDER & TELECOM TECHNOLOGY LEADER",
    description:
      "Two decades of leadership across telecom and enterprise technology, steering Citiuscomm's vision and execution.",
    image: "/images/Leadership/surendra-sancheti.png",
    linkedin: "https://www.linkedin.com/in/surendra-sancheti-0205397/",
  },
  {
    id: 2,
    name: "Prammod Yadav",
    role: "VENTURE ARCHITECT & GROWTH STRATEGIST",
    description:
      "Venture architect specializing in hi-tech startups, corporate structuring, M&A, and digital transformation.",
    image: "/images/Leadership/pramod-yadav.png",
    linkedin: "https://www.linkedin.com/in/prammod-kumar-yadav-a863797/",
  },
  {
    id: 3,
    name: "Siba Dash",
    role: "CHIEF SOLUTIONS OFFICER",
    description:
      "Leads delivery excellence and operational execution across all Citiuscomm initiatives, ensuring world-class service delivery.",
    image: "/images/Leadership/siba-dash.png",
    linkedin: "https://www.linkedin.com/in/siba-brata-dash-57200914/",
  },
];

const additionalLeaders: Member[] = [
  {
    id: 4,
    name: "Vishal Patil",
    role: "IT SALES & BUSINESS DEVELOPMENT LEADER",
    description:
      "Proven sales leader driving revenue growth, market expansion, and new business opportunities across IT services.",
    image: "/images/Leadership/vishal-patil.png",
    linkedin: "https://www.linkedin.com/in/vishal-patil-19417515/",
  },
  {
    id: 5,
    name: "Pravin Redekar",
    role: "Vice President SALES | 23+ YEARS EXPERIENCE",
    description:
      "Sales and Business Development leader specializing in Telecom, IT Infrastructure, Enterprise Networking, and Cloud.",
    image: "/images/Leadership/pravin-redekar.png",
    linkedin: "https://www.linkedin.com/in/pravinredekar/",
  },
  {
    id: 6,
    name: "Avnish Rana",
    role: "PROJECT & PRODUCT MANAGEMENT LEADER",
    description:
      "Experienced across private and public sectors, driving project management, product strategy, and large-scale programs.",
    image: "/images/Leadership/avnish-rana.png",
    linkedin: "https://www.linkedin.com/in/ranaavnish/",
  },
];

const MemberCard = ({ member }: { member: Member }) => {
  const isLink = Boolean(member.linkedin);
  const Wrapper = isLink ? "a" : "div";
  const linkAttrs = isLink
    ? {
      href: member.linkedin,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `${member.name} on LinkedIn`,
    }
    : {};

  return (
    <Wrapper
      {...linkAttrs}
      className={`group relative flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-300/40 ${isLink ? "cursor-pointer" : ""
        }`}
    >
      {/* Avatar Container */}
      <div className="relative mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-slate-100 bg-slate-50 shadow-inner sm:h-36 sm:w-36">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="144px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-3xl font-bold text-[#156EB0]">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="mb-1 text-xl font-bold leading-snug text-[#19344D] sm:text-2xl">
        {member.name}
      </h3>

      {/* Role */}
      <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] sm:text-xs">
        {member.role}
      </p>

      {/* Accent Line */}
      <div className="my-2.5 h-[2px] w-8 rounded-full bg-[#FF7A00]" />

      {/* Description */}
      <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-slate-600">
        {member.description}
      </p>

      {/* LinkedIn Floating Icon if available */}
      {member.linkedin && (
        <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors group-hover:bg-[#156EB0] group-hover:text-white">
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
          </svg>
        </div>
      )}
    </Wrapper>
  );
};

export default function LeadershipMatters() {
  return (
    <section
      id="leadership"
      className="w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        {/* Eyebrow */}
        {/* <Reveal className="text-left">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-6 rounded-full bg-[#156EB0]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#156EB0]">
              WHO LEADS US
            </span>
          </div>
        </Reveal>*/}

        {/* Subtitle */}
        {/*<Reveal delay={0.15} className="text-left">
          <p className="max-w-none text-base sm:text-lg leading-relaxed text-slate-600 md:whitespace-nowrap">
            Experienced leaders driving innovation and excellence in telecommunications and digital infrastructure.
          </p>
        </Reveal>*/}

        {/* Primary 3-Card Row */}
        {/*<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
          {topLeaders.map((member, i) => (
            <Reveal key={member.id} delay={0.25 + i * 0.1} className="h-full">
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>*/}

        {/* Additional Leadership Team Row */}
        {/*<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
          {additionalLeaders.map((member, i) => (
            <Reveal key={member.id} delay={0.35 + i * 0.1} className="h-full">
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>*/}
      </div>
    </section>
  );
}
