export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 30, suffix: "+", label: "Projects delivered" },
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 5, suffix: "+", label: "Healthcare & fintech clients" },
  { value: 10, suffix: "+", label: "Cloud & AI certifications" },
];
