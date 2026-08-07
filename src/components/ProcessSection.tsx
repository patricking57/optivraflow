import { ProcessTimeline } from "@/components/ProcessTimeline";

const steps = [
  {
    step: 1,
    title: "Deploy",
    description: "Company-owned hardware is configured and prepared by our technical team.",
  },
  {
    step: 2,
    title: "Host",
    description: "Approved Infrastructure Hosts provide a secure physical location, power, and reliable internet connectivity.",
  },
  {
    step: 3,
    title: "Manage",
    description: "Our technical team remotely monitors and manages the infrastructure.",
  },
  {
    step: 4,
    title: "Access",
    description: "Authorized customers and remote workers securely access their assigned computing resources.",
  },
];

export const ProcessSection = () => {
  return (
    <div id="how-it-works" className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1142px] px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl lg:text-[32px]">
            How it works
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            A straightforward path from company-owned hardware to secure remote access.
          </p>
        </div>
        <ProcessTimeline steps={steps} />
        <div className="mx-auto mt-10 max-w-[800px] overflow-hidden rounded-2xl">
          <img
            src="/images/packing-steps-guide.png"
            alt="How company-owned hardware is prepared and packed before shipment to a host location"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
