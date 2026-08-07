import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-base font-normal text-foreground antialiased">
      <Navbar />
      <div className="flex-1 pt-20">
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};
