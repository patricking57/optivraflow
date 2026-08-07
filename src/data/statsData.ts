export interface TrustBadge {
  label: string;
}

// Deliberately non-numeric: revise.md prohibits fabricated statistics.
export const trustBadges: TrustBadge[] = [
  { label: "Company-owned hardware" },
  { label: "Professionally managed" },
  { label: "Securely monitored" },
  { label: "U.S.-based infrastructure" },
];
