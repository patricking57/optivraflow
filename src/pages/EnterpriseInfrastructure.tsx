import { Building2, Network, ShieldCheck, Layers } from "lucide-react";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { NetworkMap } from "@/components/NetworkMap";

const cards = [
  { icon: Building2, title: "No facility required", description: "Access distributed compute without building your own data center." },
  { icon: Network, title: "Geographic distribution", description: "Hardware placed across multiple U.S. locations for your organization." },
  { icon: ShieldCheck, title: "Centralized security", description: "Access controls and monitoring managed by our technical team." },
  { icon: Layers, title: "Scales with demand", description: "Add machines and locations as your organization's needs grow." },
];

const audiences = [
  "Enterprises",
  "Growing businesses",
  "Multi-location teams",
  "Organizations without in-house data centers",
];

const EnterpriseInfrastructure = () => {
  return (
    <div>
      <SolutionPageLayout
        eyebrow="Enterprise Infrastructure"
        title="Distributed Computing Resources for Growing Organizations."
        description="Managed hardware for businesses that need geographically distributed computing without maintaining physical infrastructure themselves."
        intro="Enterprise customers can deploy multiple machines across one or more locations, with a single point of contact for procurement, monitoring, and support."
        cardsHeading="Built for organizational scale"
        cards={cards}
        audiences={audiences}
        note="Enterprise deployments are scoped individually based on workload, headcount, and location requirements."
      />
      <div className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1142px] px-4">
          <NetworkMap />
        </div>
      </div>
    </div>
  );
};

export default EnterpriseInfrastructure;
