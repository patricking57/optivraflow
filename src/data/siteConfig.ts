export const siteConfig = {
  name: "Optivraflow",
  legalName: "[Legal Entity Name Placeholder]",
  shortName: "Optivraflow",
  domain: "optivraflow.com",
  tagline: "Distributed Computing Infrastructure, Built for the Real World.",
  description:
    "A U.S.-based distributed managed-compute and edge infrastructure network providing company-owned, professionally managed computing hardware to authorized businesses and technical professionals.",
};

export interface NavChild {
  name: string;
  href: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href?: string;
  children?: NavChild[];
}

export const navLinks: NavItem[] = [
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      {
        name: "AI & GPU Compute",
        href: "/solutions/ai-gpu-compute",
        description: "GPU workstations for AI training, testing, and inference.",
      },
      {
        name: "Remote Workstations",
        href: "/solutions/remote-workstations",
        description: "Dedicated machines accessible from anywhere.",
      },
      {
        name: "IT & Developer Infrastructure",
        href: "/solutions/it-developer-infrastructure",
        description: "Build, test, and dev environments for technical teams.",
      },
      {
        name: "Enterprise Infrastructure",
        href: "/solutions/enterprise-infrastructure",
        description: "Managed hardware without building your own facility.",
      },
    ],
  },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Become a Host", href: "/become-a-host" },
  { name: "Security", href: "/security" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

export const footerLinks = {
  solutions: [
    { name: "All Solutions", href: "/solutions" },
    { name: "AI & GPU Compute", href: "/solutions/ai-gpu-compute" },
    { name: "Remote Workstations", href: "/solutions/remote-workstations" },
    {
      name: "IT & Developer Infrastructure",
      href: "/solutions/it-developer-infrastructure",
    },
    { name: "Enterprise Infrastructure", href: "/solutions/enterprise-infrastructure" },
  ],
  hostProgram: [
    { name: "Become a Host", href: "/become-a-host" },
    { name: "Host Requirements", href: "/become-a-host/requirements" },
    { name: "Host FAQ", href: "/become-a-host/faq" },
    { name: "Host Agreement", href: "/host-agreement" },
  ],
  company: [
    { name: "About", href: "/about-us" },
    { name: "Security", href: "/security" },
    { name: "Support", href: "/support" },
    { name: "Insights", href: "/insights" },
    { name: "Customer FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Host Agreement", href: "/host-agreement" },
    { name: "Acceptable Use Policy", href: "/acceptable-use-policy" },
  ],
};

export const contactPlaceholders = {
  email: "iansmith@optivraflow.com",
  supportEmail: "iansmith@optivraflow.com",
  hostEmail: "iansmith@optivraflow.com",
  phone: "[Phone Number Placeholder]",
  address: "[Business Address Placeholder]",
};
