import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/service-list" },
  { name: "Insights", href: "/insights" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "FAQ", href: "/faq" },
  { name: "About Us", href: "/about-us" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
    // Initialize theme from localStorage (following stackera-html-free)
    // const theme = localStorage.getItem("theme") || "light";
    // const isDarkMode = theme === "dark";
    // setIsDark(isDarkMode);

    // // Apply theme to body and html
    // if (isDarkMode) {
    //   document.body.classList.add("dark");
    //   document.documentElement.classList.add("dark");
    //   const themeInput = document.getElementById(
    //     "themeInput"
    //   ) as HTMLInputElement;
    //   if (themeInput) {
    //     themeInput.checked = true;
    //   }
    // } else {
    document.body.classList.remove("dark");
    document.documentElement.classList.remove("dark");
    // }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleTheme = () => {
  //   const currentTheme = localStorage.getItem("theme") || "light";
  //   const newTheme = currentTheme === "light" ? "dark" : "light";

  //   localStorage.setItem("theme", newTheme);
  //   setIsDark(newTheme === "dark");

  //   if (newTheme === "dark") {
  //     document.body.classList.add("dark");
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //     document.documentElement.classList.remove("dark");
  //   }
  // };

  if (!mounted) return null;

  return (
    <header
      id="header"
      className={`fixed z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? "top-0" : "top-6"
      }`}
    >
      <div
        className={`w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#F8F7FF] dark:bg-purple-800 shadow-[6px_6px_50px_rgba(17,24,39,0.1)]"
            : ""
        }`}
      >
        <div className="mx-auto w-full max-w-[1536px]">
          <div
            className={`header-main flex items-center bg-[#F8F7FF] px-4 py-3 transition-all duration-300 ease-in-out dark:bg-purple-800 lg:px-6 lg:py-0 ${
              isScrolled
                ? "rounded-none bg-transparent dark:bg-transparent"
                : "rounded-lg"
            }`}
          >
            <Link to="/" className="w-24 shrink-0 sm:w-28 lg:w-[133px]">
              <img
                loading="lazy"
                src="/assets/images/logo-light.svg"
                alt="Logo"
                className="inline-flex w-full dark:hidden"
              />
              <img
                loading="lazy"
                src="/assets/images/logo-dark.svg"
                alt="Logo"
                className="hidden w-full dark:inline-flex"
              />
            </Link>
            <div className="ms-auto flex items-center gap-10">
              <div
                className={`navbar fixed end-full top-0 z-20 inline-flex h-full w-full items-center gap-10 duration-500 lg:static lg:h-auto lg:w-auto ${
                  isOpen ? "open" : ""
                }`}
              >
                {isOpen && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu();
                    }}
                    className="absolute right-5 top-5 z-30 h-12 w-12 text-white lg:hidden"
                    aria-label="Close menu"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="sr-only">Close</span>
                  </button>
                )}
                <ul className="group inline-flex h-full w-full flex-col items-center gap-8 gap-y-10 overflow-y-auto bg-secondary px-5 pb-10 pt-24 text-22 font-semibold text-white sm:text-3xl lg:w-auto lg:flex-row lg:overflow-y-visible lg:bg-transparent lg:p-0 lg:text-lg lg:text-purple-600 dark:lg:text-purple-500 xl:gap-10">
                  {navLinks.map((link) => {
                    // Check if link is active - special handling for list pages to include detail pages
                    const isActive =
                      link.href === "/insights"
                        ? location.pathname.startsWith("/insights")
                        : link.href === "/service-list"
                        ? location.pathname.startsWith("/service-list")
                        : link.href === "/case-studies"
                        ? location.pathname.startsWith("/case-studies")
                        : location.pathname === link.href;

                    return (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className={`nav-link ${isActive ? "active" : ""}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="inline-block lg:hidden">
                    <Link
                      to="/contact-us"
                      className="nav-link"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="inline-flex items-center gap-5 xl:gap-10">
                {/* <label className="inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    id="themeInput"
                    className="mode-input peer h-0 w-0 opacity-0"
                    checked={isDark}
                    onChange={toggleTheme}
                  />
                  <div className="mode-btn relative h-10 w-20 rounded-full border-2 border-primary bg-transparent after:absolute after:left-1 after:top-1/2 after:h-8 after:w-8 after:-translate-y-1/2 after:rounded-full after:bg-primary after:z-0 peer-checked:after:left-auto peer-checked:after:right-1">
                    <span
                      className={`absolute left-2 top-1/2 z-10 w-6 -translate-y-1/2 ${
                        !isDark ? "text-white" : "text-primary/50"
                      }`}
                    >
                      <SunIcon className="w-6 h-6" />
                      <span className="sr-only">Light mode</span>
                    </span>
                    <span
                      className={`absolute right-2 top-1/2 z-10 w-6 -translate-y-1/2 ${
                        isDark ? "text-white" : "text-primary/50"
                      }`}
                    >
                      <Moon className="w-6 h-6" />
                      <span className="sr-only">Dark mode</span>
                    </span>
                  </div>
                </label> */}
                <Link
                  to="/contact-us"
                  className="btn hidden shrink-0 lg:inline-flex"
                >
                  Contact us
                </Link>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-block space-y-1 lg:hidden"
                >
                  <span className="flex h-0.5 w-7 rounded-full bg-primary"></span>
                  <span className="flex h-0.5 w-7 rounded-full bg-primary"></span>
                  <span className="flex h-0.5 w-7 rounded-full bg-primary"></span>
                  <span className="flex h-0.5 w-7 rounded-full bg-primary"></span>
                  <span className="sr-only">Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
