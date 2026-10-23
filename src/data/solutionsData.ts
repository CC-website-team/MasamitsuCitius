export interface SolutionItem {
  number: string;
  slug: string;
  tabLabel: string;
  title: string;
  tagline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imagePath: string;
  imageAlt: string;
  layout: "text-left" | "text-right";
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const solutionsData: SolutionItem[] = [
  {
    number: "01",
    slug: "data-centre-cloud",
    tabLabel: "Network Solutions",
    title: "Network Solutions",
    tagline: "Connectivity that keeps the business running",
    description:
      "We architect and manage the connectivity layer that links your sites, data centres, clouds, devices and people — securely and reliably. From structured cabling, enterprise WAN and SD-WAN to direct multi-cloud interconnects and 24/7 managed network operations, we build modern networking foundations designed for performance and scale.",
    ctaLabel: "Explore",
    ctaHref: "/solutions/data-centre-cloud",
    imagePath: "/images/about/8188b193-6cdd-46f8-8cf2-d7185887dc33.png",
    imageAlt: "Enterprise network switches, optical fiber infrastructure, and structured cabling",
    layout: "text-left",
  },
  {
    number: "02",
    slug: "cybersecurity",
    tabLabel: "Cybersecurity & Surveillance",
    title: "Cybersecurity & Surveillance",
    tagline: "Security that enables the business, not one that blocks it.",
    description:
      "From governance and compliance to 24x7 monitoring and incident response, we help build security programmes that support business objectives. Our services combine perimeter defence, AI-powered video surveillance analytics, identity and access management (IAM/PAM), cloud workload security, and round-the-clock SOC monitoring.",
    ctaLabel: "Explore",
    ctaHref: "/solutions/cybersecurity",
    imagePath: "/images/about/42811f21-2cc0-4766-bf6c-131a1d38b579.png",
    imageAlt: "Cybersecurity operations center, threat monitoring, and video surveillance",
    layout: "text-right",
  },
  {
    number: "03",
    slug: "cloud-infrastructure",
    tabLabel: "Cloud Infrastructure",
    title: "Cloud Infrastructure",
    tagline: "Resilient foundations for hybrid enterprise workloads",
    description:
      "We architect hybrid multi-cloud foundations and deploy scalable compute, storage, and landing zones tailored for high availability. From cloud strategy and landing zone automation to private cloud virtualisation, workload migration, disaster recovery, and continuous observability, we build scalable and secure enterprise environments.",
    ctaLabel: "Explore",
    ctaHref: "/solutions/cloud-ai-solutions",
    imagePath: "/images/about/Modern Cloud Operations Infographic.png",
    imageAlt: "Enterprise cloud infrastructure, data center, and hybrid multi-cloud architecture",
    layout: "text-left",
  },
  {
    number: "04",
    slug: "application-engineering-devsecops",
    tabLabel: "Application Development Management",
    title: "Application Development Management",
    tagline: "Build better. Secure every release. Keep applications running.",
    description:
      "Our Application Development Management services help organisations design, build, modernise, secure and operate business-critical applications across their entire lifecycle. Combining custom software engineering, legacy modernisation, enterprise API integration, embedded pipeline security, and 24/7 SLA-backed continuous operations, we deliver resilient software that powers your digital enterprise.",
    ctaLabel: "Explore",
    ctaHref: "/solutions/application-engineering-devsecops",
    imagePath: "/images/about/ec207bea-22c5-47d6-bdaf-55d2e2ed33d3.png",
    imageAlt: "Application engineering, custom software development, and systems integration",
    layout: "text-right",
  },
  {
    number: "05",
    slug: "devops",
    tabLabel: "DevOps",
    title: "DevOps",
    tagline: "Automate delivery and secure every release pipeline",
    description:
      "We automate how software is built, tested, released, and run by combining CI/CD pipelines, infrastructure as code, and container platforms. Our DevOps practices embed automated security scanning, GitOps workflows, Kubernetes orchestration, SRE discipline, and end-to-end observability to accelerate deployment cycles with confidence.",
    ctaLabel: "Explore",
    ctaHref: "/solutions/application-engineering-devsecops",
    imagePath: "/images/about/4c91f48b-7294-4ae2-bd25-4ec68a7dfd60.png",
    imageAlt: "CI/CD pipelines, DevOps automation, and container orchestration platforms",
    layout: "text-left",
  },
  {
    number: "06",
    slug: "ai-solutions",
    tabLabel: "AI",
    title: "AI",
    tagline: "Production AI systems that transform enterprise operations",
    description:
      "We help organisations move from AI experiments to production systems that run the business — from robust data foundations to generative assistants and MLOps. Combining enterprise LLM integration, Retrieval-Augmented Generation (RAG), predictive analytics, and model governance, we deliver secure and impactful artificial intelligence solutions.",
    ctaLabel: "Explore",
    ctaHref: "/solutions/cloud-ai-solutions",
    imagePath: "/images/about/e42f7472-6c57-493a-b1ee-4caf751ac69d.png",
    imageAlt: "Artificial Intelligence, enterprise assistants, and machine learning models",
    layout: "text-right",
  },
  {
    number: "07",
    slug: "cloud-native-applications",
    tabLabel: "Cloud-Native Applications",
    title: "Cloud-Native Applications",
    tagline: "Modern architectures engineered for elasticity and speed",
    description:
      "We design and build applications that take full advantage of cloud scale, container platforms, event-driven pipelines, and FinOps. From microservices architecture and multi-tenant SaaS platforms to API-first integrations and dynamic orchestration, we engineer software built for rapid iteration and resilience.",
    ctaLabel: "Explore",
    ctaHref: "/solutions/cloud-ai-solutions",
    imagePath: "/images/3a72460c-bdb8-4402-9eb7-07efd2a142d3.png",
    imageAlt: "Cloud-native microservices architecture, SaaS platforms, and distributed systems",
    layout: "text-left",
  },
];

export const processSteps: ProcessStep[] = [

];

export interface SolutionNavItem {
  id: string;
  label: string;
  targetSlug: string;
  path: string;
}

export interface SolutionNavRow {
  category: string;
  items: SolutionNavItem[];
}

export const solutionNavRows: SolutionNavRow[] = [
  {
    category: "IT Infrastructure",
    items: [
      {
        id: "network-solutions",
        label: "Network Solutions",
        targetSlug: "data-centre-cloud",
        path: "/solutions/data-centre-cloud",
      },
      {
        id: "cybersecurity-surveillance",
        label: "Cybersecurity & Surveillance",
        targetSlug: "cybersecurity",
        path: "/solutions/cybersecurity",
      },
      {
        id: "cloud-infrastructure",
        label: "Cloud Infrastructure",
        targetSlug: "cloud-infrastructure",
        path: "/solutions/cloud-infrastructure",
      },
    ],
  },
  {
    category: "Application Engineering",
    items: [
      {
        id: "app-dev-management",
        label: "Application Development Management",
        targetSlug: "application-engineering-devsecops",
        path: "/solutions/application-engineering-devsecops",
      },
      {
        id: "devops",
        label: "DevOps",
        targetSlug: "devops",
        path: "/solutions/devops",
      },
      {
        id: "ai",
        label: "AI",
        targetSlug: "ai-solutions",
        path: "/solutions/ai-solutions",
      },
      {
        id: "cloud-native-apps",
        label: "Cloud-Native Applications",
        targetSlug: "cloud-ai-solutions",
        path: "/solutions/cloud-ai-solutions",
      },
    ],
  },
];

