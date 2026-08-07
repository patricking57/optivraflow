import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/data/siteConfig";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href.startsWith("/#")) return false;
    if (href === "/solutions") return location.pathname.startsWith("/solutions");
    if (href === "/become-a-host")
      return location.pathname.startsWith("/become-a-host");
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur"
          : "bg-white/90 backdrop-blur sm:bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt={siteConfig.name} className="h-9 w-9 rounded-lg" />
          <span className="text-lg font-extrabold text-secondary">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  to={link.href ?? "#"}
                  className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-secondary"
                  }`}
                >
                  {link.name}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {solutionsOpen && (
                  <div className="absolute left-0 top-full w-80 rounded-xl border border-border bg-white p-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-lg px-4 py-3 hover:bg-muted"
                      >
                        <div className="text-sm font-semibold text-secondary">
                          {child.name}
                        </div>
                        {child.description && (
                          <div className="mt-0.5 text-xs text-muted-foreground">
                            {child.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href ?? "#"}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-secondary"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link to="/become-a-host">Become a Host</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact-us">Request Infrastructure</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-secondary lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-white px-4 py-4 lg:hidden">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="border-b border-border/60 py-2">
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-2 text-sm font-semibold text-secondary"
                >
                  {link.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="space-y-1 pb-2 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block py-2 text-sm text-muted-foreground"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href ?? "#"}
                className="block border-b border-border/60 py-3 text-sm font-semibold text-secondary"
              >
                {link.name}
              </Link>
            )
          )}
          <div className="mt-4 flex flex-col gap-3">
            <Button asChild variant="outline">
              <Link to="/become-a-host">Become a Host</Link>
            </Button>
            <Button asChild>
              <Link to="/contact-us">Request Infrastructure</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
