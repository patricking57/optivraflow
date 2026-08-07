import { Code2, GitBranch, TerminalSquare, Boxes } from "lucide-react";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

const cards = [
  { icon: Code2, title: "Development environments", description: "Dedicated machines for day-to-day development work." },
  { icon: GitBranch, title: "Build & CI systems", description: "Infrastructure for build pipelines and continuous integration." },
  { icon: TerminalSquare, title: "Testing machines", description: "Isolated environments for QA and testing workflows." },
  { icon: Boxes, title: "Specialized workstations", description: "Configurations tailored to specific tooling or hardware needs." },
];

const audiences = [
  "Software developers",
  "DevOps engineers",
  "QA engineers",
  "Distributed technical teams",
];

const ITDeveloperInfrastructure = () => {
  return (
    <SolutionPageLayout
      eyebrow="IT & Developer Infrastructure"
      title="Remote Development Environments and Build Infrastructure."
      description="Remote development environments, testing machines, build systems, and specialized workstations for IT professionals and distributed technical teams."
      intro="Whether you need a single dedicated development machine or infrastructure for a distributed engineering team, our managed hardware runs the tools your workflow depends on, without you having to own or maintain the physical machines."
      cardsHeading="Infrastructure for technical teams"
      cards={cards}
      audiences={audiences}
      note="Available configurations depend on current inventory and the specific tooling or performance requirements of your workflow."
      image={{
        src: "/images/equipment-import-map.webp",
        alt: "Development and build infrastructure deployed across distributed U.S. locations",
      }}
    />
  );
};

export default ITDeveloperInfrastructure;
