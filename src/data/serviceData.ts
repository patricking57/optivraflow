// Service Item Type (for listing page)
export interface ServiceItem {
  icon: string;
  title: string;
  slug: string;
  description: string;
  gradient: string;
  bgColor: string;
  lineColor: string;
  mt?: string;
}

// Service Detail Type (for detail page)
export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  heroDescription: string;
  stats: Stat[];
  processSteps: ProcessStep[];
}

// Services for listing page
export const services: ServiceItem[] = [
  {
    icon: "/assets/images/website-optimization.svg",
    title: "Custom Web & SaaS Development",
    slug: "custom-web-app-development",
    description:
      "Design and build modern web apps, internal tools, and SaaS products using React, Next.js, TypeScript, and cloud‑native backends—like dashboards, marketplaces, and live streaming platforms.",
    gradient: "green",
    bgColor: "bg-green/20",
    lineColor: "bg-green",
  },
  {
    icon: "/assets/images/paid-media.svg",
    title: "AI Products & Intelligent Features",
    slug: "ai-product-engineering",
    description:
      "Ship practical AI features like meeting assistants, voice and text agents, search, recommendations, and copilots for real products in healthcare, productivity, and marketplaces.",
    gradient: "purple",
    bgColor: "bg-purple/20",
    lineColor: "bg-purple",
    mt: "md:mt-10",
  },
  {
    icon: "/assets/images/email-sms-marketing.svg",
    title: "Healthcare Platforms",
    slug: "healthcare-platforms",
    description:
      "Patient portals, clinician dashboards, and AI‑powered communication tools built around security, interoperability, and real clinical workflows.",
    gradient: "red",
    bgColor: "bg-red/20",
    lineColor: "bg-red",
    mt: "md:-mt-10 lg:mt-20",
  },
  {
    icon: "/assets/images/funnel-optimization.svg",
    title: "Fintech & Payment Solutions",
    slug: "fintech-solutions",
    description:
      "Payment flows, risk and underwriting tools, and analytics experiences focused on reliability, auditability, and regulatory alignment.",
    gradient: "pink",
    bgColor: "bg-pink/20",
    lineColor: "bg-pink",
    mt: "md:mt-0 lg:-mt-20",
  },
  {
    icon: "/assets/images/advanced-analytics.svg",
    title: "Cloud, DevOps & Automation",
    slug: "cloud-devops-automation",
    description:
      "Cloud infrastructure, CI/CD, and workflow automation (n8n, Make, Zapier, custom APIs) that power integrations like Slack→Airtable, streaming pipelines, and background processing.",
    gradient: "yellow",
    bgColor: "bg-yellow/20",
    lineColor: "bg-yellow",
    mt: "md:-mt-10",
  },
  {
    icon: "/assets/images/chart-marketing.svg",
    title: "VOIP & Communications",
    slug: "voip-integrations",
    description:
      "Cloud VOIP, call routing, and real‑time communication integrated into products, contact centers, and healthcare operations—like Ringfree and Vocca‑style platforms.",
    gradient: "blue",
    bgColor: "bg-blue/20",
    lineColor: "bg-blue",
  },
];

// Services for detail page
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "custom-web-app-development",
    title: "Custom Web & SaaS Development",
    description:
      "End‑to‑end product development with React, Next.js, TypeScript, and cloud‑native backends deployed to AWS, GCP, or Azure for products like marketplaces, dashboards, and live video platforms.",
    heroImage: "/assets/images/social-media-market.png",
    heroDescription:
      "We design and build secure, cloud‑native web applications, internal tools, and SaaS platforms—from analytics dashboards to streaming apps and POS systems—that reflect your users, your domain, and your growth plans.",
    stats: [
      { value: "18+", label: "Web & SaaS products shipped" },
      { value: "10+", label: "Years building web apps" },
    ],
    processSteps: [
      {
        icon: "/assets/images/social-content-icon.svg",
        title: "Product & Architecture Design",
        description:
          "We translate your business goals into user journeys, APIs, and a technical architecture that can evolve safely as your product grows.",
      },
      {
        icon: "/assets/images/publish-execution-icon.svg",
        title: "Implementation & Testing",
        description:
          "We ship features in iterations with code reviews, automated testing, and regular demos so stakeholders can see progress early.",
      },
      {
        icon: "/assets/images/measure-scale.svg",
        title: "Launch & Scale",
        description:
          "We deploy to your preferred cloud, add observability, and keep tuning performance, reliability, and UX based on real usage.",
      },
    ],
  },
  {
    slug: "ai-product-engineering",
    title: "AI Products & Intelligent Features",
    description:
      "Design and ship AI‑powered meeting assistants, voice and text agents, search, recommendations, copilots, and workflow assistants that plug into your existing products and data.",
    heroImage: "/assets/images/social-media-market.png",
    heroDescription:
      "We bring AI into existing products and new experiences—like AI note‑takers, healthcare voice agents, calorie trackers, and marketplaces—with a focus on safety, observability, and clear business impact, not just demos.",
    stats: [
      { value: "10+", label: "AI features launched" },
      { value: "6+", label: "Industries served" },
    ],
    processSteps: [
      {
        icon: "/assets/images/social-content-icon.svg",
        title: "Use‑Case & Data Discovery",
        description:
          "We identify high‑value AI opportunities, map data sources, and define success metrics, guardrails, and failure modes upfront.",
      },
      {
        icon: "/assets/images/publish-execution-icon.svg",
        title: "Prototype & Integrate",
        description:
          "We prototype copilots, search, or recommendations, then integrate them into your product with proper fallbacks, logging, and monitoring.",
      },
      {
        icon: "/assets/images/measure-scale.svg",
        title: "Evaluate & Evolve",
        description:
          "We monitor quality, collect feedback, and continuously refine prompts, models, and UX as adoption grows.",
      },
    ],
  },
  {
    slug: "healthcare-platforms",
    title: "Healthcare Platforms",
    description:
      "Patient portals, clinician dashboards, and AI‑powered communication platforms that respect privacy, interoperability, and day‑to‑day clinical workflows.",
    heroImage: "/assets/images/social-media-market.png",
    heroDescription:
      "We build digital health experiences—from patient portals to voice and text AI agents like Vocca—that fit real clinical workflows while meeting privacy and regulatory requirements.",
    stats: [
      { value: "6+", label: "Healthcare & healthtech projects" },
      { value: "99.9%", label: "Target uptime" },
    ],
    processSteps: [
      {
        icon: "/assets/images/social-content-icon.svg",
        title: "Workflow & Compliance Alignment",
        description:
          "We collaborate with clinical and operations teams to map real workflows, roles, and data‑access patterns before we write code.",
      },
      {
        icon: "/assets/images/publish-execution-icon.svg",
        title: "Experience & Integration",
        description:
          "We design accessible UIs, implement secure APIs, and integrate with existing systems using modern interoperability standards.",
      },
      {
        icon: "/assets/images/measure-scale.svg",
        title: "Monitor & Improve",
        description:
          "We add observability, audit trails, and analytics so you can continuously improve performance, reliability, and patient satisfaction.",
      },
    ],
  },
  {
    slug: "fintech-solutions",
    title: "Fintech & Payment Solutions",
    description:
      "Payment flows, risk and underwriting tools, and analytics platforms engineered for reliability, compliance, and clear audit trails for modern fintech products.",
    heroImage: "/assets/images/social-media-market.png",
    heroDescription:
      "We help you design and implement payment, lending, and analytics systems that balance speed with safety, compliance, and operational clarity for mobile and web‑based financial experiences.",
    stats: [
      { value: "8+", label: "Fintech & payments engagements" },
      { value: "0", label: "Critical data incidents" },
    ],
    processSteps: [
      {
        icon: "/assets/images/social-content-icon.svg",
        title: "Domain & Risk Modeling",
        description:
          "We define clear data models, risk workflows, and audit requirements for your core financial operations.",
      },
      {
        icon: "/assets/images/publish-execution-icon.svg",
        title: "System Design & Build",
        description:
          "We implement idempotent money‑moving operations, traceable event flows, and robust APIs for internal and external use.",
      },
      {
        icon: "/assets/images/measure-scale.svg",
        title: "Operate & Scale Safely",
        description:
          "We equip your teams with tooling to investigate issues quickly and evolve the platform without compromising stability.",
      },
    ],
  },
  {
    slug: "cloud-devops-automation",
    title: "Cloud, DevOps & Automation",
    description:
      "Cloud infrastructure, CI/CD, and workflow automation with n8n, Make, Zapier, and custom APIs to connect tools and services like Slack, Airtable, social platforms, and internal systems.",
    heroImage: "/assets/images/social-media-market.png",
    heroDescription:
      "We modernize your infrastructure, automate delivery, and connect your tools so teams can ship faster—with workflows like Slack→Airtable→social posting, streaming pipelines, and background jobs running reliably without late‑night pages.",
    stats: [
      { value: "15+", label: "Pipelines and workflows delivered" },
      { value: "3", label: "Major clouds (AWS/GCP/Azure)" },
    ],
    processSteps: [
      {
        icon: "/assets/images/social-content-icon.svg",
        title: "Assess & Plan",
        description:
          "We review your current environments, release processes, and tooling to design a pragmatic modernization roadmap.",
      },
      {
        icon: "/assets/images/publish-execution-icon.svg",
        title: "Implement & Automate",
        description:
          "We set up infrastructure‑as‑code, CI/CD, and workflow automation with platforms like n8n, Make, and Zapier plus custom services.",
      },
      {
        icon: "/assets/images/measure-scale.svg",
        title: "Enable & Optimize",
        description:
          "We train your teams, tune performance and cost, and keep your environments observable and resilient.",
      },
    ],
  },
  {
    slug: "voip-integrations",
    title: "VOIP & Communications",
    description:
      "Integrate VOIP, call routing, and real‑time communication into your products and operations, from support teams to clinical settings, using the same patterns behind Ringfree and Vocca‑style platforms.",
    heroImage: "/assets/images/social-media-market.png",
    heroDescription:
      "We bring reliable, instrumented communication experiences into your products and operations through modern VOIP integrations and real‑time infrastructure similar to Ringfree and Vocca, covering voice, messaging, and AI‑assisted interactions.",
    stats: [
      { value: "5+", label: "VOIP & comms rollouts" },
      { value: "3x", label: "Faster response time" },
    ],
    processSteps: [
      {
        icon: "/assets/images/social-content-icon.svg",
        title: "Requirements & Provider Selection",
        description:
          "We work with your teams to define use cases, SLAs, and choose the right VOIP providers and architecture.",
      },
      {
        icon: "/assets/images/publish-execution-icon.svg",
        title: "Integration & Experience",
        description:
          "We integrate VOIP, messaging, and call routing into your existing systems with clear UX and operational tooling.",
      },
      {
        icon: "/assets/images/measure-scale.svg",
        title: "Monitor & Iterate",
        description:
          "We add monitoring, quality tracking, and analytics so you can continuously improve communication performance and workflows.",
      },
    ],
  },
];
