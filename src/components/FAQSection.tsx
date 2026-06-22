import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of software development services do you offer?",
    answer:
      "We design and build custom web, mobile, and cloud-based applications—from MVPs and internal tools to fully scalable platforms tailored to your business goals.",
  },
  {
    question: "How do you typically start a new project?",
    answer:
      "Every project begins with a discovery session where we clarify your requirements, user journeys, success metrics, and technical constraints before proposing a roadmap and timeline.",
  },
  {
    question: "What is your usual project timeline?",
    answer:
      "Timelines depend on scope, but smaller projects often take 4–8 weeks, while more complex platforms can range from 3–6 months. We always provide a detailed estimate before starting.",
  },
  {
    question: "Can you work with or improve our existing codebase?",
    answer:
      "Yes. We regularly audit, refactor, and extend existing applications, improving performance, stability, and maintainability while minimizing disruption to your current users.",
  },
  {
    question: "How do you ensure code quality and security?",
    answer:
      "We follow modern engineering best practices including code reviews, automated testing, CI/CD, and security-minded architecture to keep your application reliable and secure.",
  },
  {
    question: "What technologies and stacks do you specialize in?",
    answer:
      "We specialize in modern JavaScript and TypeScript stacks (React, Next.js, Node.js), cloud platforms like AWS and Azure, and can integrate with your existing tools and APIs.",
  },
];

export const FAQSection = () => {
  return (
    <div className="overflow-x-hidden pb-10 sm:pb-12 md:pb-16 lg:pb-36">
      <div className="relative mx-auto max-w-[1142px] gap-4 px-4 sm:px-6 lg:grid lg:grid-cols-3">
        <img
          loading="lazy"
          src="/assets/images/faq-bg-shape.svg"
          alt="Faq bg shape"
          className="absolute -left-60 top-0 hidden lg:block lg:-left-96 lg:top-72"
        />
        <div className="mb-6 inline-block w-full text-center sm:mb-4 lg:mb-0 lg:pe-12 lg:ltr:text-left lg:rtl:text-right">
          <h2 className="mb-3 text-lg leading-[1.5] font-bold text-purple-700 dark:text-white sm:mb-4 sm:text-xl md:mb-5 md:text-2xl lg:text-[26px] lg:leading-[1.75]">
            Frequently asked questions
          </h2>
          <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl">
            Have questions about building software with us? We&apos;re here to
            help.
          </p>
          <Link
            to="/faq"
            className="group mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary sm:mt-6 sm:gap-2.5 sm:text-sm md:mt-8 md:text-base lg:mt-10"
          >
            <span>Learn more</span>
            <span className="relative start-0 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-primary/40 to-50% duration-300 group-hover:start-1 rtl:rotate-180 sm:h-6 sm:w-6">
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className="h-3 w-3 sm:h-auto sm:w-auto"
              >
                <path
                  d="M12.9 3.53991L10.06 0.689912C9.77 0.399912 9.29 0.399912 9 0.689912C8.71 0.979912 8.71 1.45991 9 1.74991L10.56 3.30991H0.989998C0.579998 3.30991 0.239998 3.64991 0.239998 4.05991C0.239998 4.46991 0.579998 4.80991 0.989998 4.80991H10.56L9 6.37991C8.71 6.66991 8.71 7.14991 9 7.43991C9.15 7.58991 9.34 7.65991 9.53 7.65991C9.72 7.65991 9.91 7.58991 10.06 7.43991L12.9 4.58991C13.2 4.29991 13.2 3.82991 12.9 3.53991Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="col-span-2 mt-4 sm:mt-6 md:mt-10 lg:mt-0">
          <Accordion
            type="single"
            collapsible
            className="space-y-4 border-0 bg-transparent sm:space-y-6 md:space-y-10"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-gray/20 border-0 border-b-2 border-purple-300 bg-transparent dark:border-purple-900"
              >
                <AccordionTrigger className="ac-trigger flex justify-between gap-3 p-0 pb-3 font-jakarta text-sm font-semibold leading-snug text-purple-700 outline-hidden after:hidden ltr:text-left rtl:text-right dark:text-purple-300 sm:gap-4 sm:pb-4 sm:text-base md:pb-5 md:text-lg lg:text-xl">
                  <span className="pr-2 sm:pr-0">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="ac-panel">
                  <p className="ac-text p-0 pb-3 font-jakarta text-xs leading-relaxed text-purple-500 sm:pb-4 sm:text-sm md:pb-5 md:text-base">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
