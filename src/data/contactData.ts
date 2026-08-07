export type ContactType = "email" | "phone" | "address";

export interface ContactItem {
  id: string;
  type: ContactType;
  href: string;
  label: string;
  display: string;
}

// Phone and address are placeholders until real company information is available.
export const contactItems: ContactItem[] = [
  {
    id: "email",
    type: "email",
    href: "mailto:iansmith@optivraflow.com",
    label: "Email",
    display: "iansmith@optivraflow.com",
  },
  {
    id: "phone",
    type: "phone",
    href: "tel:+10000000000",
    label: "Phone",
    display: "[Phone Number Placeholder]",
  },
  {
    id: "address",
    type: "address",
    href: "#",
    label: "Address",
    display: "[Business Address Placeholder]",
  },
];
