import { Cpu, Network, ServerCog, Globe2 } from "lucide-react";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

const cards = [
  { icon: Cpu, title: "GPU Compute", description: "High-performance GPU systems for approved workloads." },
  { icon: Network, title: "Remote Access", description: "Secure remote access for authorized users." },
  { icon: ServerCog, title: "Managed Infrastructure", description: "Hardware monitoring and technical management." },
  { icon: Globe2, title: "Distributed Deployment", description: "Infrastructure deployed across multiple U.S. locations." },
];

const audiences = [
  "AI/ML developers",
  "AI trainers",
  "Computer vision engineers",
  "Data scientists",
  "Researchers",
];

const AIGpuCompute = () => {
  return (
    <SolutionPageLayout
      eyebrow="AI & GPU Compute"
      title="Managed GPU Infrastructure Without Building Your Own Facility."
      description="GPU workstations for AI development, model training, testing, inference, computer vision, data science, and research."
      intro="Built for demanding workloads — from experimentation to production inference — on company-owned GPU hardware distributed across our U.S. network and managed by our technical team."
      cardsHeading="Built for demanding workloads"
      cards={cards}
      audiences={audiences}
      note="Available hardware configurations depend on current inventory and workload requirements."
      image={{
        src: "/images/distributed-shipping-map.jpg",
        alt: "GPU hardware deployed and shipped across distributed U.S. locations",
      }}
    />
  );
};

export default AIGpuCompute;
