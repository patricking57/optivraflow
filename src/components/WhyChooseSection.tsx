import {
  Laptop2,
  FlaskConical,
  Palette,
  ShieldCheck,
  BrainCircuit,
  Building2,
} from "lucide-react";

const customerTypes = [
  { icon: Laptop2, label: "IT professionals" },
  { icon: BrainCircuit, label: "AI/ML workers & trainers" },
  { icon: FlaskConical, label: "Software developers & researchers" },
  { icon: ShieldCheck, label: "Cybersecurity teams" },
  { icon: Palette, label: "Creative professionals" },
  { icon: Building2, label: "Enterprise & business users" },
];

export const WhyChooseSection = () => {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1142px] px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl lg:text-[32px]">
            Who we serve
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Authorized customers access assigned computing resources for legitimate business and technical work.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {customerTypes.map((type) => (
            <div
              key={type.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border p-5 text-center"
            >
              <type.icon className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-secondary">
                {type.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
