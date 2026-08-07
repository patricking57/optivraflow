import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { hostRequirements } from "@/data/hostData";

const HostRequirements = () => {
  return (
    <div>
      <PageHero
        eyebrow="Host Requirements"
        title="What it takes to become an Infrastructure Host."
        description="Exact requirements vary by equipment type. Here's what most locations need to be eligible."
        primaryCta={{ label: "Apply to Become a Host", to: "/become-a-host" }}
      />

      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[900px] px-4">
          <div className="mb-10 overflow-hidden rounded-2xl">
            <img
              src="/images/workstation-desk.webp"
              alt="A dedicated workstation ready to receive company-owned computing equipment"
              className="h-56 w-full object-cover sm:h-72"
              loading="lazy"
            />
          </div>
          <h2 className="mb-6 text-xl font-bold text-secondary sm:text-2xl">
            Basic requirements
          </h2>
          <ul className="mb-12 grid gap-3 sm:grid-cols-2">
            {hostRequirements.basic.map((req) => (
              <li key={req} className="flex items-start gap-3 rounded-lg border border-border p-4 text-sm text-secondary">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {req}
              </li>
            ))}
          </ul>

          <h2 className="mb-6 text-xl font-bold text-secondary sm:text-2xl">
            Potential additional requirements
          </h2>
          <ul className="mb-8 grid gap-3 sm:grid-cols-2">
            {hostRequirements.additional.map((req) => (
              <li key={req} className="flex items-start gap-3 rounded-lg border border-border p-4 text-sm text-secondary">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {req}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Exact requirements vary by equipment type. Final eligibility is
            confirmed during location review as part of the application
            process.
          </p>
        </div>
      </div>

      <div className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <CTASection
          title="Meet the requirements?"
          description="Start your Infrastructure Host application — it only takes a few minutes."
          primaryCta={{ label: "Apply to Become a Host", to: "/become-a-host" }}
          secondaryCta={{ label: "Read Host FAQ", to: "/become-a-host/faq" }}
        />
      </div>
    </div>
  );
};

export default HostRequirements;
