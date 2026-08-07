import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";

import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import AIGpuCompute from "./pages/AIGpuCompute";
import RemoteWorkstations from "./pages/RemoteWorkstations";
import ITDeveloperInfrastructure from "./pages/ITDeveloperInfrastructure";
import EnterpriseInfrastructure from "./pages/EnterpriseInfrastructure";
import BecomeHost from "./pages/BecomeHost";
import HostRequirements from "./pages/HostRequirements";
import HostFAQ from "./pages/HostFAQ";
import Security from "./pages/Security";
import Support from "./pages/Support";
import HostAgreement from "./pages/HostAgreement";
import AcceptableUsePolicy from "./pages/AcceptableUsePolicy";
import Contact from "./pages/Contact";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import FAQ from "./pages/FAQ";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

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

            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/ai-gpu-compute" element={<AIGpuCompute />} />
            <Route
              path="/solutions/remote-workstations"
              element={<RemoteWorkstations />}
            />
            <Route
              path="/solutions/it-developer-infrastructure"
              element={<ITDeveloperInfrastructure />}
            />
            <Route
              path="/solutions/enterprise-infrastructure"
              element={<EnterpriseInfrastructure />}
            />

            <Route path="/become-a-host" element={<BecomeHost />} />
            <Route
              path="/become-a-host/requirements"
              element={<HostRequirements />}
            />
            <Route path="/become-a-host/faq" element={<HostFAQ />} />

            <Route path="/security" element={<Security />} />
            <Route path="/support" element={<Support />} />

            <Route path="/insights" element={<BlogList />} />
            <Route path="/insights/:blogName" element={<BlogDetail />} />

            <Route path="/contact-us" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/host-agreement" element={<HostAgreement />} />
            <Route
              path="/acceptable-use-policy"
              element={<AcceptableUsePolicy />}
            />

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
