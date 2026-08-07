import { Cpu, Globe2, MonitorSmartphone, Building2 } from "lucide-react";

const needs = [
  {
    icon: Cpu,
    title: "GPU & specialized hardware",
    description: "Dedicated computing hardware for AI, rendering, and other demanding workloads.",
  },
  {
    icon: Globe2,
    title: "U.S.-based, geographically distributed",
    description: "Infrastructure spread across multiple U.S. locations rather than one facility.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote workstation access",
    description: "Dedicated machines that authorized users can securely access from anywhere.",
  },
  {
    icon: Building2,
    title: "Managed hardware, no facility required",
    description: "Reliable, always-on environments without building your own infrastructure.",
  },
];

export const MarketingSection = () => {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1142px] px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl lg:text-[32px]">
              Computing resources shouldn&apos;t be limited by geography.
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Companies and professionals increasingly need dedicated hardware,
              GPU resources, and reliable, always-on environments — without the
              cost and complexity of building their own physical infrastructure.
              Our distributed network solves this by placing company-owned,
              professionally managed hardware across approved locations
              throughout the U.S.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/shipping-kit-exploded.webp"
              alt="Company-owned hardware, carefully packaged and prepared for deployment"
              className="h-64 w-full object-cover sm:h-80"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {needs.map((need) => (
            <div
              key={need.title}
              className="rounded-xl border border-border p-6"
            >
              <need.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-base font-semibold text-secondary">
                {need.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {need.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
