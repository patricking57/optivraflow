export interface ProcessTimelineStep {
  step?: number;
  title: string;
  description: string;
}

export const ProcessTimeline = ({ steps }: { steps: ProcessTimelineStep[] }) => {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative rounded-xl border border-border bg-card p-6"
        >
          <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {step.step ?? index + 1}
          </span>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
};
