import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const Layout = () => {
  const location = useLocation();
  const showTopCurve =
    location.pathname === "/" || location.pathname === "/insights";

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-jakarta text-lg font-normal text-purple-500 antialiased dark:bg-secondary">
      {showTopCurve && (
        <img
          src="/assets/images/top-right-curv.svg"
          alt="Arrow right"
          className="absolute right-0 top-0 hidden lg:block"
          data-aos="fade-down"
          data-aos-duration="2000"
        />
      )}
      <Navbar />
      <div className="flex-1 pt-24 lg:pt-32">
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};
