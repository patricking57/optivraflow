import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { contactItems } from "@/data/contactData";

export const Footer = () => {
  const location = useLocation();

  const isActive = (href: string) => {
    const { pathname } = location;

    if (href === "/insights") {
      return pathname.startsWith("/insights");
    }

    if (href === "/service-list") {
      return (
        pathname.startsWith("/service-list") ||
        pathname.startsWith("/service-detail")
      );
    }

    if (href === "/case-studies") {
      return pathname.startsWith("/case-studies");
    }

    return pathname === href;
  };

  useEffect(() => {
    // Set current year
    const yearElements = document.querySelectorAll(".curr-year");
    if (yearElements.length) {
      const year = new Date().getFullYear();
      yearElements.forEach((el) => {
        el.textContent = year.toString();
      });
    }
  }, []);

  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-[1536px]">
        <div className="flex flex-col items-center justify-between gap-6 px-4 py-8 lg:flex-row">
          {/* <div className="flex flex-col items-center gap-y-5 text-center md:flex-row md:text-left">
            <Link
              to="/"
              className="shrink-0 border-purple-300 md:pe-8 md:ltr:border-r-2 md:rtl:border-l-2"
            >
              <img
                loading="lazy"
                src="/assets/images/logo-light.svg"
                alt="Logo"
                className="inline-flex dark:hidden"
              />
              <img
                loading="lazy"
                src="/assets/images/logo-dark.svg"
                alt="Logo"
                className="hidden dark:inline-flex"
              />
            </Link>
            <div className="md:ps-8">
              {contactItems.find((item) => item.id === "location")?.display}
            </div>
          </div> */}
        </div>
        <div className="border-y-2 border-purple-200 px-4 py-10 dark:border-purple-900">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 leading-6 sm:grid-cols-3 lg:grid-cols-4 lg:justify-items-center">
            <div>
              <h3 className="pb-8 font-bold text-purple-700 dark:text-white">
                Quick menu
              </h3>
              <ul className="space-y-5 font-medium">
                <li>
                  <Link
                    to="/"
                    className={`relative duration-300 hover:start-2 hover:text-primary ${
                      isActive("/") ? "text-primary" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-list"
                    className={`relative start-0 duration-300 hover:start-2 hover:text-primary ${
                      isActive("/service-list") ? "text-primary" : ""
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies"
                    className={`relative start-0 duration-300 hover:start-2 hover:text-primary ${
                      isActive("/case-studies") ? "text-primary" : ""
                    }`}
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/insights"
                    className={`relative start-0 duration-300 hover:start-2 hover:text-primary ${
                      isActive("/insights") ? "text-primary" : ""
                    }`}
                  >
                    Insights
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="pb-8 font-bold text-purple-700 dark:text-white">
                Company
              </h3>
              <ul className="space-y-5 font-medium">
                <li>
                  <Link
                    to="/about-us"
                    className={`relative start-0 duration-300 hover:start-2 hover:text-primary ${
                      isActive("/about-us") ? "text-primary" : ""
                    }`}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className={`relative start-0 duration-300 hover:start-2 hover:text-primary ${
                      isActive("/faq") ? "text-primary" : ""
                    }`}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="pb-8 font-bold text-purple-700 dark:text-white">
                Legal
              </h3>
              <ul className="space-y-5 font-medium">
                <li>
                  <Link
                    to="/terms-condition"
                    className={`relative start-0 duration-300 hover:start-2 hover:text-primary ${
                      isActive("/terms-condition") ? "text-primary" : ""
                    }`}
                  >
                    Terms & condition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className={`relative start-0 duration-300 hover:start-2 hover:text-primary ${
                      isActive("/privacy-policy") ? "text-primary" : ""
                    }`}
                  >
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="pb-8 font-bold text-purple-700 dark:text-white">
                Contact Us
              </h3>
              <ul className="space-y-5 font-medium">
                {contactItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="relative flex flex-row items-center gap-2 start-0 duration-300 hover:start-2 hover:text-primary"
                    >
                      {item.type === "email" && (
                        <MdOutlineEmail className="h-6 w-6" />
                      )}
                      {item.type === "telegram" && (
                        <PiTelegramLogo className="h-6 w-6" />
                      )}
                      {item.type === "whatsapp" && (
                        <FaWhatsapp className="h-6 w-6" />
                      )}
                      {item.type !== "location" && item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 text-center text-base text-purple-400">
          Copyright © <span className="curr-year"></span> Optivraflow. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
