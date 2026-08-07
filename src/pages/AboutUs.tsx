import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const placeholders = [
  { label: "Founder / Leadership", value: "[Placeholder]" },
  { label: "Company Headquarters", value: "[Placeholder]" },
  { label: "Year Founded", value: "[Placeholder]" },
  { label: "Company Registration", value: "[Placeholder]" },
  { label: "Team", value: "[Placeholder]" },
  { label: "Contact Information", value: "iansmith@optivraflow.com" },
];

const AboutUs = () => {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Building a More Distributed Computing Infrastructure."
        description="We were created to make high-performance computing and managed workstations available across geographically distributed locations, without requiring every organization to build and operate its own physical infrastructure."
      />

      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-6">
            <h2 className="mb-2 text-lg font-bold text-secondary">Mission</h2>
            <p className="text-sm text-muted-foreground">
              To make reliable computing infrastructure more accessible, distributed, and manageable.
            </p>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h2 className="mb-2 text-lg font-bold text-secondary">Vision</h2>
            <p className="text-sm text-muted-foreground">
              A nationwide network of professionally managed computing resources.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-secondary sm:text-3xl">
            Company details
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {placeholders.map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </div>
                <div className="mt-1 text-sm text-secondary">{item.value}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            This information will be updated with real company details as they become available.
          </p>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <CTASection />
      </div>
    </div>
  );
};

export default AboutUs;
