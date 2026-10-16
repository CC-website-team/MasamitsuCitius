export interface StatItem {
  value: string;
  label: string;
}

export interface CapabilityItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
}

export interface ArchitectureStep {
  number: string;
  title: string;
  description: string;
  capabilities?: string[];
}

export interface SolutionUseCase {
  sector: string;
  title: string;
  description: string;
  highlight: string;
}

export interface IndividualSolutionDetail {
  slug: string;
  aliasSlugs?: string[];
  eyebrow?: string;
  title: string;
  highlight?: string;
  tagline: string;
  heroDescription: string;
  imagePath: string;
  imageAlt: string;
  stats: StatItem[];
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: CapabilityItem[];
  architectureTitle: string;
  architectureSubtitle: string;
  architectureSteps: ArchitectureStep[];
  scopeFeaturesTitle?: string;
  scopeFeatures?: string[];
  useCasesTitle: string;
  useCasesSubtitle: string;
  useCases: SolutionUseCase[];
}

export const individualSolutionsData: Record<string, IndividualSolutionDetail> = {
  networking: {
    slug: "networking",
    aliasSlugs: ["services#networking"],
    eyebrow: "CONNECTIVITY & TRANSMISSION",
    title: "Infrastructure Management",
    tagline: "",
    heroDescription:
      "Build a resilient, scalable, and future-ready technology foundation across cloud environments, and hybrid infrastructures. We design, build, migrate, and manage the compute, storage, and network platforms that power modern businesses.",
    imagePath: "/images/solutions/Data centre and cloud.png",
    imageAlt: "High-speed optical fiber and networking infrastructure",
    scopeFeaturesTitle: "Scope and Features",
    scopeFeatures: [
      "Current-state discovery, dependency mapping and TCO analysis",
      "Target architecture, migration roadmap and risk-managed cut-over plans",
      "Landing zone setup with networking, identity, tagging, guardrails and policy-as-code",
      "Compute, storage (block/file/object), SAN/NAS and network fabric design",
      "Infrastructure as Code delivery using Terraform, Ansible and cloud-native tooling",
      "Kubernetes cluster design, hardening, autoscaling and lifecycle management",
      "Observability stack — metrics, logs, traces, dashboards and alert routing",
      "Backup policies, RTO/RPO definition, immutable backups and periodic DR drills",
      "Capacity planning, performance tuning and lifecycle/EOL management",
      "Managed operations with defined SLAs, escalation matrix and monthly service reviews",
      "Runbooks, architecture documentation and knowledge transfer to your internal team",
    ],
    stats: [
      { value: "99.999%", label: "Target SLA Uptime" },
      { value: "100G+", label: "DWDM Transmission" },
      { value: "50K+ Miles", label: "Fiber Cable Deployed" },
    ],
    capabilitiesTitle: "Core Capabilities",
    capabilitiesSubtitle:
      "From high-density fiber rollouts to private wireless networks, we deliver end-to-end connectivity built for ultimate reliability.",
    capabilities: [

      {
        id: "virtualisation-containerisation",
        iconName: "DataCenterIcon",
        title: "Virtualisation & Containerisation",
        description:
          "Modernise infrastructure through virtualisation and container platforms that improve scalability and workload portability.",
        features: [
          "VMware environments",
          "Hyper-V deployments",
          "Kubernetes platform engineering",
          "Container orchestration",
          "Infrastructure modernisation",
        ],
      },

      {
        id: "backup-disaster-recovery",
        iconName: "DataCenterIcon",
        title: "Backup, Disaster Recovery & Business Continuity",
        description:
          "Protect critical systems and data through structured recovery planning and business continuity strategies.",
        features: [
          "Recovery planning",
          "Data replication",
          "Disaster recovery testing",
          "Failover strategies",
          "Business continuity support",
        ],
      },

      {
        id: "managed-infrastructure-services",
        iconName: "NetworkIcon",
        title: "Managed Network",
        description:
          "Maintain operational stability through proactive monitoring, maintenance, and infrastructure support.",
        features: [
          "24x7 monitoring",
          "Capacity management",
          "Patch management",
          "Incident management",
          "Infrastructure operations",
        ],
      },
    ],
    architectureTitle: "Network Delivery & Deployment Framework",
    architectureSubtitle:
      "A systematic, multi-phase engineering process designed to eliminate deployment risk and guarantee network longevity.",
    architectureSteps: [
      {
        number: "01",
        title: "Assess & Discover",
        description:
          "Understand the current environment through infrastructure discovery, dependency mapping, and total cost of ownership analysis.",
      },

      {
        number: "02",
        title: "Design & Plan",
        description:
          "Develop target architecture, migration roadmaps, governance frameworks, and risk-managed transition plans.",
      },

      {
        number: "03",
        title: "Build & Migrate",
        description:
          "Implement infrastructure platforms, landing zones, networking, storage, and cloud environments using modern automation practices.",
      },

      {
        number: "04",
        title: "Operate & Optimise",
        description:
          "Deliver ongoing monitoring, lifecycle management, performance optimisation, and SLA-backed support services.",

      },
    ],
    useCasesTitle: "Industry Applications",
    useCasesSubtitle: "“Industry-specific solutions for high-consequence operational environments.",
    useCases: [
      {
        sector: "Telecom",
        title: "OSS/BSS & Telco Cloud Infrastructure",
        description:
          "OSS/BSS platform hosting, telco cloud & NFV infrastructure, and edge computing for low-latency services.",
        highlight: "Telco Cloud & Edge Computing",
      },

      {
        sector: "BFSI",
        title: "Private Cloud & Disaster Recovery",
        description:
          "Data-residency-compliant private cloud, core banking disaster recovery, and regulator-ready audit trails.",
        highlight: "Regulator-Ready Audit Trails",
      },

      {
        sector: "Manufacturing",
        title: "Plant Edge & MES Infrastructure",
        description:
          "Plant-level edge computing, MES/SCADA infrastructure, and plant-to-cloud data pipelines.",
        highlight: "Plant-to-Cloud Data Pipelines",
      },

      {
        sector: "Logistics",
        title: "Hub Infrastructure & TMS/WMS Hosting",
        description:
          "Hub and warehouse infrastructure, peak-season scaling for tracking platforms, and always-on TMS/WMS hosting.",
        highlight: "Always-On TMS/WMS Hosting",
      },

      {
        sector: "Enterprise",
        title: "Data Centre Consolidation & Hybrid Cloud",
        description:
          "Data centre exit and consolidation, post-M&A infrastructure integration, and hybrid cloud landing zones.",
        highlight: "Hybrid Cloud Landing Zones",
      },
    ],
  },
  "data-centre-cloud": {
    slug: "data-centre-cloud",
    aliasSlugs: ["datacenter", "services#datacenter", "services#cloud"],
    title: "Network Solutions",
    tagline: "Connectivity that keeps the business running.",
    heroDescription:
      "Our Networking help organisations create secure, software-defined network environments that connect sites, cloud platforms, remote users, and operational assets. By combining intelligent routing, cloud connectivity, network segmentation, and managed operations, we help build networking foundations designed to support modern business operations.\n\n From structured cabling, LAN and campus design to cloude connectivity and edge networks,we deliever end to end engineering and managed operations",
    imagePath: "/images/7fe9318a-7c68-4bf8-9759-ca61e80e5b49.png",
    imageAlt: "Data centre server racks with LED lighting and cable management",
    stats: [],
    capabilitiesTitle: "Core Capabilities",
    capabilitiesSubtitle:
      "Engineered from the physical network to the virtual cloud layer, delivering secure, resilient and high-availability connectivity.",
    capabilities: [
      {
        id: "sd-wan",
        iconName: "NetworkIcon",
        title: "Enterprise WAN & SD-WAN",
        description:
          "Modernise multi-site connectivity with software-defined networking that improves traffic management, application performance and operational visibility.",
        features: [
          "Multi-site network connectivity",
          "Application-aware routing",
          "Intelligent traffic management",
          "MPLS-to-SD-WAN migration",
          "Network performance optimisation",
        ],
      },
      {
        id: "sd-wan",
        iconName: "NetworkIcon",
        title: "Physical Infrastructure & Structured Cabling ",
        description:
          " Lay the physical foundation for reliable networks, from site survey to certified installation.",
        features: [
          "Copper and fibre structured cabling",

          "Passive network infrastructure",

          "Racks, pathways, and cabinet integration",

          "Testing, certification, and documentation",

          "Cable upgrades and rationalisation",
        ],
      },

      {
        id: "cloud-connectivity",
        iconName: "CloudIcon",
        title: "Cloud Connectivity",
        description:
          "Establish reliable, high-performance connectivity between enterprise environments and cloud platforms.",
        features: [
          "Direct cloud connectivity",
          "Private cloud integration",
          "Hybrid cloud networking",
          "Multi-cloud interconnect",
          "Secure cloud access",
        ],
      },
      {
        id: "lan-wifi-campus",
        iconName: "NetworkIcon",
        title: "LAN, Wi-Fi & Campus Networking",
        description:
          "Design and deploy wired and wireless network environments that support users, devices and business-critical applications.",
        features: [
          "Enterprise LAN architecture",
          "Campus network design",
          "Wi-Fi design and deployment",
          "Wireless optimisation",
          "Access network modernisation",
        ],
      },
      {
        id: "sase-zero-trust",
        iconName: "ShieldIcon",
        title: "SASE & Zero Trust Network Access",
        description:
          "Enable secure access for users regardless of location through identity-driven connectivity models.",
        features: [
          "Zero Trust Network Access (ZTNA)",
          "Identity-based access control",
          "Secure remote access",
          "Workforce connectivity",
          "SASE architecture implementation",
        ],
      },
      {
        id: "iot-edge-connectivity",
        iconName: "CpuIcon",
        title: "IoT & Edge Connectivity",
        description:
          "Connect distributed assets, operational technologies and edge environments through scalable network architectures.",
        features: [
          "Device connectivity",
          "Industrial networking",
          "Edge infrastructure support",
          "Remote asset communication",
          "Distributed network environments",
        ],
      },

      {
        id: "managed-infrastructure-services",
        iconName: "OpsIcon",
        title: "Managed Network Services",
        description:
          "Maintain operational stability through proactive monitoring, maintenance, and infrastructure support.",
        features: [
          "24x7 NOC monitoring",
          "Network analytics and observability",
          "Patch and configuration management ",
          "Incident and capacity management ",
          "Multi-vendor support and annual maintenance contracts",
        ],
      },
    ],
    architectureTitle: "Enterprise Network Delivery Framework",
    architectureSubtitle:
      "A structured approach to designing, securing, optimising, and operating resilient enterprise networks across users, locations, cloud environments, and distributed infrastructure.",
    architectureSteps: [
      {
        number: "01",
        title: "Network Assessment & Capacity Planning",
        description:
          "Network assessment, traffic profiling and bandwidth planning to establish a clear understanding of current infrastructure, utilisation patterns, application requirements, and future capacity needs.",
        capabilities: [
          "Network assessment",
          "Traffic profiling",
          "Bandwidth planning",
        ],
      },
      {
        number: "02",
        title: "SD-WAN Architecture & Intelligent Routing",
        description:
          "SD-WAN design with dynamic path selection, QoS and application steering to optimise traffic flows, improve application performance, and maintain connectivity across distributed locations.",
        capabilities: [
          "SD-WAN design",
          "Dynamic path selection",
          "Quality of Service (QoS)",
          "Application-aware traffic steering",
        ],
      },
      {
        number: "03",
        title: "Carrier Strategy & Connectivity",
        description:
          "ISP/carrier selection, multi-carrier redundancy and contract advisory to build resilient connectivity while aligning carrier services with performance, availability, and business requirements.",
        capabilities: [
          "ISP and carrier selection",
          "Multi-carrier redundancy",
          "Carrier contract advisory",
        ],
      },
      {
        number: "04",
        title: "Cloud & Private Interconnect",
        description:
          "Private cloud interconnects that establish secure, high-performance connectivity between enterprise environments and leading cloud platforms.",
        capabilities: [
          "AWS Direct Connect",
          "Microsoft Azure ExpressRoute",
          "Google Cloud Interconnect",
        ],
      },
      {
        number: "05",
        title: "Enterprise Wi-Fi & RF Optimisation",
        description:
          "Enterprise Wi-Fi survey, design, deployment and RF optimisation to deliver reliable wireless connectivity, consistent coverage, and improved user experience across business environments.",
        capabilities: [
          "Enterprise Wi-Fi surveys",
          "Wireless network design",
          "Wi-Fi deployment",
          "RF optimisation",
        ],
      },
      {
        number: "06",
        title: "Segmentation & Network Security",
        description:
          "Segmentation, micro-segmentation and east-west traffic control designed to establish controlled communication boundaries and reduce unnecessary lateral movement across enterprise environments.",
        capabilities: [
          "Network segmentation",
          "Micro-segmentation",
          "East-west traffic control",
        ],
      },
      {
        number: "07",
        title: "Zero Trust Remote Access",
        description:
          "Secure remote access via ZTNA, integrated with your identity provider to enable identity-driven connectivity and controlled access for distributed users and applications.",
        capabilities: [
          "Zero Trust Network Access (ZTNA)",
          "Identity provider integration",
          "Secure remote access",
        ],
      },
      {
        number: "08",
        title: "Network Automation & Compliance",
        description:
          "Network automation, configuration management and compliance drift detection to improve operational consistency, reduce manual intervention, and maintain controlled network configurations.",
        capabilities: [
          "Network automation",
          "Configuration management",
          "Compliance drift detection",
        ],
      },
      {
        number: "09",
        title: "Performance & Experience Visibility",
        description:
          "Performance monitoring, synthetic testing and end-user experience visibility to identify network issues proactively and provide a clear view of application and connectivity performance.",
        capabilities: [
          "Performance monitoring",
          "Synthetic testing",
          "End-user experience visibility",
        ],
      },
      {
        number: "10",
        title: "24x7 Network Operations",
        description:
          "24x7 NOC, vendor/carrier escalation management and SLA reporting to maintain operational continuity, coordinate issue resolution, and provide ongoing visibility into network service performance.",
        capabilities: [
          "24x7 NOC monitoring",
          "Vendor and carrier escalation management",
          "SLA reporting",
        ],
      },
    ],
    useCasesTitle: "Target Industry Deployments",
    useCasesSubtitle:
      "Mission-critical connectivity solutions tailored for high-consequence enterprise environments.",
    useCases: [
      {
        sector: "Telecom",
        title: "Carrier-Grade Connectivity & Network Transformation",
        description:
          "Carrier-grade backhaul and aggregation; network transformation programmes; managed connectivity delivered to enterprise customers.",
        highlight: "Carrier-Grade Backhaul & Aggregation",
      },
      {
        sector: "BFSI",
        title: "Secure Branch & Transaction Connectivity",
        description:
          "Ultra-low-latency WAN, encrypted branch connectivity, redundant carrier paths, and zero-trust remote access for sensitive financial transactions.",
        highlight: "Ultra-Low-Latency WAN",
      },
      {
        sector: "Transportation",
        title: "Connected Fleet & CCTV Networks",
        description:
          "Mobile WAN/cellular aggregation for transit vehicles, roadside IoT telemetry, and high-throughput video surveillance feeds across transit hubs.",
        highlight: "High-Throughput CCTV Feeds",
      },
      {
        sector: "Logistics",
        title: "Warehouse & Logistics Connectivity",
        description:
          "High-density enterprise Wi-Fi for warehouse automation, automated guided vehicles (AGVs), ruggedised IoT edge gateways, and multi-site SD-WAN.",
        highlight: "High-Density Enterprise Wi-Fi",
      },
      {
        sector: "Utilities",
        title: "Grid & Substation Remote Monitoring",
        description:
          "Secure, SCADA-compatible WAN/cellular links for remote power grid substations, smart metering aggregation, and field force connectivity.",
        highlight: "SCADA-Compatible Links",
      },
    ],
  },
  cybersecurity: {
    slug: "cybersecurity",
    aliasSlugs: ["services#cybersecurity"],
    title: "Cybersecurity & Surveillance ",
    tagline: "Security that enables the business, not one that blocks it.",
    heroDescription:
      "We help you identify what matters, protect it proportionately, detect threats early, and recover quickly. From governance and compliance to 24×7 threat monitoring and integrated video surveillance, we secure your digital and physical environments, so you can demonstrate control to regulators, customers and your board.",
    imagePath: "/images/0f3426b1-078c-4703-929c-37762f2b97d9.png",
    imageAlt: "Cybersecurity operations dashboard with threat visualization map",
    stats: [
      { value: "< 15 Min", label: "Threat Detection & Response SLA" },
      { value: "Zero-Trust", label: "Security Architecture Standard" },
      { value: "24/7/365", label: "Active SOC Telemetry Supervision" },
    ],
    capabilitiesTitle: "Security & Surveillance Capabilities",
    capabilitiesSubtitle:
      "Defense-in-depth strategies combining automated threat intelligence, strict identity verification, and relentless SOC monitoring.",
    capabilities: [


      {
        id: "security-advisory-grc",
        iconName: "CheckIcon",
        title: "Video Surveillance & Integrated Security",
        description:
          "Design, deploy, and manage surveillance and physical security systems that give you real-time visibility across sites, assets, and people.",
        features: [
          "IP CCTV design and deployment",
          "AI video analytics and smart alerts",
          "Access control and visitor management",
          "Command and control centre integration",
          "Maintenance and managed monitoring",
        ],
      },

      {
        id: "identity-access-management",
        iconName: "ShieldIcon",
        title: "Identity & Access Management",
        description:
          "Control and manage access to critical systems, applications, and data through modern identity and privileged access strategies.",
        features: [
          "Identity and Access Management (IAM)",
          "Privileged Access Management (PAM)",
          "Multi-Factor Authentication (MFA)",
          "Zero Trust access models",
          "Identity lifecycle management",
        ],
      },

      {
        id: "infrastructure-cloud-security",
        iconName: "CloudIcon",
        title: "Infrastructure & Cloud Security",
        description:
          "Protect infrastructure, workloads, endpoints, and cloud environments through proactive security controls and continuous monitoring.",
        features: [
          "Cloud Security Posture Management (CSPM)",
          "Cloud Workload Protection (CWPP)",
          "Endpoint detection and response ",
          "Server and infrastructure hardening ",
          "Vulnerability and patch governance ",
        ],
      },

      {
        id: "infrastructure-cloud-security",
        iconName: "CloudIcon",
        title: "Network & Perimeter Security",
        description:
          "Protect network boundaries and internal traffic with layered controls and expert firewall management.",
        features: [
          "Next-generation firewall deployment and management ",
          "Intrusion detection and prevention ",
          "Network segmentation ",
          "DDoS and web application protection ",
          "Secure remote access and VPN ",
        ],
      },

      {
        id: "application-data-security",
        iconName: "LockIcon",
        title: "Application & Data Security",
        description:
          "Protect business-critical information throughout its lifecycle using security controls designed to safeguard applications and sensitive data.",
        features: [
          "Data classification",
          "Encryption strategies",
          "Data Loss Prevention (DLP)",
          "Key management",
          "Application security testing and controls ",
        ],
      },

      {
        id: "offensive-security",
        iconName: "TargetIcon",
        title: "Offensive Security",
        description:
          "Identify vulnerabilities and security weaknesses through controlled testing and security assessments.",
        features: [
          "Vulnerability Assessment & Penetration Testing (VAPT)",
          "Red team exercises",
          "Phishing and social engineering simulations",
          "Configuration assessments",
          "Architecture reviews",
        ],
      },

      {
        id: "managed-detection-response",
        iconName: "OpsIcon",
        title: "Managed Detection & Response (SOC)",
        description:
          "Maintain continuous visibility into threats through proactive monitoring, threat hunting, and incident response services.",
        features: [
          "24x7 monitoring",
          "Threat detection",
          "Threat hunting",
          "Incident response",
          "Security operations support",
        ],
      },

      {
        id: "ot-iot-security",
        iconName: "CpuIcon",
        title: "OT & IoT Security",
        description:
          "Protect operational technology and connected environments through specialised visibility and security controls.",
        features: [
          "Industrial environment security",
          "OT visibility",
          "IoT protection",
          "Connected asset security",
          "Operational environment monitoring",
        ],
      },
    ],
    architectureTitle: "",
    architectureSubtitle:
      "",
    architectureSteps: [
    ],
    useCasesTitle: "Industry Threat Protection",
    useCasesSubtitle: "Robust defense architectures protecting critical infrastructure and financial systems.",
    useCases: [
      {
        sector: "Telecom",
        title: "Subscriber Data & Core Network Security",
        description:
          "Subscriber data protection; signalling and core network security; sector-specific regulatory compliance.",
        highlight: "Signalling & Core Network Security",
      },

      {
        sector: "BFSI",
        title: "Financial Compliance & Secure Banking",
        description:
          "RBI and PCI DSS compliance; fraud-related monitoring; secure digital banking channels.",
        highlight: "RBI & PCI DSS Compliance",
      },

      {
        sector: "Manufacturing",
        title: "OT/ICS Protection & Production Resilience",
        description:
          "OT and ICS network protection; ransomware resilience for production lines; secure remote vendor access.",
        highlight: "Ransomware Resilience & Vendor Access",
      },

      {
        sector: "Logistics",
        title: "Supply-Chain Risk & Facility Access",
        description:
          "Supply-chain and third-party risk management; shipment and customer data protection; facility and hub access control.",
        highlight: "Supply-Chain & Data Protection",
      },

      {
        sector: "Enterprise",
        title: "ISO/SOC 2 Readiness & 24x7 SOC",
        description:
          "ISO 27001 and SOC 2 readiness; identity and privileged access management; 24x7 SOC and incident response.",
        highlight: "ISO 27001 & 24x7 SOC Operations",
      },
    ],
  },
  "resource-management": {
    slug: "resource-management",
    aliasSlugs: ["managed", "services#managed"],
    eyebrow: "MANAGED OPERATIONS & NOC",
    title: "DevSecOps",
    tagline: "Ship faster, with security built in — not bolted on.",
    heroDescription:
      "We modernise how your software gets built, tested, secured and released. By automating the path from commit to production and embedding security checks into every stage, we help teams release more often with fewer failures and far less manual effort — while keeping auditors and security teams satisfied by design.",
    imagePath: "/images/solutions/Resource Management.png",
    imageAlt: "Network Operations Center command control room with wall monitoring displays",
    stats: [
      { value: "24/7/365", label: "NOC Command Operations" },
      { value: "99.9%", label: "First-Contact Resolution Rate" },
      { value: "< 4 Hours", label: "On-Site Dispatch SLA" },
    ],
    capabilitiesTitle: "DevSecOps Capabilities",
    capabilitiesSubtitle:
      "Full lifecycle IT operations and NOC management freeing internal teams to focus on core business growth.",
    capabilities: [
      {
        id: "cicd-engineering",
        iconName: "OpsIcon",
        title: "CI/CD Engineering",
        description:
          "Establish automated development and deployment pipelines that improve delivery speed, consistency, and quality across the software delivery lifecycle.",
        features: [
          "Continuous Integration (CI)",
          "Continuous Delivery (CD)",
          "Automated build pipelines",
          "Deployment automation",
          "Release orchestration",
        ],
      },

      {
        id: "infrastructure-as-code-gitops",
        iconName: "CodeIcon",
        title: "Infrastructure as Code & GitOps",
        description:
          "Manage infrastructure through version-controlled, repeatable, and automated deployment processes that improve consistency, scalability, and operational control.",
        features: [
          "Infrastructure as Code (IaC)",
          "GitOps implementation",
          "Automated provisioning",
          "Configuration management",
          "Environment consistency",
        ],
      },

      {
        id: "security-in-pipeline",
        iconName: "ShieldIcon",
        title: "Security in the Pipeline",
        description:
          "Embed security controls directly into development workflows and delivery pipelines to identify vulnerabilities early and support secure software delivery.",
        features: [
          "Automated security scanning",
          "Security testing integration",
          "Compliance checks",
          "Vulnerability management",
          "Secure delivery workflows",
        ],
      },

      {
        id: "container-kubernetes",
        iconName: "CloudIcon",
        title: "Container & Kubernetes Enablement",
        description:
          "Support modern application deployment through container platforms and Kubernetes-based environments with structured platform operations and security controls.",
        features: [
          "Container adoption",
          "Kubernetes implementation",
          "Container lifecycle management",
          "Platform operations",
          "Container security",
        ],
      },

      {
        id: "release-engineering",
        iconName: "RocketIcon",
        title: "Release Engineering",
        description:
          "Improve software release processes through automation and governance, enabling consistent deployments, controlled changes, and streamlined release operations.",
        features: [
          "Release planning",
          "Deployment standardisation",
          "Environment management",
          "Change control",
          "Release automation",
        ],
      },

      {
        id: "observability-sre",
        iconName: "ChartIcon",
        title: "Observability & SRE Practices",
        description:
          "Improve visibility and operational performance through monitoring, service observability, and reliability engineering practices.",
        features: [
          "Application monitoring",
          "Service observability",
          "Reliability engineering",
          "Performance measurement",
          "Operational visibility",
        ],
      },

      {
        id: "compliance-as-code",
        iconName: "CheckIcon",
        title: "Compliance as Code",
        description:
          "Implement governance and compliance controls through automation and policy-driven processes to support continuous validation, enforcement, and audit readiness.",
        features: [
          "Policy automation",
          "Compliance validation",
          "Governance controls",
          "Automated enforcement",
          "Audit support",
        ],
      },

    ],
    architectureTitle: "DevSecOps Delivery Methodology",
    architectureSubtitle:
      "A battle-tested software delivery framework automating the path from commit to production with embedded security, policy guardrails, and continuous observability.",
    architectureSteps: [
      {
        number: "01",
        title: "Maturity Assessment & TOM Design",
        description:
          "DevOps maturity assessment and target operating model design.",
      },
      {
        number: "02",
        title: "Toolchain Setup & Integration",
        description:
          "Toolchain setup and integration — GitHub/GitLab/Azure DevOps, Jenkins, Argo CD, Harness.",
      },
      {
        number: "03",
        title: "Automated Testing & CI/CD Pipelines",
        description:
          "Pipeline design with automated unit, integration, performance and security testing.",
      },
      {
        number: "04",
        title: "IaC & Kubernetes Golden Templates",
        description:
          "IaC modules using Terraform, Helm, Kubernetes with reusable golden templates.",
      },
      {
        number: "05",
        title: "Container Hardening & Provenance",
        description:
          "Container image hardening, registry management and signed artefacts (SBOM, provenance).",
      },
      {
        number: "06",
        title: "Centralised Secrets Management",
        description:
          "Secrets management via Vault or cloud-native key stores.",
      },
      {
        number: "07",
        title: "Environment Provisioning & Drift Control",
        description:
          "Environment provisioning, ephemeral preview environments and drift control.",
      },
      {
        number: "08",
        title: "Policy-as-Code Guardrails",
        description:
          "Policy-as-code guardrails (OPA, Kyverno) enforcing standards at merge and deploy time.",
      },
      {
        number: "09",
        title: "Observability & SRE Runbooks",
        description:
          "Observability instrumentation, SLO definition, alert design and on-call runbooks.",
      },
      {
        number: "10",
        title: "Developer Enablement & Self-Service",
        description:
          "Developer enablement — templates, self-service portals, documentation and coaching.",
      },
      {
        number: "11",
        title: "DORA Metrics & Continuous Improvement",
        description:
          "DORA metrics baselining and continuous improvement reporting.",
      },
    ],
    useCasesTitle: "Managed Operations Success",
    useCasesSubtitle: "Helping enterprises optimize infrastructure health and maintain 24/7 service availability.",
    useCases: [
      {
        sector: "Telecom",
        title: "Network Function Automation & Delivery",
        description:
          "DevOps engineering for large-scale microservices delivery, network function automation, and OSS/BSS release pipelines supporting consistent and controlled software delivery across telecom environments.",
        highlight:
          "Microservices, Network Automation & OSS/BSS Delivery",
      },

      {
        sector: "BFSI",
        title: "Controlled & Auditable Software Delivery",
        description:
          "DevOps pipelines designed around auditable release trails, segregation of duties, and regulated change management to support controlled software delivery in financial environments.",
        highlight:
          "Auditable Releases & Regulated Change Management",
      },

      {
        sector: "Manufacturing",
        title: "Industrial Application Delivery & Edge Rollouts",
        description:
          "Automated delivery for MES and IIoT applications with controlled software rollout processes supporting distributed edge environments and industrial operations.",
        highlight:
          "MES, IIoT & Controlled Edge Deployment",
      },

      {
        sector: "Logistics",
        title: "Resilient Tracking & Booking Releases",
        description:
          "Frequent releases to tracking and booking platforms with automated deployment and rollback capabilities designed to minimise operational risk during peak-season activity.",
        highlight:
          "Frequent Releases & Automated Rollback",
      },

      {
        sector: "Enterprise",
        title: "Enterprise DevOps Transformation",
        description:
          "Monolith-to-microservices transition supported by a standardised toolchain across business units and migration away from manual release processes.",
        highlight:
          "Microservices Transformation & Release Automation",
      },
    ],
  },
  "infrastructure-management": {
    slug: "infrastructure-management",
    aliasSlugs: ["electric-mobility", "services#digital"],
    eyebrow: "SMART & SUSTAINABLE INFRASTRUCTURE",
    title: "AI Solutions",
    tagline: "AI that solves real business problems — and survives contact with production.",
    heroDescription:
      "Our AI Solutions help organisations identify high-value opportunities, develop practical AI initiatives, and deploy solutions that integrate seamlessly into existing business processes. From intelligent automation and predictive analytics to conversational AI and AI governance, we help organisations adopt AI with clarity, purpose, and control.",
    imagePath: "/images/solutions/Infrastructure management.png",
    imageAlt: "Electric vehicle charging stations and renewable energy infrastructure",
    stats: [
      { value: "1,000+", label: "EV Charge Points Integrated" },
      { value: "100%", label: "Smart Grid Connectivity" },
      { value: "Sub-Second", label: "Automated Power Trip Protection" },
    ],
    capabilitiesTitle: "AI Solutions Capabilities",
    capabilitiesSubtitle:
      "Merging civil engineering, electrical distribution, and IoT telemetry to power sustainable modern ecosystems.",
    capabilities: [
      {
        id: "ai-strategy-use-case-discovery",
        iconName: "LightbulbIcon",
        title: "AI Strategy & Use Case Discovery",
        description:
          "Identify and prioritise AI opportunities aligned with business objectives, operational challenges, and organisational goals.",
        features: [
          "AI opportunity identification",
          "Business use case discovery",
          "AI roadmap development",
          "Adoption planning",
          "AI transformation initiatives",
        ],
      },

      {
        id: "generative-ai-llm",
        iconName: "CpuIcon",
        title: "Generative AI & LLM Applications",
        description:
          "Leverage modern AI models to improve productivity, automate workflows, and enhance information accessibility.",
        features: [
          "Generative AI solutions",
          "Large Language Model (LLM) applications",
          "Knowledge assistants",
          "Content automation",
          "AI-enabled business workflows",
        ],
      },

      {
        id: "intelligent-document-processing",
        iconName: "DocumentIcon",
        title: "Intelligent Document Processing",
        description:
          "Automate the extraction, processing, and management of business information from structured and unstructured documents.",
        features: [
          "Document classification",
          "Data extraction",
          "Information processing",
          "Workflow automation",
          "Document intelligence",
        ],
      },

      {
        id: "predictive-analytics-machine-learning",
        iconName: "ChartIcon",
        title: "Predictive Analytics & Machine Learning",
        description:
          "Use data-driven insights to support forecasting, operational planning, and informed decision-making.",
        features: [
          "Predictive modelling",
          "Machine learning solutions",
          "Trend analysis",
          "Forecasting",
          "Business intelligence enhancement",
        ],
      },

      {
        id: "conversational-ai",
        iconName: "ChatIcon",
        title: "Conversational AI",
        description:
          "Improve interactions through AI-powered conversational experiences that support users, employees, and customers.",
        features: [
          "AI assistants",
          "Conversational interfaces",
          "Automated interactions",
          "Knowledge access",
          "User support experiences",
        ],
      },

      {
        id: "computer-vision",
        iconName: "EyeIcon",
        title: "Computer Vision",
        description:
          "Enable automated analysis and interpretation of visual information using AI technologies.",
        features: [
          "Visual data processing",
          "Image-based analysis",
          "Automated recognition",
          "Pattern identification",
          "Vision-enabled workflows",
        ],
      },

      {
        id: "agentic-automation",
        iconName: "AutomationIcon",
        title: "Agentic Automation",
        description:
          "Support intelligent process execution through AI-driven automation capabilities.",
        features: [
          "Workflow automation",
          "Decision support",
          "Process orchestration",
          "Task automation",
          "Intelligent execution",
        ],
      },

      {
        id: "mlops-ai-governance",
        iconName: "ShieldIcon",
        title: "MLOps & AI Governance",
        description:
          "Establish governance frameworks and operational processes that support responsible and scalable AI adoption.",
        features: [
          "AI governance",
          "Model lifecycle management",
          "Monitoring and oversight",
          "Risk management",
          "Operational AI management",
        ],
      },
    ],
    architectureTitle: "AI Solution Delivery Methodology",
    architectureSubtitle:
      "A battle-tested framework for moving AI from pilot to production — combining data engineering, model selection, RAG, guardrails, MLOps, governance, and user adoption.",
    architectureSteps: [
      {
        number: "01",
        title: "Use-Case Workshops & Prioritisation",
        description:
          "Use-case workshops, prioritisation matrix and business case development.",
      },
      {
        number: "02",
        title: "Data Readiness & Feature Store Setup",
        description:
          "Data readiness assessment, pipeline engineering and feature store setup.",
      },
      {
        number: "03",
        title: "Model Selection & Trade-Off Analysis",
        description:
          "Model selection across commercial and open-weight models, with cost/latency trade-off analysis.",
      },
      {
        number: "04",
        title: "RAG Architecture & Retrieval Evaluation",
        description:
          "RAG architecture — chunking, embeddings, vector stores, retrieval evaluation.",
      },
      {
        number: "05",
        title: "Fine-Tuning & Evaluation Harnesses",
        description:
          "Fine-tuning, prompt engineering and systematic evaluation harnesses.",
      },
      {
        number: "06",
        title: "Core Enterprise API Integration",
        description:
          "Integration with core systems (ERP, CRM, ITSM, data warehouse) via APIs.",
      },
      {
        number: "07",
        title: "AI Safety & Guardrails Enforcement",
        description:
          "Guardrails — input/output filtering, PII handling, grounding and citation enforcement.",
      },
      {
        number: "08",
        title: "Human-in-the-Loop Workflows",
        description:
          "Human-in-the-loop review workflows and confidence-based routing.",
      },
      {
        number: "09",
        title: "MLOps Pipelines & Rollback",
        description:
          "MLOps pipelines for retraining, versioning, A/B testing and rollback.",
      },
      {
        number: "10",
        title: "Accuracy, Drift & Cost Monitoring",
        description:
          "Monitoring for accuracy, drift, hallucination rate, latency and per-transaction cost.",
      },
      {
        number: "11",
        title: "AI Governance & Risk Classification",
        description:
          "AI governance framework — model inventory, risk classification, audit logging, bias testing.",
      },
      {
        number: "12",
        title: "Change Management & User Adoption",
        description:
          "Change management and user adoption support.",
      },
    ],
    useCasesTitle: "Infrastructure Applications",
    useCasesSubtitle: "Enabling clean energy mobility and smart facility management across commercial sectors.",
    useCases: [
      {
        sector: "Commercial Real Estate",
        title: "Corporate EV Charging Hubs",
        description:
          "Installing multi-bay DC fast charging hubs for commercial building tenants and visitor fleets.",
        highlight: "100% Monetized Charging Platform",
      },
      {
        sector: "Fleet & Transit Operators",
        title: "Depot Megawatt Charging Systems",
        description:
          "Designing high-power megawatt charging infrastructure for electric bus depots and heavy delivery fleets.",
        highlight: "Zero Depot Charge Downtime",
      },
      {
        sector: "Utilities & Energy Companies",
        title: "Substation Fiber & Telemetry Mesh",
        description:
          "Deploying optical backhaul connecting remote power substations with central grid dispatch centers.",
        highlight: "Sub-5ms Telemetry Signal Speed",
      },
    ],
  },
  "ai-solutions": {
    slug: "ai-solutions",
    aliasSlugs: ["iot", "services#digital"],
    title: "AI Solutions",
    tagline: "AI that works in production, not just in demos.",
    heroDescription:
      "We help organisations move from AI experiments to systems that run the business. From strategy and data foundations to generative AI assistants, predictive models, and computer vision, we build, deploy, and govern AI that is secure, measurable, and ready for enterprise scale.",
    imagePath: "/images/f9a98921-188e-4b51-acaa-0a60a283fd0e.png",
    imageAlt: "Artificial Intelligence and industrial robotics automation network",
    stats: [
      { value: "10x", label: "Faster Operational Anomaly Detection" },
      { value: "Sub-10ms", label: "Edge AI Inference Latency" },
      { value: "99.2%", label: "Computer Vision Accuracy Rate" },
    ],
    capabilitiesTitle: "AI Capabilities",
    capabilitiesSubtitle:
      "Five connected capabilities that take AI from use\u2011case selection to governed, production\u2011grade operation.",
    capabilities: [
      {
        id: "generative-ai",
        iconName: "SparklesIcon",
        title: "Generative AI & Enterprise Assistants",
        description:
          "Leverage modern AI models, retrieval\u2011augmented generation, and knowledge assistants integrated into core enterprise systems.",
        features: [
          "Large Language Model (LLM) application development",
          "RAG architecture, vector stores, and embeddings",
          "Enterprise knowledge assistants",
          "Prompt design and model fine\u2011tuning",
          "AI\u2011enabled business process workflows",
        ],
      },
      {
        id: "predictive-analytics",
        iconName: "ChartBarIcon",
        title: "Predictive Analytics & Data Engineering",
        description:
          "Build scalable data pipelines and machine learning models that support forecasting and operational decisions.",
        features: [
          "Predictive modelling and forecasting",
          "Machine learning solution development",
          "Cloud data pipelines and feature stores",
          "Anomaly detection",
          "Trend analysis and business intelligence",
        ],
      },
      {
        id: "intelligent-automation",
        iconName: "LightningBoltIcon",
        title: "Intelligent Process Automation",
        description:
          "Automate data\u2011heavy and repetitive work with AI that understands context.",
        features: [
          "Intelligent Document Processing (IDP)",
          "RPA and workflow automation",
          "Multilingual chatbots and virtual agents",
          "AI\u2011assisted customer service",
          "Verification and exception handling",
        ],
      },
      {
        id: "kubernetes-edge",
        iconName: "CubeIcon",
        title: "Kubernetes, Containers & Edge AI",
        description:
          "Modernise workloads using Kubernetes container platforms and edge AI infrastructure for sub\u2011second compute and localized model inference.",
        features: [
          "Kubernetes platform engineering & lifecycle management",
          "Container orchestration & microservices hosting",
          "Computer vision & visual data processing",
          "Edge AI inference & localized model execution",
          "Telco & hybrid cloud container environments",
        ],
      },
      {
        id: "mlops-governance",
        iconName: "CpuIcon",
        title: "MLOps, AI Governance & Cloud FinOps",
        description:
          "Maintain operational stability, continuous retraining, AI safety guardrails, PII protection, and cloud cost optimisation across model and cloud lifecycles.",
        features: [
          "MLOps pipelines for retraining, versioning & A/B testing",
          "AI governance, risk classification & audit logging",
          "Safety guardrails, PII handling & hallucination monitoring",
          "24/7 SLA\u2011backed managed cloud & AI operations",
          "Continuous capacity planning & FinOps cost tuning",
        ],
      },
    ],
    architectureTitle: "AI & Cloud Delivery Methodology",
    architectureSubtitle:
      "A structured delivery framework spanning discovery, model development, infrastructure build, MLOps, governance, and managed operations.",
    architectureSteps: [
      {
        number: "01",
        title: "Use-Case Discovery & AI Readiness",
        description:
          "Workshops to identify high-value AI use cases, data readiness assessment, and solution architecture.",
      },
      {
        number: "02",
        title: "Data Engineering & Feature Stores",
        description:
          "Cloud data pipelines, feature engineering, and data quality frameworks for ML-ready datasets.",
      },
      {
        number: "03",
        title: "Model Development & Training",
        description:
          "ML model development, LLM fine-tuning, RAG architecture, and prompt engineering.",
      },
      {
        number: "04",
        title: "Cloud Landing Zone & Infrastructure",
        description:
          "Hybrid multi-cloud landing zones, Kubernetes platforms, and container orchestration.",
      },
      {
        number: "05",
        title: "Edge AI & Inference Deployment",
        description:
          "Edge compute infrastructure, localized model inference, and computer vision deployment.",
      },
      {
        number: "06",
        title: "MLOps & Continuous Retraining",
        description:
          "MLOps pipelines for versioning, A/B testing, continuous retraining, and model monitoring.",
      },
      {
        number: "07",
        title: "AI Governance & Safety Guardrails",
        description:
          "Risk classification, audit logging, PII handling, hallucination monitoring, and compliance.",
      },
      {
        number: "08",
        title: "Managed Operations & FinOps",
        description:
          "24/7 SLA-backed managed cloud and AI operations, capacity planning, and cost optimisation.",
      },
    ],
    useCasesTitle: "Enterprise Cloud & AI Impact",
    useCasesSubtitle: "Delivering measurable business outcomes across telecom, financial services, manufacturing, logistics, and digital enterprises.",
    useCases: [
      {
        sector: "Telecom",
        title: "Telco Cloud Infrastructure & AI Telemetry Analytics",
        description:
          "OSS/BSS telco cloud hosting, NFV infrastructure, and AI\u2011driven predictive telemetry for real\u2011time network anomaly detection and capacity forecasting.",
        highlight: "Telco Cloud & AI Telemetry",
      },
      {
        sector: "BFSI",
        title: "Regulated Hybrid Cloud & Financial Document Intelligence",
        description:
          "Regulator\u2011ready compliant private cloud, disaster recovery landing zones, and intelligent document processing (IDP) for automated loan onboarding and audit trails.",
        highlight: "Financial Document Intelligence",
      },
      {
        sector: "Manufacturing",
        title: "Plant Cloud Edge & Computer Vision Inspection",
        description:
          "Plant\u2011to\u2011cloud data pipelines, edge compute infrastructure, and computer vision models for automated quality control and predictive maintenance.",
        highlight: "Edge Vision & Predictive Maintenance",
      },
      {
        sector: "Logistics",
        title: "Scalable Cloud Architecture & Predictive Route AI",
        description:
          "Multi\u2011cloud infrastructure supporting high\u2011consequence tracking platforms with predictive AI for dynamic route optimisation and demand forecasting.",
        highlight: "Predictive Routing & Cloud Scale",
      },
      {
        sector: "Enterprise",
        title: "Multi\u2011Cloud Modernisation & Enterprise Generative AI",
        description:
          "Legacy data centre to cloud migration, hybrid multi\u2011cloud governance, and enterprise\u2011wide generative AI knowledge assistants with MLOps oversight.",
        highlight: "Enterprise Generative AI",
      },
    ],
  },
  "application-engineering-devsecops": {
    slug: "application-engineering-devsecops",
    aliasSlugs: ["resource-management", "ai-solutions", "managed", "services#app-engineering"],
    title: "Application Development Management",
    tagline: "From first requirement to every release after.",
    heroDescription:
      "We manage applications across their entire lifecycle, from requirements and design through development, testing, release, and long-term support. With one accountable partner at every stage, organisations keep delivery predictable, quality high, and applications aligned to changing business needs.",
    imagePath: "",
    imageAlt: "Application engineering, cloud native development, continuous delivery and DevSecOps operations",
    stats: [
      { value: "4x Faster", label: "Release Velocity" },
      { value: "99.99%", label: "Application Uptime SLA" },
      { value: "35%", label: "TCO Cost Reduction" },
    ],
    capabilitiesTitle: "Core Capabilities",
    capabilitiesSubtitle:
      "Four connected capability pillars that take software from concept to continuous operation.",
    capabilities: [
      {
        id: "custom-app-dev",
        iconName: "LightbulbIcon",
        title: "Custom Application & Product Development",
        description:
          "Design, develop, and evolve applications and digital products tailored to business and user needs.",
        features: [
          "Enterprise application development",
          "Web & mobile application development",
          "Product and SaaS development ",
          "Workflow and business process applications ",
          "Feature enhancement & continuous improvement",
        ],
      },
      {
        id: "app-modernisation",
        iconName: "CloudIcon",
        title: "Application Modernisation & Cloud-Native Development",
        description:
          "Modernise existing applications and build scalable architectures designed for cloud and container environments.",
        features: [
          "Legacy application modernisation",
          "Platform & technology upgrades",
          "Microservices & modular architecture",
          "Cloud-native application development",
          "Application optimisation & scalability",
        ],
      },
      {
        id: "api-integration",
        iconName: "NetworkIcon",
        title: "API & Integration Development",
        description:
          "Connect applications, platforms and business systems for seamless communication and data exchange.",
        features: [
          "API development and management ",
          "Enterprise system integration",
          "Data integration and migration ",
          "Legacy and modern platform connectivity",
          "Third-party & partner integration",
        ],
      },


      {
        id: "app-managed-services",
        iconName: "UsersIcon",
        title: "Application Managed Services",
        description:
          "Maintain application stability and continuously improve operational performance throughout the application lifecycle.",
        features: [
          "Application support & maintenance",
          "Incident and problem management ",
          "Performance monitoring and tuning ",
          "Enhancement and change requests ",
          "Application portfolio review and continuous improvement ",
        ],
      },
    ],
    architectureTitle: "",
    architectureSubtitle:
      "",
    architectureSteps: [
    ],
    useCasesTitle: "Enterprise Engineering Outcomes",
    useCasesSubtitle: "Delivering measurable business impact across application development, security, and continuous operations.",
    useCases: [
      {
        sector: "Telecom",
        title: "Self-Care Apps, OSS/BSS Modernisation & Network Function Automation",
        description: "High-scale customer self-care platforms, dealer portals, OSS/BSS component modernisation, and automated CI/CD release pipelines for microservices and network functions.",
        highlight: "Mobile Apps, OSS/BSS Modernisation & Automated Delivery",
      },
      {
        sector: "BFSI",
        title: "Customer Onboarding, Open-Banking APIs & Auditable Releases",
        description: "Digital customer onboarding journeys, open-banking API integration, loan origination platforms, and DevSecOps pipelines with auditable release trails and regulated change management.",
        highlight: "Digital Onboarding, Open-Banking APIs & Auditable Delivery",
      },
      {
        sector: "Manufacturing",
        title: "Production Tracking, Industrial MES/IIoT & Edge Rollouts",
        description: "Real-time production tracking, supplier portals, MES and IIoT application development, and automated software rollouts across distributed edge environments.",
        highlight: "Production Tracking, IIoT & Controlled Edge Deployments",
      },
      {
        sector: "Logistics",
        title: "Fleet Management, Booking Portals & Peak Release Engineering",
        description: "Real-time fleet and shipment tracking apps, warehouse management portals, and automated CI/CD with instant rollback capabilities to handle peak-season traffic spikes safely.",
        highlight: "Fleet Tracking, Customer Portals & Automated Rollback",
      },
      {
        sector: "Enterprise",
        title: "Monolith-to-Microservices Modernisation & Continuous Operations",
        description: "Legacy and mainframe modernisation, application portfolio rationalisation, internal workflow platforms, and 24/7 SLA-backed managed support with continuous observability.",
        highlight: "Monolith Modernisation, Managed Services & 99.99% SLA",
      },
    ],
  },
  "cloud-ai-solutions": {
    slug: "cloud-ai-solutions",
    aliasSlugs: ["data-centre-cloud", "infrastructure-management", "cloud-engineering", "services#cloud", "services#ai"],
    title: "Cloud-Native Applications",
    tagline: "Applications built for the cloud, not just moved to it",
    heroDescription:
      "We design and build applications that take full advantage of the cloud, and modernise legacy systems to join them. Using microservices, APIs, and managed cloud services, we help organisations deliver scalable, resilient applications that are easier to change and cheaper to run.",
    imagePath: "",
    imageAlt: "Enterprise cloud infrastructure, hybrid multi-cloud architecture, and artificial intelligence network",
    stats: [
      { value: "99.99%", label: "Cloud SLA Uptime" },
      { value: "Sub-10ms", label: "Edge & AI Inference Latency" },
      { value: "35%", label: "Cloud & AI FinOps Optimisation" },
    ],
    capabilitiesTitle: "Integrated Cloud & AI Engineering Capabilities",
    capabilitiesSubtitle:
      "Five connected capability pillars combining scalable cloud foundations with production-grade artificial intelligence.",
    capabilities: [

      {
        id: "predictive-analytics-data-engineering",
        iconName: "ChartIcon",
        title: " SaaS & Platform Development",
        description:
          "Design and build multi-tenant products and platforms that grow with your customers.",
        features: [
          "SaaS product development ",
          "Multi-tenant architecture ",
          "Subscription, billing, and user management ",
          "Customer and partner portals",
          "Product upgrades and ongoing ",
        ],
      },


      {
        id: "mlops-ai-governance-finops",
        iconName: "ShieldIcon",
        title: "MLOps, AI Governance & Cloud FinOps",
        description:
          "Maintain operational stability, continuous retraining, AI safety guardrails, PII protection, and cloud cost optimization across model and cloud lifecycles.",
        features: [
          "MLOps pipelines for retraining, versioning & A/B testing",
          "AI governance, risk classification & audit logging",
          "Safety guardrails, PII handling & hallucination monitoring",
          "24/7 SLA-backed managed cloud & AI operations",
          "Continuous capacity planning & FinOps cost tuning",
        ],
      },


    ],
    architectureTitle: "",
    architectureSubtitle:
      "",
    architectureSteps: [
    ],
    useCasesTitle: "Enterprise Cloud & AI Impact",
    useCasesSubtitle: "Delivering measurable business outcomes across telecom, financial services, manufacturing, logistics, and digital enterprises.",
    useCases: [
      {
        sector: "Telecom",
        title: "Telco Cloud Infrastructure & AI Telemetry Analytics",
        description: "OSS/BSS telco cloud hosting, NFV infrastructure, and AI-driven predictive telemetry for real-time network anomaly detection and capacity forecasting.",
        highlight: "Telco Cloud & AI Telemetry Analytics",
      },
      {
        sector: "BFSI",
        title: "Regulated Hybrid Cloud & Financial Document Intelligence",
        description: "Regulator-ready compliant private cloud, disaster recovery landing zones, and intelligent document processing (IDP) for automated loan onboarding and audit trails.",
        highlight: "Regulated Hybrid Cloud & Document AI",
      },
      {
        sector: "Manufacturing",
        title: "Plant Cloud Edge & Computer Vision Inspection",
        description: "Plant-to-cloud data pipelines, edge compute infrastructure, and computer vision models for automated quality control and predictive maintenance.",
        highlight: "Cloud Edge & Visual Quality Control",
      },
      {
        sector: "Logistics",
        title: "Scalable Cloud Architecture & Predictive Route AI",
        description: "Multi-cloud infrastructure supporting high-consequence tracking platforms with predictive AI for dynamic route optimization and demand forecasting.",
        highlight: "Multi-Cloud & Route Optimization AI",
      },
      {
        sector: "Enterprise",
        title: "Multi-Cloud Modernisation & Enterprise Generative AI",
        description: "Legacy data center to cloud migration, hybrid multi-cloud governance, and enterprise-wide generative AI knowledge assistants with MLOps oversight.",
        highlight: "Multi-Cloud Modernisation & Enterprise GenAI",
      },
    ],
  },
  "cloud-infrastructure": {
    slug: "cloud-infrastructure",
    aliasSlugs: [
      "datacenter",
      "services#datacenter",
      "services#cloud",
      "infrastructure-management",
      "cloud-engineering",
    ],
    title: "Cloud Infrastructure",
    tagline: "Cloud foundations that scale, from the rack to the region.",
    heroDescription:
      "We architect hybrid multi-cloud foundations and deploy production-grade AI that transform enterprise operations. By combining cloud landing zones, container orchestration, and continuous observability with generative AI, predictive ML models, and MLOps governance, we help organisations build scalable, secure, and intelligent enterprise environments.",
    imagePath: "/images/c1af6544-69b4-41ac-a09c-eb0d1766dc09.png",
    imageAlt: "Enterprise cloud infrastructure, modern data center, and hybrid multi-cloud architecture",
    stats: [
      { value: "99.99%", label: "Cloud SLA Availability" },
      { value: "Hybrid", label: "Multi-Cloud Readiness" },
      { value: "Enterprise", label: "AI & MLOps Governance" },
    ],
    capabilitiesTitle: "Cloud Infrastructure Capabilities",
    capabilitiesSubtitle:
      "Three connected capability pillars combining scalable cloud foundations with production-grade artificial intelligence.",
    capabilities: [
      {
        id: "cloud-strategy-readiness-migration",
        iconName: "CloudIcon",
        title: "Cloud Strategy, Readiness & Migration",
        description:
          "Assess your estate, plan the move, and migrate workloads to the cloud with minimal disruption.",
        features: [
          "Cloud readiness assessments & landing zones",
          "Workload rehosting, replatforming & migration",
          "Application and dependency mapping",
          "Migration waves and cutover planning",
          "Post-migration stabilisation",
        ],
      },
      {
        id: "private-cloud-virtualisation-hci",
        iconName: "DataCenterIcon",
        title: "Private Cloud, Virtualisation & HCI",
        description:
          "Build flexible on-premises and private cloud platforms that give you cloud agility with full control.",
        features: [
          "Private cloud design and build",
          "Server and storage virtualisation",
          "Hyper-converged infrastructure",
          "Compute and storage architecture",
          "Capacity planning and lifecycle refresh",
        ],
      },
      {
        id: "backup-dr-business-continuity",
        iconName: "ShieldIcon",
        title: "Backup, Disaster Recovery & Business Continuity",
        description:
          "Protect data and keep the business running through outages, failures, and cyber incidents.",
        features: [
          "Backup and recovery solutions",
          "Disaster recovery design and testing",
          "Data replication",
          "Cloud-based DR landing zones",
          "Business continuity planning",
        ],
      },


    ],
    architectureTitle: "Cloud Infrastructure Delivery Framework",
    architectureSubtitle:
      "A structured approach to designing, building, migrating, and governing scalable cloud foundations and production AI.",
    architectureSteps: [
      {
        number: "01",
        title: "Discover & Assess",
        description:
          "Audit existing estate, map dependencies, assess cloud readiness, and establish workload migration priorities.",
      },
      {
        number: "02",
        title: "Architect & Land",
        description:
          "Design enterprise landing zones, private cloud HCI, multi-cloud connectivity, and security guardrails.",
      },
      {
        number: "03",
        title: "Migrate & Modernise",
        description:
          "Execute wave-based workload migrations, deploy container platforms, and establish automated DR replication.",
      },
      {
        number: "04",
        title: "Operate & Govern",
        description:
          "Deliver continuous observability, FinOps cost governance, MLOps model lifecycle monitoring, and 24/7 SLA operations.",
      },
    ],
    useCasesTitle: "Enterprise Cloud & AI Impact",
    useCasesSubtitle:
      "Delivering measurable business outcomes across telecom, financial services, manufacturing, logistics, and digital enterprises.",
    useCases: [
      {
        sector: "TELECOM",
        title: "Telco Cloud Infrastructure & AI Telemetry Analytics",
        description:
          "OSS/BSS telco cloud hosting, NFV infrastructure, and AI-driven predictive telemetry for real-time network anomaly detection and capacity forecasting.",
        highlight: "Telco Cloud & AI Telemetry Analytics",
      },
      {
        sector: "BFSI",
        title: "Regulated Hybrid Cloud & Financial Document Intelligence",
        description:
          "Regulator-ready compliant private cloud, disaster recovery landing zones, and intelligent document processing (IDP) for automated loan onboarding and audit trails.",
        highlight: "Regulated Hybrid Cloud & Document AI",
      },
      {
        sector: "MANUFACTURING",
        title: "Plant Cloud Edge & Computer Vision Inspection",
        description:
          "Plant-to-cloud data pipelines, edge compute infrastructure, and computer vision models for automated quality control and predictive maintenance.",
        highlight: "Cloud Edge & Visual Quality Control",
      },
      {
        sector: "LOGISTICS",
        title: "Scalable Cloud Architecture & Predictive Route AI",
        description:
          "Multi-cloud infrastructure supporting high-consequence tracking platforms with predictive AI for dynamic route optimization and demand forecasting.",
        highlight: "Multi-Cloud & Route Optimization AI",
      },
      {
        sector: "ENTERPRISE",
        title: "Multi-Cloud Modernisation & Enterprise Generative AI",
        description:
          "Legacy data center to cloud migration, hybrid multi-cloud governance, and enterprise-wide generative AI knowledge assistants with MLOps oversight.",
        highlight: "Multi-Cloud Modernisation & Enterprise GenAI",
      },
    ],
  },
  devops: {
    slug: "devops",
    aliasSlugs: [
      "services#devops",
      "application-engineering-devsecops#devops",
    ],
    title: "DevOps",
    tagline: " Ship faster. Release safely. Operate with confidence",
    heroDescription:
      " We automate how software is built, tested, released, and run. By combining CI/CD pipelines, infrastructure as code, container platforms, and built-in security and observability, we help teams deliver more often, with fewer surprises and faster recovery when things go wrong.",
    imagePath: "/images/2299a8df-7127-4e9c-b8d6-51268d289cbb.png",
    imageAlt: "CI/CD pipelines, DevOps engineering, and container platforms",
    stats: [
      { value: "4x Faster", label: "Release Velocity" },
      { value: "99.99%", label: "Deployment Reliability" },
      { value: "Zero-Downtime", label: "Continuous Delivery" },
    ],
    capabilitiesTitle: "Core Capabilities",
    capabilitiesSubtitle:
      "Four connected capability pillars that take software from concept to continuous operation.",
    capabilities: [
      {
        id: "cicd-release-automation",
        iconName: "BoltIcon",
        title: "CI/CD & Release Automation",
        description:
          "Automate software delivery and release processes to improve speed, consistency, quality and reliability.",
        features: [
          "Continuous Integration & Delivery",
          "Automated build & deployment pipelines",
          "Release orchestration & automation",
          "Environment management",
          "Change management",
        ],
      },
      {
        id: "infra-automation-containers",
        iconName: "DataCenterIcon",
        title: "Infrastructure Automation & Container Platforms",
        description:
          "Automate infrastructure and application environments using modern platform and container technologies.",
        features: [
          "Infrastructure as Code (IaC)",
          "GitOps & automated provisioning",
          "Configuration management",
          "Containerisation & Kubernetes",
          "Container & platform operations",
        ],
      },
      {
        id: "security-compliance-governance",
        iconName: "ShieldIcon",
        title: "Security, Compliance & Governance",
        description:
          "Embed security and compliance checks into the pipeline, so issues are caught before release, not after.",
        features: [
          "Automated security scanning in pipelines",
          "Container and dependency scanning",
          "Secrets management",
          "Compliance checks and audit trails",
          "Vulnerability management workflows",
        ],
      },
      {
        id: "qa-observability-sre",
        iconName: "ChartIcon",
        title: "Quality Assurance, Observability & SRE",
        description:
          "Improve application quality, performance and resilience through testing, monitoring and site reliability practices.",
        features: [
          "Functional testing & quality assurance",
          "Test automation",
          "Application & service monitoring",
          "Observability & performance measurement",
          "Site reliability & operational visibility",
        ],
      },
    ],
    architectureTitle: "DevOps Engineering Delivery Framework",
    architectureSubtitle:
      "A structured continuous delivery lifecycle designed for rapid release cadence, automated verification, and resilient operations.",
    architectureSteps: [
      {
        number: "01",
        title: "Code & Build Automation",
        description:
          "Automated source control integration, unit testing, dependency scanning, and immutable artifact compilation.",
      },
      {
        number: "02",
        title: "Continuous Testing & Security",
        description:
          "Automated security scanning (SAST/DAST), container vulnerability auditing, compliance validation, and test automation.",
      },
      {
        number: "03",
        title: "GitOps & Deployment",
        description:
          "GitOps deployment to staging and production with blue/green rollouts, canary releases, and automated rollback.",
      },
      {
        number: "04",
        title: "Observability & SRE Operations",
        description:
          "Full-stack observability, automated incident alert routing, SLI/SLO tracking, and 24/7 site reliability engineering.",
      },
    ],
    useCasesTitle: "Enterprise Engineering Outcomes",
    useCasesSubtitle:
      "Delivering measurable business impact across application development, security, and continuous operations.",
    useCases: [
      {
        sector: "TELECOM",
        title: "Self-Care Apps, OSS/BSS Modernisation & Network Function Automation",
        description:
          "Scale customer self-care platforms, dealer portals, OSS/BSS component modernisation, and automated CI/CD release pipelines for microservices and network functions.",
        highlight: "OSS/BSS Modernisation & CI/CD",
      },
      {
        sector: "BFSI",
        title: "Customer Onboarding, Open-Banking APIs & Auditable Releases",
        description:
          "Digital customer onboarding journeys, open-banking API integration, loan origination platforms, and DevSecOps pipelines with auditable release trails and regulated change management.",
        highlight: "Open-Banking APIs & DevSecOps",
      },
      {
        sector: "MANUFACTURING",
        title: "Production Tracking, Industrial MES/IIoT & Edge Rollouts",
        description:
          "Real-time production tracking, supplier portals, MES and IIoT application development, and automated software rollouts across distributed edge environments.",
        highlight: "MES/IIoT & Edge Rollouts",
      },
      {
        sector: "LOGISTICS",
        title: "Fleet Management, Booking Portals & Peak Release Engineering",
        description:
          "Real-time fleet and shipment tracking apps, warehouse management portals, and automated CI/CD with instant rollback capabilities to handle peak-season traffic spikes safely.",
        highlight: "Fleet Portals & Peak Engineering",
      },
      {
        sector: "ENTERPRISE",
        title: "Monolith-to-Microservices Modernisation & Continuous Operations",
        description:
          "Legacy and mainframe modernisation, application portfolio rationalisation, internal workflow platforms, and 24/7 SLA-backed managed support with continuous observability.",
        highlight: "Microservices & 24/7 SRE",
      },
    ],
  },
};

export default individualSolutionsData;

