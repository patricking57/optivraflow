export interface BlogContentItem {
  type: "paragraph" | "list" | "numberedList" | "heading";
  text?: string;
  items?: string[];
  level?: number;
}

export interface BlogPost {
  id: number;
  slug: string;
  date: string;
  lastUpdated: string;
  title: string;
  excerpt: string;
  content: BlogContentItem[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "what-is-distributed-computing",
    date: "January 6, 2026",
    lastUpdated: "January 6, 2026",
    title: "What Is Distributed Computing?",
    excerpt:
      "A plain-language explanation of distributed computing, how it differs from a single data center, and why geography matters for compute access.",
    content: [
      {
        type: "paragraph",
        text: "Distributed computing refers to computing resources that are physically spread across multiple locations rather than concentrated in a single facility, but made available to users as if they were one coordinated system.",
      },
      {
        type: "paragraph",
        text: "Instead of building or leasing space in one large data center, a distributed network places company-owned hardware in many smaller, geographically dispersed locations. Each location contributes compute capacity to the overall network, which is centrally monitored and managed.",
      },
      { type: "heading", text: "Why geography matters", level: 2 },
      {
        type: "paragraph",
        text: "Concentrating all compute in one region creates a single point of failure, adds latency for users far from that region, and requires significant upfront capital to build. A distributed footprint spreads that risk and can bring compute physically closer to where it's needed.",
      },
      { type: "heading", text: "How it differs from cloud computing", level: 2 },
      {
        type: "paragraph",
        text: "Public cloud providers also operate distributed infrastructure, but typically within their own large regional data centers. A distributed managed-compute network extends that idea further, using smaller, individually hosted locations that are professionally configured and remotely managed by a dedicated technical team.",
      },
    ],
  },
  {
    id: 2,
    slug: "what-is-edge-computing",
    date: "January 6, 2026",
    lastUpdated: "January 6, 2026",
    title: "What Is Edge Computing?",
    excerpt:
      "Edge computing moves processing closer to where data is generated or used. Here's what that means in practice and how it relates to distributed infrastructure.",
    content: [
      {
        type: "paragraph",
        text: "Edge computing is the practice of running workloads on infrastructure located closer to the end user or data source, rather than in a single, centralized location. The goal is typically lower latency, reduced bandwidth costs, or the ability to process data locally before sending it elsewhere.",
      },
      { type: "heading", text: "Edge computing vs. distributed infrastructure", level: 2 },
      {
        type: "paragraph",
        text: "A distributed managed-compute network is a practical way to deliver edge-style benefits: because hardware is placed across many locations rather than one central facility, workloads can run on infrastructure that is geographically closer to where it's needed.",
      },
      {
        type: "list",
        items: [
          "Lower latency for geographically distributed teams and users",
          "Reduced reliance on a single facility or region",
          "Flexibility to place compute near specific markets or teams",
        ],
      },
      {
        type: "paragraph",
        text: "Edge and distributed computing are related but not identical concepts. Edge computing is about where processing happens; distributed infrastructure is about how the underlying hardware network is built and managed. Together, they describe an approach to compute that doesn't depend on a single physical location.",
      },
    ],
  },
  {
    id: 3,
    slug: "how-remote-workstations-work",
    date: "January 6, 2026",
    lastUpdated: "January 6, 2026",
    title: "How Remote Workstations Work",
    excerpt:
      "A look at how a physical machine in one location can be securely operated by a user anywhere else, and what makes that connection reliable.",
    content: [
      {
        type: "paragraph",
        text: "A remote workstation is a physical computer that a user operates over the internet instead of sitting in front of. The machine itself lives in a managed facility or, in a distributed network, at an approved Infrastructure Host location — while the user interacts with it through a secure remote access connection.",
      },
      { type: "heading", text: "The basic components", level: 2 },
      {
        type: "list",
        items: [
          "Physical hardware, owned and configured by the provider",
          "A secure remote access layer connecting the authorized user to the machine",
          "Monitoring and management tools operated by the provider's technical team",
          "Network connectivity provided at the hosting location",
        ],
      },
      {
        type: "paragraph",
        text: "From the user's perspective, a well-configured remote workstation should feel similar to using a local machine: applications open, files save, and performance depends on the assigned hardware rather than the user's own device.",
      },
      { type: "heading", text: "Where the machine actually lives", level: 2 },
      {
        type: "paragraph",
        text: "In a distributed network, that physical machine is located within the provider's infrastructure network — hosted at a secure, approved location — while access, monitoring, and support are handled centrally by the provider's technical team.",
      },
    ],
  },
  {
    id: 4,
    slug: "gpu-computing-explained",
    date: "January 6, 2026",
    lastUpdated: "January 6, 2026",
    title: "GPU Computing Explained",
    excerpt:
      "Why AI and rendering workloads rely on GPUs instead of standard CPUs, and what to consider when evaluating managed GPU infrastructure.",
    content: [
      {
        type: "paragraph",
        text: "A GPU (graphics processing unit) is designed to run many calculations in parallel, which makes it well suited to workloads like AI model training, inference, video rendering, and scientific computing — tasks that involve repeating the same kind of operation across large amounts of data.",
      },
      { type: "heading", text: "Common GPU workloads", level: 2 },
      {
        type: "list",
        items: [
          "Training and fine-tuning machine learning models",
          "Running inference for AI applications",
          "3D rendering and animation",
          "Computer vision and image processing",
          "Data science and large-scale numerical computation",
        ],
      },
      { type: "heading", text: "Managed vs. self-hosted GPU infrastructure", level: 2 },
      {
        type: "paragraph",
        text: "Building an in-house GPU facility requires significant upfront capital, ongoing maintenance, and cooling and power infrastructure. Managed GPU infrastructure lets teams access GPU-equipped systems without owning or maintaining that hardware themselves, with configuration and monitoring handled by the provider.",
      },
      {
        type: "paragraph",
        text: "Available GPU configurations depend on current inventory and workload requirements, so it's worth confirming specifics with a provider before committing to a project timeline.",
      },
    ],
  },
  {
    id: 5,
    slug: "how-companies-deploy-remote-workstations",
    date: "January 6, 2026",
    lastUpdated: "January 6, 2026",
    title: "How Companies Deploy Remote Workstations",
    excerpt:
      "A practical walkthrough of what it takes for a business to roll out remote, managed workstations for a distributed team.",
    content: [
      {
        type: "paragraph",
        text: "Deploying remote workstations for a team involves more than just provisioning hardware. Companies typically need to define workload requirements, decide on access controls, and plan for ongoing support before a single machine is turned on.",
      },
      { type: "heading", text: "Typical deployment steps", level: 2 },
      {
        type: "numberedList",
        items: [
          "Define the workload and hardware requirements for each user or team",
          "Select a provider and confirm available configurations and locations",
          "Set up authorized access and security controls for each machine",
          "Onboard users with remote access credentials and support documentation",
          "Monitor usage and adjust hardware assignments as needs change",
        ],
      },
      {
        type: "paragraph",
        text: "Because the underlying hardware is centrally managed, IT teams don't need to maintain the physical machines themselves — they focus on access policy, onboarding, and day-to-day support for their own users.",
      },
    ],
  },
  {
    id: 6,
    slug: "residential-vs-commercial-infrastructure-hosting",
    date: "January 6, 2026",
    lastUpdated: "January 6, 2026",
    title: "Residential vs Commercial Infrastructure Hosting",
    excerpt:
      "What separates a residential Infrastructure Host location from a commercial one, and how that affects requirements and equipment eligibility.",
    content: [
      {
        type: "paragraph",
        text: "Infrastructure Hosts provide the physical location, power, and connectivity for company-owned computing equipment. Locations generally fall into two categories: residential and commercial, each with different practical considerations.",
      },
      { type: "heading", text: "Residential hosting", level: 2 },
      {
        type: "paragraph",
        text: "A residential location — typically a home — needs a secure indoor space, a dedicated electrical outlet, and a stable broadband connection. Residential ISPs may have different upload speeds or usage policies than commercial connections, which can affect which equipment is eligible for a given address.",
      },
      { type: "heading", text: "Commercial hosting", level: 2 },
      {
        type: "paragraph",
        text: "A commercial or office location often has higher-capacity power and networking already in place, and may be better suited to larger or higher-density equipment deployments, subject to the same eligibility review as any other location.",
      },
      {
        type: "paragraph",
        text: "In both cases, exact requirements vary by equipment type. Applicants go through a location review and eligibility screening as part of the Infrastructure Host application process before any hardware is shipped.",
      },
    ],
  },
  {
    id: 7,
    slug: "how-to-secure-remote-workstations",
    date: "January 6, 2026",
    lastUpdated: "January 6, 2026",
    title: "How to Secure Remote Workstations",
    excerpt:
      "An overview of the access controls, monitoring, and network practices that keep remotely accessed machines secure.",
    content: [
      {
        type: "paragraph",
        text: "Securing a remote workstation involves controlling who can access it, how that access is authenticated, and how the underlying network and hardware are monitored.",
      },
      { type: "heading", text: "Core practices", level: 2 },
      {
        type: "list",
        items: [
          "Restricting access to authorized, individually authenticated users",
          "Isolating hosted equipment from the host's personal network and devices",
          "Applying software and security updates on a managed schedule",
          "Monitoring device and network activity for anomalies",
          "Maintaining a documented incident response process",
        ],
      },
      {
        type: "paragraph",
        text: "In a distributed hosting model, the host's personal computer and files remain separate from company equipment — the hosted machine is independently configured and managed, and hosts are never asked to access customer data on it.",
      },
      {
        type: "paragraph",
        text: "For a full breakdown of the security practices used across our network, see our Security page.",
      },
    ],
  },
  {
    id: 8,
    slug: "ai-compute-infrastructure-explained",
    date: "January 6, 2026",
    lastUpdated: "January 6, 2026",
    title: "AI Compute Infrastructure Explained",
    excerpt:
      "What AI teams actually need from their compute infrastructure, from training runs to production inference.",
    content: [
      {
        type: "paragraph",
        text: "AI development spans several distinct compute needs, from experimenting with small models on a single machine to training large models across many GPUs, to serving inference requests in production.",
      },
      { type: "heading", text: "Stages of AI compute", level: 2 },
      {
        type: "list",
        items: [
          "Development and experimentation on individual workstations",
          "Model training and fine-tuning, often GPU-intensive and time-bound",
          "Testing and evaluation against benchmarks or held-out data",
          "Inference and serving, where responsiveness and uptime matter most",
        ],
      },
      {
        type: "paragraph",
        text: "Different stages call for different hardware and availability profiles. A managed, distributed compute network can support this by offering a range of configurations rather than a single fixed environment, with availability depending on current inventory and workload requirements.",
      },
    ],
  },
  {
    id: 9,
    slug: "distributed-infrastructure-vs-traditional-data-centers",
    date: "January 6, 2026",
    lastUpdated: "January 6, 2026",
    title: "Distributed Infrastructure vs Traditional Data Centers",
    excerpt:
      "How a distributed, professionally hosted network of individual locations compares to building or leasing a traditional data center.",
    content: [
      {
        type: "paragraph",
        text: "A traditional data center concentrates compute, power, and cooling infrastructure in a single large facility. It offers economies of scale, but requires substantial upfront investment and creates a single geographic point of presence.",
      },
      { type: "heading", text: "How a distributed network differs", level: 2 },
      {
        type: "paragraph",
        text: "A distributed managed-compute network instead places company-owned hardware across many individually hosted locations, each maintained by an approved Infrastructure Host and centrally monitored by a technical team. This trades some of the density of a single facility for geographic spread and lower fixed build-out costs.",
      },
      {
        type: "list",
        items: [
          "No single facility to build, lease, or maintain",
          "Compute capacity added incrementally as new hosts and hardware come online",
          "Geographic distribution across multiple U.S. locations rather than one region",
          "Centralized monitoring and support despite the physically distributed footprint",
        ],
      },
      {
        type: "paragraph",
        text: "Neither model is universally better — the right choice depends on workload scale, latency requirements, and how much control an organization wants over its own physical infrastructure.",
      },
    ],
  },
];
