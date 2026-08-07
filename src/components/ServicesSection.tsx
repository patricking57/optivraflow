import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { solutionCards } from "@/data/solutionsData";

export const ServicesSection = () => {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1142px] px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl lg:text-[32px]">
            Solutions for every kind of compute need
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Company-owned hardware, professionally managed, for the customers who rely on it.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionCards.map((solution) => {
            const content = (
              <>
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <solution.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mb-2 text-base font-semibold text-secondary">
                  {solution.title}
                </h3>
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
        <div className="mt-10 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Explore all solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
