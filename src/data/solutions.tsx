import type { ReactNode } from "react";
import {
  AntennaIcon,
  CloudIcon,
  DataCenterIcon,
  NetworkIcon,
  OpsIcon,
  ShieldIcon,
} from "@/components/ui/icons";

export interface SolutionPillar {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  icon: ReactNode;
}

/**
 * The six solution practices. Used by /solutions (summary cards) and
 * /solutions/services (full detail) — keep copy factual and conservative.
 */
export const pillars: SolutionPillar[] = [
  {
    slug: "data-center",
    title: "Data Center, Cloud & IT Infrastructure",
    tagline: "Compute, storage, and networking engineered for uptime",
    description:
      "We design, build, and modernize data center infrastructure for carriers and enterprises, from rack and power planning to compute, storage, and network fabric, sourced through our OEM partnerships and delivered turnkey.",
    points: [
      "Data center design and build",
      "Compute, storage, and network fabric",
      "Power, cooling, and rack planning",
      "Migration and modernization",
      "Multi-OEM sourcing and integration",
    ],
    icon: <DataCenterIcon size={28} className="ds-draw" />,
  },
  {
    slug: "ict-infrastructure",
    title: "Networking",
    tagline: "Enterprise and carrier networks, end to end",
    description:
      "Routing, switching, transmission, and unified communications, designed, deployed, and supported across multi-vendor environments with partners like Cisco, HPE, and Juniper.",
    points: [
      "Enterprise routing and switching",
      "Transmission and backhaul",
      "Unified communications",
      "Structured cabling and passive infrastructure",
      "Multi-vendor integration",
    ],
    icon: <NetworkIcon size={28} className="ds-draw" />,
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Carrier-grade protection for critical infrastructure",
    description:
      "Perimeter, network, and endpoint security built on proven platforms, including Palo Alto, to keep carrier and enterprise infrastructure resilient against evolving threats.",
    points: [
      "Network and perimeter security",
      "Next-generation firewalls",
      "Threat detection and response",
      "Security assessments and hardening",
      "Compliance-driven architectures",
    ],
    icon: <ShieldIcon size={28} className="ds-draw" />,
  },
  {
    slug: "application-engineering-devsecops",
    title: "Application Engineering & DevSecOps",
    tagline: "Build better. Secure every release. Keep applications running.",
    description:
      "Full lifecycle application engineering from custom development, UX design and microservices modernization to automated CI/CD pipelines, shift-left security and 24/7 SLA-backed continuous operations.",
    points: [
      "Custom enterprise application development (Web & Mobile)",
      "Legacy modernisation & monolith-to-microservices",
      "Shift-left pipeline security & compliance as code",
      "CI/CD automation, IaC & Kubernetes enablement",
      "24/7 SLA-backed managed support & observability",
    ],
    icon: <OpsIcon size={28} className="ds-draw" />,
  },
  {
    slug: "cloud-ai-solutions",
    title: "Cloud & AI Solutions",
    tagline: "Cloud foundations that scale. Production AI that performs.",
    description:
      "Integrated hybrid multi-cloud infrastructure, automated landing zones, container orchestration, generative AI applications, computer vision, and 24/7 MLOps governance.",
    points: [
      "AWS, Azure, GCP & hybrid multi-cloud migration",
      "Generative AI & enterprise LLM (RAG) applications",
      "Predictive machine learning & data engineering pipelines",
      "Kubernetes platform engineering & edge AI inference",
      "MLOps governance, safety guardrails & FinOps cost control",
    ],
    icon: <CloudIcon size={28} className="ds-draw" />,
  },
];
