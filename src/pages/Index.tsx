import { Link } from "react-router-dom";
import { ArrowRight, Lock, Radar, ServerCog, KeyRound } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { MarketingSection } from "@/components/MarketingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { FAQSection } from "@/components/FAQSection";
import { NetworkMap } from "@/components/NetworkMap";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { hostRequirements } from "@/data/hostData";

const securityPoints = [
  {
    icon: Lock,
    title: "Access controls",
    description:
      "Authorized, individually authenticated access to every machine.",
  },
  {
    icon: Radar,
    title: "Monitoring",
    description: "Continuous device and network monitoring across the network.",
  },
  {
    icon: ServerCog,
    title: "Remote management",
    description:
      "Centrally managed hardware, patched and maintained by our team.",
  },
  {
    icon: KeyRound,
    title: "Network isolation",
    description: "Hosted equipment is isolated from a host's personal devices.",
  },
];

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <MarketingSection />
      <ProcessSection />
      <ServicesSection />
      <WhyChooseSection />

      {/* Security teaser */}
      <div className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1142px] px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl lg:text-[32px]">
              Security, built in
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Every machine in the network is centrally managed and monitored by
              our technical team.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-border bg-white p-6"
              >
                <point.icon className="mb-4 h-7 w-7 text-primary" />
                <h3 className="mb-2 text-sm font-semibold text-secondary">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/security"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Read our security practices <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Become a Host teaser */}
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1142px] items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl lg:text-[32px]">
              Become an Infrastructure Host
            </h2>
            <p className="mb-6 text-base text-muted-foreground sm:text-lg">
              Provide space, reliable power, and stable internet for
              company-owned computing equipment and receive recurring
              compensation under a clear Host Agreement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/become-a-host">Apply to Become a Host</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/become-a-host/requirements">
                  Check Host Requirements
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-secondary">
              Basic requirements
            </h3>
            <ul className="space-y-2.5">
              {hostRequirements.basic.slice(0, 6).map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FAQSection />

      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <CTASection />
      </div>
    </div>
  );
};

export default Index;
