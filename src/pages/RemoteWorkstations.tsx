import { MonitorSmartphone, ShieldCheck, Gauge, ServerCog } from "lucide-react";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

const cards = [
  { icon: MonitorSmartphone, title: "Dedicated hardware", description: "A physical machine assigned to your team, not a shared virtual slice." },
  { icon: ShieldCheck, title: "Secure access", description: "Authorized, individually authenticated remote access." },
  { icon: Gauge, title: "Consistent performance", description: "Predictable performance backed by dedicated hardware." },
  { icon: ServerCog, title: "Managed & monitored", description: "Our technical team handles setup, monitoring, and maintenance." },
];

const audiences = [
  "IT workers",
  "Developers",
  "Designers",
  "Engineers",
  "Support teams",
  "QA teams",
  "AI professionals",
  "Researchers",
];

const RemoteWorkstations = () => {
  return (
    <SolutionPageLayout
      eyebrow="Remote Workstations"
      title="Dedicated Workstations. Accessible From Anywhere."
      description="Remote employees and technical teams securely access dedicated, company-managed computers assigned specifically to them."
      intro="The physical machine is located within our distributed infrastructure network — hosted at a secure, approved location — while authorized users access it remotely through a secure connection managed by our technical team."
      cardsHeading="Security, performance, and management"
      cards={cards}
      audiences={audiences}
      note="Workstation configurations vary by role and workload. Contact our team to discuss your team's specific requirements."
      image={{
        src: "/images/workstation-setup.jpg",
        alt: "A dedicated remote workstation, unboxed and ready for setup",
      }}
    />
  );
};

export default RemoteWorkstations;
