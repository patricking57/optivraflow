import {
  BrainCircuit,
  Users,
  Code2,
  ShieldCheck,
  Palette,
  Building2,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";

export interface SolutionCard {
  icon: LucideIcon;
  title: string;
  slug?: string;
  description: string;
}

export const solutionCards: SolutionCard[] = [
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    slug: "ai-gpu-compute",
    description:
      "GPU computing and managed workstations for AI development, training, testing, and inference.",
  },
  {
    icon: Users,
    title: "Remote IT Teams",
    slug: "remote-workstations",
    description:
      "Dedicated workstations and environments for IT professionals and distributed technical teams.",
  },
  {
    icon: Code2,
    title: "Software Development",
    slug: "it-developer-infrastructure",
    description:
      "Remote development environments, testing machines, build systems, and specialized workstations.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Dedicated environments for authorized security testing, research, and controlled workloads.",
  },
  {
    icon: Palette,
    title: "Creative & 3D",
    description:
      "High-performance systems for video editing, 3D modeling, rendering, animation, and design.",
  },
  {
    icon: Building2,
    title: "Enterprise",
    slug: "enterprise-infrastructure",
    description:
      "Distributed computing resources for businesses requiring managed hardware without maintaining physical infrastructure themselves.",
  },
  {
    icon: Gamepad2,
    title: "Gaming / Interactive Applications",
    description:
      "Dedicated high-performance systems for authorized gaming, testing, streaming, and interactive workloads, where offered.",
  },
];
