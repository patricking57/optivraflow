import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

export const CTASection = ({
  title = "Computing infrastructure, distributed.",
  description = "From AI workloads and remote engineering teams to specialized workstations and enterprise applications, we provide managed computing resources where they're needed.",
  primaryCta = { label: "Request Infrastructure", to: "/contact-us" },
  secondaryCta = { label: "Become a Host", to: "/become-a-host" },
}: CTASectionProps) => {
  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <div className="rounded-2xl bg-secondary px-6 py-14 text-center sm:px-12 lg:py-20">
        <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm text-white/70 sm:text-base">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to={primaryCta.to}>{primaryCta.label}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-secondary"
          >
            <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
