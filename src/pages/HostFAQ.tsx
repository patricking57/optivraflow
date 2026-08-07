import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { hostFaqs } from "@/data/hostData";

const HostFAQ = () => {
  return (
    <div>
      <PageHero
        eyebrow="Host FAQ"
        title="Infrastructure Host frequently asked questions."
        description="Answers to common questions from applicants and current Infrastructure Hosts."
      />

      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] px-4">
          <Accordion type="single" collapsible className="space-y-3">
            {hostFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-lg border border-border px-5"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-secondary sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <CTASection
          title="Ready to apply?"
          description="Start your Infrastructure Host application today."
          primaryCta={{ label: "Apply to Become a Host", to: "/become-a-host" }}
          secondaryCta={{ label: "Host Requirements", to: "/become-a-host/requirements" }}
        />
      </div>
    </div>
  );
};

export default HostFAQ;
