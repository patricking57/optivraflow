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
    href: "mailto:zacharyking@optivraflow.com",
    label: "Email",
    display: "zacharyking@optivraflow.com",
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
    href: "https://wa.me/16508226572",
    label: "WhatsApp",
    display: "+1 650 822 6572",
  },
  {
    id: "location",
    type: "location",
    href: "https://maps.app.goo.gl/1234567890",
    label: "Location",
    display: "451 Donahue St, Unit 204 San Francisco CA 94124",
  },
];
