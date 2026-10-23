import React from "react";
import Reveal from "@/components/ui/Reveal";
import { CapabilityItem } from "@/data/individualSolutionsData";
import {
  NetworkIcon,
  DataCenterIcon,
  ShieldIcon,
  AntennaIcon,
  CloudIcon,
  OpsIcon,
  ChartIcon,
  GlobeIcon,
  BoltIcon,
  CpuIcon,
  LightbulbIcon,
  UsersIcon,
  EvChargerIcon,
  BuildingIcon,
  CheckIcon,
  RouteIcon,
  SparklesIcon,
  ChartBarIcon,
  LightningBoltIcon,
  CubeIcon,
} from "@/components/ui/icons";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  NetworkIcon,
  DataCenterIcon,
  ShieldIcon,
  AntennaIcon,
  CloudIcon,
  OpsIcon,
  ChartIcon,
  GlobeIcon,
  BoltIcon,
  CpuIcon,
  LightbulbIcon,
  UsersIcon,
  EvChargerIcon,
  BuildingIcon,
  RouteIcon,
  SparklesIcon,
  ChartBarIcon,
  LightningBoltIcon,
  CubeIcon,
};

interface SolutionCapabilitiesGridProps {
  title: string;
  subtitle: string;
  capabilities: CapabilityItem[];
  eyebrow?: string;
}

export default function SolutionCapabilitiesGrid({
  title,
  subtitle,
  capabilities,
  eyebrow = "CAPABILITIES & PILLARS",
}: SolutionCapabilitiesGridProps) {
  return (
    <section id="capabilities" className="scroll-mt-28 py-7 md:py-8 lg:py-10 bg-section-alt border-y border-slate-200/70">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#D95F02] uppercase">
              {eyebrow}
            </span>
            <span className="h-[2px] w-6 bg-[#D95F02]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-5">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {capabilities.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || NetworkIcon;

            return (
              <Reveal key={item.id} delay={Math.min(index, 5) * 0.06} className="h-full">
                <div className="group relative h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50/50 hover:border-[#D95F02]/40 shadow-sm hover:shadow-lg transition-all duration-300">

                  {/* Top Accent Line on Hover */}
                  <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#D95F02] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />

                  <div>
                    {/* Icon Box */}
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-orange-50 text-[#D95F02] group-hover:bg-[#D95F02] group-hover:text-white transition-colors duration-300 mb-6">
                      <IconComponent size={24} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#D95F02] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <ul className="space-y-2.5">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="mt-0.5 flex-shrink-0 text-[#D95F02]">
                            <CheckIcon size={16} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
