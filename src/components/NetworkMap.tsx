const nodes = [
  { x: 15, y: 30, label: "Pacific Northwest" },
  { x: 12, y: 55, label: "Southwest" },
  { x: 30, y: 22, label: "Mountain West" },
  { x: 42, y: 48, label: "Central" },
  { x: 55, y: 30, label: "Midwest" },
  { x: 68, y: 20, label: "Great Lakes" },
  { x: 80, y: 32, label: "Northeast" },
  { x: 75, y: 55, label: "Mid-Atlantic" },
  { x: 60, y: 62, label: "Southeast" },
  { x: 38, y: 68, label: "Gulf Coast" },
];

const links: [number, number][] = [
  [0, 2],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [3, 9],
  [4, 8],
];

export const NetworkMap = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-secondary p-6 sm:p-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative">
        <svg viewBox="0 0 100 80" className="h-auto w-full">
          {links.map(([a, b], i) => {
            const from = nodes[a];
            const to = nodes[b];
            return (
              <line
                key={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="hsl(var(--primary))"
                strokeWidth="0.3"
                strokeOpacity="0.5"
              />
            );
          })}
          {nodes.map((node, i) => (
            <g key={i}>
              <circle
                cx={node.x}
                cy={node.y}
                r="2.6"
                fill="hsl(var(--primary))"
                fillOpacity="0.15"
              />
              <circle cx={node.x} cy={node.y} r="1.1" fill="hsl(var(--primary))" />
            </g>
          ))}
        </svg>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/60 sm:text-sm">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" /> Infrastructure
              nodes
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary/40" /> Host
              locations
            </span>
          </div>
          <span>Illustrative network visualization — demo data, not actual host locations.</span>
        </div>
      </div>
    </div>
  );
};
