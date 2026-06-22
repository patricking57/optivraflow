import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { NewsletterSection } from "@/components/NewsletterSection";
import { blogPosts } from "@/data/blogData";

const faqs = [
  {
    question: "What types of software projects do you specialize in?",
    answer:
      "We focus on custom web and SaaS products, AI‑enabled applications, and platforms in healthcare, fintech, and automation-heavy environments.",
  },
  {
    question: "Which technologies and stacks do you work with?",
    answer:
      "Our core stack includes React, Next.js, JavaScript, TypeScript, Java, and cloud platforms such as AWS, GCP, and Azure, plus automation tools like n8n, Make, Zapier, and VOIP integrations.",
  },
  {
    question:
      "Do you have experience in regulated industries like healthcare and fintech?",
    answer:
      "Yes. We have delivered projects for healthcare and financial services organizations, with strong attention to security, data privacy, and compliance requirements.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Absolutely. We often collaborate with in‑house teams on architecture, feature delivery, performance improvements, and DevOps/cloud initiatives.",
  },
  {
    question: "How do you typically structure an engagement?",
    answer:
      "We start with discovery and solution design, then move into iterative delivery with clear milestones, demos, and regular check-ins. We can work on fixed‑scope projects or longer-term product partnerships.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We can stay on for maintenance, monitoring, incident response, and continuous improvement as your product and user base grow.",
  },
  {
    question: "What is your approach to quality and testing?",
    answer:
      "We rely on code reviews, automated testing (unit, integration, and end‑to‑end where appropriate), and continuous integration pipelines to keep quality high and regressions low.",
  },
  {
    question: "Can you help us modernize or refactor an existing application?",
    answer:
      "Yes. We frequently help teams migrate legacy systems to modern architectures, improve performance, and gradually pay down technical debt.",
  },
  {
    question: "Do you offer proof‑of‑concept or MVP builds?",
    answer:
      "We can help you validate ideas quickly with MVPs or proof‑of‑concept projects, then extend and harden them into production‑ready solutions.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through our contact page with a short description of your project. We’ll schedule a call to understand your goals, timelines, and constraints, then propose a plan.",
  },
  {
    question: "Which time zones and collaboration tools do you support?",
    answer:
      "We are flexible across time zones and typically collaborate via video calls, Slack or Teams, and modern project management tools like Jira, Linear, or ClickUp.",
  },
];

const latestArticles = blogPosts.slice(0, 2);

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const leftFaqs = faqs.slice(0, 6);
  const rightFaqs = faqs.slice(6);

  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <div className="overflow-x-hidden w-full mx-auto pt-8 sm:pt-10 md:pt-16">
        <div className="relative mx-auto max-w-[1142px] px-4 pb-10 text-center sm:px-6 sm:pb-12 md:pb-16 lg:pb-14 xl:pb-24">
          <span className="absolute -start-96 top-8 rtl:rotate-y-180 hidden lg:inline-block">
            <svg
              width="488"
              height="124"
              viewBox="0 0 488 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M485 3H293.31C265.695 3 243.31 25.3858 243.31 53V71C243.31 98.6142 220.924 121 193.31 121H0"
                stroke="url(#paint0_radial_434_1170)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_434_1170"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(177.5 -59.5) scale(228 204.246)"
                >
                  <stop stopColor="#806BFF" />
                  <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </span>
          <h1
            className="mb-5 text-2xl font-extrabold leading-tight text-purple-700 dark:text-white sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl lg:mb-12 lg:text-[56px]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Frequently Asked Questions
          </h1>
          <p className="text-sm leading-relaxed text-purple-600 dark:text-purple-400 sm:text-base md:text-lg lg:text-22 lg:px-20">
            Answers to common questions about how we design, build, and support
            custom software solutions for AI, healthcare, fintech, and beyond.
          </p>
        </div>

        {/* FAQ Content (Accordion Grid) */}
        <div className="container px-4 sm:px-6">
          <div className="grid gap-x-8 lg:grid-cols-2 lg:gap-x-16">
            {/* Left Column FAQs */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <Accordion
                type="single"
                collapsible
                className="space-y-6 border-0 bg-transparent sm:space-y-8 md:space-y-10"
              >
                {leftFaqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`left-item-${index}`}
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

            {/* Right Column FAQs */}
            <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8 md:mt-10 md:space-y-10 lg:mt-0">
              <Accordion
                type="single"
                collapsible
                className="space-y-6 border-0 bg-transparent sm:space-y-8 md:space-y-10"
              >
                {rightFaqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`right-item-${index}`}
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

        {/* Latest Articles Section */}
        <div className="mx-auto max-w-[1536px] px-4 pt-12 sm:px-6 sm:pt-16 lg:pt-24">
          <div className="mx-auto pb-8 text-center sm:pb-10 md:pb-14 lg:w-2/3 lg:pb-20">
            <h2 className="mb-3 text-xl font-bold text-purple-700 dark:text-white sm:mb-4 sm:text-2xl md:mb-5 md:text-[26px] md:leading-[1.75]">
              Latest Articles
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              All important business news in one place
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 xl:grid-cols-2 xl:gap-x-8 xl:gap-y-16">
            {latestArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col overflow-hidden rounded-2xl dark:bg-purple-900 sm:flex-row"
              >
                <div className="shrink-0 h-48 w-full sm:h-auto sm:w-2/5 2xl:w-[366px]">
                  <img
                    src={article.image}
                    alt="Blog image"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 py-5 text-center sm:p-6 md:p-7 sm:ltr:text-left sm:rtl:text-right">
                  <div className="mb-5 flex flex-wrap justify-center gap-2.5 text-xs font-semibold leading-5 sm:mb-6 sm:gap-3 sm:text-sm md:mb-7 md:text-base sm:justify-start">
                    <span className="rounded-full bg-primary/10 px-3 py-1.5 text-primary sm:px-4 sm:py-2 md:px-5 md:py-2.5">
                      {article.date}
                    </span>
                  </div>
                  <div className="mb-5 space-y-3 sm:mb-6 sm:space-y-4">
                    <Link
                      to={`/insights/${article.slug}`}
                      className="line-clamp-2 text-base font-semibold text-purple-700 duration-300 hover:text-primary dark:text-white sm:text-lg md:text-xl lg:text-22"
                    >
                      {article.title}
                    </Link>
                    <p className="line-clamp-3 text-sm leading-relaxed sm:text-base md:text-lg md:leading-6">
                      {article.excerpt}
                    </p>
                  </div>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="relative start-0 text-sm font-semibold text-primary duration-300 hover:start-2 hover:text-secondary dark:hover:text-white sm:text-base"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <NewsletterSection />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
