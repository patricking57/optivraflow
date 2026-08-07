import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { solutionCards } from "@/data/solutionsData";

const Solutions = () => {
  return (
    <div>
      <PageHero
        eyebrow="Solutions"
        title="Managed computing infrastructure for every workload."
        description="From AI training to remote engineering teams, we combine managed hardware, distributed U.S. infrastructure, and secure remote access into one platform."
        primaryCta={{ label: "Request Infrastructure", to: "/contact-us" }}
        secondaryCta={{ label: "Become a Host", to: "/become-a-host" }}
      />

      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1142px] px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((solution) => {
              const content = (
                <>
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </span>
                  <h2 className="mb-2 text-lg font-semibold text-secondary">
                    {solution.title}
                  </h2>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {solution.description}
                  </p>
                  {solution.slug && (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </>
              );
              return solution.slug ? (
                <Link
                  key={solution.title}
                  to={`/solutions/${solution.slug}`}
                  className="rounded-xl border border-border p-6 transition-shadow hover:shadow-md"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={solution.title}
                  className="rounded-xl border border-border p-6"
                >
                  {content}
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Do not see your use case listed? Talk to our infrastructure team
            about your specific requirements.
          </p>
        </div>
      </div>

      <div className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <CTASection
          title="Talk to our infrastructure team"
          description="Tell us about your workload and we'll help you find the right configuration."
          primaryCta={{ label: "Talk to Infrastructure Team", to: "/contact-us" }}
          secondaryCta={{ label: "Explore Security", to: "/security" }}
        />
      </div>
    </div>
  );
};

export default Solutions;
