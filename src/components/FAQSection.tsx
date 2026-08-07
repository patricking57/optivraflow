import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { customerFaqs } from "@/data/faqData";

export const FAQSection = () => {
  const faqs = customerFaqs.slice(0, 6);

  return (
    <div className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1142px] gap-10 px-4 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mb-6 text-base text-muted-foreground">
            Answers to common questions about how our distributed infrastructure works.
          </p>
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View all FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-2">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-white px-5"
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
    </div>
  );
};
