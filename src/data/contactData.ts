export type ContactType = "email" | "telegram" | "whatsapp" | "location";

export interface ContactItem {
  id: string;
  type: ContactType;
  href: string;
  label: string;
  display: string;
}

export const contactItems: ContactItem[] = [
  {
    id: "email",
    type: "email",
    href: "mailto:contact@optivraflow.com",
    label: "Email",
    display: "contact@optivraflow.com",
  },
  {
    id: "telegram",
    type: "telegram",
    href: "https://t.me/optivraflow",
    label: "Telegram",
    display: "@optivraflow",
  },
  {
    id: "whatsapp",
    type: "whatsapp",
    href: "https://wa.me/12055149507",
    label: "WhatsApp",
    display: "+1 205 514 9507",
  },
  {
    id: "location",
    type: "location",
    href: "https://maps.app.goo.gl/1234567890",
    label: "Location",
    display: "2878 McKinney Ave, Dallas, Texas",
  },
];
