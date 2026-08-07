import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerLinks, siteConfig } from "@/data/siteConfig";
import { contactItems } from "@/data/contactData";

const iconFor = (type: string) => {
  if (type === "email") return Mail;
  if (type === "phone") return Phone;
  return MapPin;
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <div>
    <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className="text-sm text-white/60 transition-colors hover:text-primary"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-secondary">
      <div className="mx-auto max-w-[1400px] px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1">
                <img src="/logo.png" alt={siteConfig.name} className="h-full w-full" />
              </span>
              <span className="text-lg font-extrabold text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              {siteConfig.description}
            </p>
            <ul className="mt-6 space-y-3">
              {contactItems
                .filter((item) => item.type === "email")
                .map((item) => {
                  const Icon = iconFor(item.type);
                  return (
                    <li key={item.id} className="flex items-start gap-3 text-sm text-white/60">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <a href={item.href} className="hover:text-primary">
                        {item.display}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <FooterColumn title="Solutions" links={footerLinks.solutions} />
          <FooterColumn title="Host Program" links={footerLinks.hostProgram} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <span>
            Copyright © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span>Company-owned hardware. Professionally managed. Securely monitored.</span>
        </div>
      </div>
    </footer>
  );
};
