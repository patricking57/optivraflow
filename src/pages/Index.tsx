import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MarketingSection } from "@/components/MarketingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white font-jakarta text-base font-normal text-purple-500 antialiased dark:bg-secondary sm:text-lg">
      <img
        src="/assets/images/top-right-curv.svg"
        alt="Arrow right"
        className="absolute right-0 top-0 hidden lg:block"
        data-aos="fade-down"
        data-aos-duration="2000"
      />
      <div className="overflow-x-hidden">
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <MarketingSection />
        <ProcessSection />
        <WhyChooseSection />
        <FAQSection />
        <TestimonialsSection />
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Index;
