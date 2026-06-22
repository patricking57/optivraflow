import { Toaster } from "@/components/ui/toaster";

import { Toaster as Sonner } from "@/components/ui/sonner";

import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "@/components/Layout";

import Index from "./pages/Index";

import Portfolio from "./pages/PortfolioList";

import PortfolioDetail from "./pages/PortfolioDetail";

import Contact from "./pages/Contact";

import BlogList from "./pages/BlogList";

import BlogDetail from "./pages/BlogDetail";

import ServiceList from "./pages/ServiceList";

import ServiceDetail from "./pages/ServiceDetail";

import NotFound from "./pages/NotFound";

import FAQ from "./pages/FAQ";

import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />

      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />

            <Route path="/case-studies" element={<Portfolio />} />

            <Route
              path="/case-studies/:projectSlug"
              element={<PortfolioDetail />}
            />

            <Route path="/insights" element={<BlogList />} />

            <Route path="/insights/:blogName" element={<BlogDetail />} />

            <Route path="/service-list" element={<ServiceList />} />

            <Route
              path="/service-list/:serviceName"
              element={<ServiceDetail />}
            />

            <Route path="/contact-us" element={<Contact />} />

            <Route path="/faq" element={<FAQ />} />

            <Route path="/terms-condition" element={<TermsCondition />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/about-us" element={<AboutUs />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
