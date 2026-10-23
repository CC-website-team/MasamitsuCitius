export interface HomeSolutionItem {
  id: string;
  number: string;
  category: "IT Infrastructure" | "Application Engineering";
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  link: string;
}

export const homeSolutionsList: HomeSolutionItem[] = [
  {
    id: "network-solutions",
    number: "01",
    category: "IT Infrastructure",
    title: "Network Solutions",
    tagline: "Connectivity that keeps the business running",
    description:
      "We architect and manage the connectivity layer that links your sites, data centres, clouds, devices and people — securely and reliably.",
    image: "/images/7fe9318a-7c68-4bf8-9759-ca61e80e5b49.png",

    alt: "Enterprise network switches, optical fiber infrastructure, and structured cabling",
    features: [
      "Enterprise WAN & SD-WAN",
      "Structured Cabling & Fiber Infrastructure",
      "Direct & Multi-Cloud Connectivity",
      "LAN, Wi-Fi & Campus Networking",
      "24/7 Managed Network Operations",
    ],
    link: "/solutions/data-centre-cloud",
  },
  {
    id: "cybersecurity-surveillance",
    number: "02",
    category: "IT Infrastructure",
    title: "Cybersecurity & Surveillance",
    tagline: "Security that enables the business, not one that blocks it",
    description:
      "From governance and compliance to 24x7 monitoring and incident response, we help build security programmes that support business objectives.",
    image: "/images/about/42811f21-2cc0-4766-bf6c-131a1d38b579.png",
    alt: "Cybersecurity operations center, threat monitoring, and video surveillance",
    features: [
      "Video Surveillance & Smart AI Analytics",
      "Identity & Access Management (IAM/PAM)",
      "Perimeter & Network Security",
      "Cloud Workload & Endpoint Protection",
      "24/7 Managed Detection & Response (SOC)",
    ],
    link: "/solutions/cybersecurity",
  },
  {
    id: "cloud-infrastructure",
    number: "03",
    category: "IT Infrastructure",
    title: "Cloud Infrastructure",
    tagline: "Resilient foundations for hybrid enterprise workloads",
    description:
      "We architect hybrid multi-cloud foundations and deploy scalable compute, storage, and landing zones tailored for high availability.",
    image: "/images/about/Modern Cloud Operations Infographic.png",
    alt: "Enterprise cloud infrastructure, data center, and hybrid multi-cloud architecture",
    features: [
      "Cloud Strategy & Automated Landing Zones",
      "Hybrid & Multi-Cloud Architecture",
      "Private Cloud, Virtualisation & HCI",
      "Workload Migration & Backup DR",
      "Continuous Observability & SLA Ops",
    ],
    link: "/solutions/cloud-infrastructure",
  },
  {
    id: "application-development-management",
    number: "04",
    category: "Application Engineering",
    title: "Application Development Management",
    tagline: "Build better. Secure every release. Keep applications running.",
    description:
      "We manage applications across their entire lifecycle, from requirements and design through development, testing, release and 24/7 support.",
    image: "/images/about/ec207bea-22c5-47d6-bdaf-55d2e2ed33d3.png",
    alt: "Application engineering, custom software development, and systems integration",
    features: [
      "Custom Enterprise App & SaaS Development",
      "Legacy Modernisation & Microservices",
      "Enterprise API & System Integration",
      "Automated Testing & Release Governance",
      "24/7 SLA-Backed Application Support",
    ],
    link: "/solutions/application-engineering-devsecops",
  },
  {
    id: "devops",
    number: "05",
    category: "Application Engineering",
    title: "DevOps",
    tagline: "Automate delivery and secure every release pipeline",
    description:
      "We automate how software is built, tested, released, and run by combining CI/CD pipelines, infrastructure as code, and container platforms.",
    image: "/images/about/4c91f48b-7294-4ae2-bd25-4ec68a7dfd60.png",
    alt: "CI/CD pipelines, DevOps automation, and container orchestration platforms",
    features: [
      "Automated CI/CD & Delivery Pipelines",
      "Infrastructure as Code (IaC) & GitOps",
      "Containerisation & Kubernetes Platforms",
      "DevSecOps & Automated Security Scanning",
      "SRE, Observability & Performance Tuning",
    ],
    link: "/solutions/devops",
  },
  {
    id: "ai",
    number: "06",
    category: "Application Engineering",
    title: "AI",
    tagline: "Production AI systems that transform enterprise operations",
    description:
      "We help organisations move from AI experiments to systems that run the business — from data foundations to generative assistants and MLOps.",
    image: "/images/about/e42f7472-6c57-493a-b1ee-4caf751ac69d.png",
    alt: "Artificial Intelligence, enterprise assistants, and machine learning models",
    features: [
      "Generative AI & Enterprise Assistants",
      "Large Language Model (LLM) Integration & RAG",
      "Predictive Analytics & Data Engineering",
      "Intelligent Process Automation (IDP/RPA)",
      "Production MLOps & Model Governance",
    ],
    link: "/solutions/ai-solutions",
  },
  {
    id: "cloud-native-applications",
    number: "07",
    category: "Application Engineering",
    title: "Cloud-Native Applications",
    tagline: "Modern architectures engineered for elasticity and speed",
    description:
      "We design and build applications that take full advantage of cloud scale, container platforms, event-driven pipelines, and FinOps.",
    image: "/images/3a72460c-bdb8-4402-9eb7-07efd2a142d3.png",
    alt: "Cloud-native microservices architecture, SaaS platforms, and distributed systems",
    features: [
      "Cloud-Native Microservices Architecture",
      "Multi-Tenant SaaS Product Platforms",
      "Event-Driven & API-First Services",
      "Dynamic Container Orchestration",
      "MLOps Integration & Cloud FinOps",
    ],
    link: "/solutions/cloud-ai-solutions",
  },
];

export interface HomeServiceItem {
  slug: string;
  category?: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const homeServicesList: HomeServiceItem[] = homeSolutionsList.map((s) => ({
  slug: s.id,
  category: s.category,
  title: s.title,
  description: s.description,
  image: s.image,
  alt: s.alt,
}));

export default homeSolutionsList;

