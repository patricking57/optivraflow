import { Link } from "react-router-dom";
import { ShieldCheck, ServerCog, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trustBadges } from "@/data/statsData";

const badgeIcons = [ServerCog, ShieldCheck, Activity];

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-secondary">
      <video
        className="absolute inset-0 h-full w-full object-cover "
        src="https://static.nc-myus.com/images/common/ux/hp/package_openingv2.webm"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 text-left sm:pt-36 lg:pt-44">
        <div className="max-w-2xl">
          <span className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            Distributed Computing Infrastructure
          </span>
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Distributed Computing Infrastructure, Built for the Real World.
          </h1>
          <p className="mb-8 max-w-2xl text-base text-white/70 sm:text-lg">
            Deploy managed computing resources across the United States for remote
            teams, AI workloads, software development, and specialized computing
            needs.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact-us">Request Infrastructure</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-secondary"
            >
              <Link to="/become-a-host">Become a Host</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:gap-4">
          {trustBadges.map((badge, index) => {
            const Icon = badgeIcons[index % badgeIcons.length];
            return (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium text-white/70 sm:text-sm">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
