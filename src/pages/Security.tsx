import {
  ServerCog,
  Network,
  MonitorSmartphone,
  KeyRound,
  Lock,
  Radar,
  RefreshCw,
  Siren,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const topics = [
  {
    icon: ServerCog,
    title: "Hardware Security",
    description:
      "All computing hardware is company-owned and configured by our technical team before deployment to a host location.",
  },
  {
    icon: Network,
    title: "Network Isolation",
    description:
      "Company-owned equipment is configured to operate independently from a host's personal network and devices.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Device Management",
    description:
      "Devices are remotely monitored and managed by our technical team throughout their deployment.",
  },
  {
    icon: KeyRound,
    title: "Access Controls",
    description:
      "Access to each machine is limited to individually authenticated, authorized users.",
  },
  {
    icon: Lock,
    title: "Encryption",
    description:
      "Remote access sessions and data in transit are encrypted using industry-standard protocols.",
  },
  {
    icon: Radar,
    title: "Monitoring",
    description:
      "Devices and network connectivity are monitored for availability and anomalous activity.",
  },
  {
    icon: RefreshCw,
    title: "Software Updates",
    description:
      "Operating systems and security-relevant software are kept current on a managed schedule.",
  },
  {
    icon: Siren,
    title: "Incident Response",
    description:
      "Suspected security incidents are investigated and addressed by our technical team.",
  },
  {
    icon: ShieldCheck,
    title: "Data Protection",
    description:
      "Customer data on assigned machines is handled according to our Privacy Policy and access-control practices.",
  },
  {
    icon: Building2,
    title: "Physical Equipment Security",
    description:
      "Hosts are required to keep equipment in a secure indoor location as outlined in the Host Agreement.",
  },
];

const Security = () => {
  return (
    <div>
      <PageHero
        eyebrow="Security"
        title="Security practices across our infrastructure network."
        description="Here's a plain description of the security practices we actually apply — hardware, network, and access controls, without unverified compliance claims."
      />

      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1142px] px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div key={topic.title} className="rounded-xl border border-border p-6">
                <topic.icon className="mb-4 h-7 w-7 text-primary" />
                <h2 className="mb-2 text-base font-semibold text-secondary">
                  {topic.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-[900px] px-4 text-center">
          <h2 className="mb-4 text-xl font-bold text-secondary sm:text-2xl">
            A note on certifications
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            We do not claim SOC 2, ISO 27001, HIPAA, PCI DSS, FedRAMP, or any
            other compliance certification unless it is actually held. If a
            specific certification matters for your use case, contact our
            infrastructure team to discuss current status.
          </p>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <CTASection
          title="Questions about how we secure the network?"
          description="Our infrastructure team can walk through our current security practices in detail."
          primaryCta={{ label: "Talk to Infrastructure Team", to: "/contact-us" }}
          secondaryCta={{ label: "Read Privacy Policy", to: "/privacy-policy" }}
        />
      </div>
    </div>
  );
};

export default Security;
