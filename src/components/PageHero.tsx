import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  children?: ReactNode;
}

export const PageHero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) => {
  return (
    <div className="relative overflow-hidden bg-secondary py-16 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {eyebrow && (
          <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {primaryCta && (
              <Button asChild size="lg">
                <Link to={primaryCta.to}>{primaryCta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-secondary"
              >
                <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
