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
    imagePath: "/images/7fe9318a-7c68-4bf8-9759-ca61e80e5b49.png",
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
    imagePath: "/images/0f3426b1-078c-4703-929c-37762f2b97d9.png",
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
    imagePath: "/images/c1af6544-69b4-41ac-a09c-eb0d1766dc09.png",
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
    imagePath: "/images/solutions/system-integration-card.jpg",
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
    imagePath: "/images/2299a8df-7127-4e9c-b8d6-51268d289cbb.png",
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
    imagePath: "/images/f9a98921-188e-4b51-acaa-0a60a283fd0e.png",
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

