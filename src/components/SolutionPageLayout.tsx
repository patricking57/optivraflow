import { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export interface SolutionFeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  cardsHeading: string;
  cards: SolutionFeatureCard[];
  audiences: string[];
  note: string;
  image?: { src: string; alt: string };
}

export const SolutionPageLayout = ({
  eyebrow,
  title,
  description,
  intro,
  cardsHeading,
  cards,
  audiences,
  note,
  image,
}: SolutionPageLayoutProps) => {
  return (
    <div>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={{ label: "Request Infrastructure", to: "/contact-us" }}
        secondaryCta={{ label: "Explore Solutions", to: "/solutions" }}
      />

      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4 text-center">
          <p className="text-base text-muted-foreground sm:text-lg">{intro}</p>
        </div>
        {image && (
          <div className="mx-auto mt-10 max-w-[1000px] overflow-hidden rounded-2xl px-4">
            <img
              src={image.src}
              alt={image.alt}
              className="h-64 w-full rounded-2xl object-cover sm:h-80 md:h-96 lg:h-[600px]"
              loading="lazy"
            />
          </div>
        )}
      </div>

      <div className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-[1142px] px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-secondary sm:text-3xl">
            {cardsHeading}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-white p-6"
              >
                <card.icon className="mb-4 h-7 w-7 text-primary" />
                <h3 className="mb-2 text-sm font-semibold text-secondary">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-secondary sm:text-3xl">
            Who it&apos;s for
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-border px-4 py-2 text-sm text-secondary"
              >
                {audience}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            {note}
          </p>
        </div>
      </div>

      <div className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <CTASection />
      </div>
    </div>
  );
};
