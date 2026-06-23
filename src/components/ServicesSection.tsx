import { Link } from "react-router-dom";

const services = [
  {
    icon: "/assets/images/website-optimization.svg",
    slug: "custom-web-app-development",
    title: "Custom Web & SaaS Development",
    description:
      "Design and build secure, scalable web apps and SaaS platforms with React, Next.js, TypeScript, and Java backends.",
    gradient: "green",
    bgColor: "bg-green/20",
    lineColor: "bg-green",
  },
  {
    icon: "/assets/images/paid-media.svg",
    slug: "ai-product-engineering",
    title: "AI Product Engineering",
    description:
      "Deliver AI‑powered products and automation using modern LLMs, data pipelines, and cloud‑native MLOps.",
    gradient: "purple",
    bgColor: "bg-purple/20",
    lineColor: "bg-purple",
    mt: "md:mt-10",
  },
  {
    icon: "/assets/images/email-sms-marketing.svg",
    slug: "healthcare-platforms",
    title: "Healthcare Platforms",
    description:
      "Build compliant healthcare portals, dashboards, and integrations focused on security, interoperability, and usability.",
    gradient: "red",
    bgColor: "bg-red/20",
    lineColor: "bg-red",
    mt: "md:-mt-10 lg:mt-20",
  },
  {
    icon: "/assets/images/funnel-optimization.svg",
    slug: "fintech-solutions",
    title: "Fintech & Payment Solutions",
    description:
      "Engineer reliable fintech systems for payments, lending, analytics, and reporting with enterprise‑grade security.",
    gradient: "pink",
    bgColor: "bg-pink/20",
    lineColor: "bg-pink",
    mt: "md:mt-0 lg:-mt-20",
  },
  {
    icon: "/assets/images/advanced-analytics.svg",
    slug: "cloud-devops-automation",
    title: "Cloud, DevOps & Automation",
    description:
      "Leverage AWS, GCP, Azure, and tools like n8n, Make, Zapier, and VOIP integrations to automate and scale operations.",
    gradient: "yellow",
    bgColor: "bg-yellow/20",
    lineColor: "bg-yellow",
    mt: "md:-mt-10",
  },
];

export const ServicesSection = () => {
  return (
    <div className="relative overflow-x-hidden py-12 sm:py-16 lg:pb-28 lg:pt-36">
      <img
        src="/assets/images/high-impact-bg.svg"
        alt="Impact image"
        className="absolute left-[5%] top-12 hidden lg:block lg:left-1/4 lg:top-28"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
      <div className="mx-auto max-w-[1142px] px-4">
        <div className="mx-auto pb-8 text-center sm:pb-10 lg:w-2/3 lg:pb-16">
          <h2 className="mb-4 text-xl leading-[1.75] font-bold text-purple-700 dark:text-white sm:mb-5 sm:text-2xl md:text-[26px]">
            High‑impact software services to grow your business
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            Our team ships production‑ready software using modern stacks and
            cloud platforms, from MVPs to enterprise‑grade systems.
          </p>
        </div>
        <div className="relative grid items-start gap-4 text-center leading-6 sm:grid-cols-2 sm:gap-6 md:gap-x-[30px] md:gap-y-12 lg:grid-cols-3">
          <img
            loading="lazy"
            src="/assets/images/high-impact-round.svg"
            alt="Impact round"
            className="absolute -right-24 top-0 animate-spin"
          />
          <span
            className="absolute -bottom-10 -left-1/2 md:-left-1/3 md:bottom-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <svg width="497" height="166" viewBox="0 0 497 166" fill="none">
              <path
                opacity="0.2"
                d="M0 164H464.69C481.259 164 494.69 150.569 494.69 134V2"
                stroke="url(#paint0_radial_112_223)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_112_223"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(485.5 164) rotate(180) scale(356.5 163.113)"
                >
                  <stop stopColor="#806BFF" />
                  <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </span>
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] ${
                service.mt || ""
              }`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="group relative overflow-hidden p-0.5">
                <div
                  className={`bg-gradient ${service.gradient} absolute inset-0 opacity-0 duration-5000 group-hover:opacity-100`}
                ></div>
                <div className="relative z-[1] rounded-lg bg-white px-4 py-8 dark:bg-purple-900 sm:py-10 md:px-7">
                  <Link
                    to={`/service-list/${service.slug}`}
                    className="absolute inset-0"
                  ></Link>
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20 ${service.bgColor}`}
                  >
                    <img
                      loading="lazy"
                      src={service.icon}
                      alt={service.title}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    />
                  </div>
                  <h3 className="pb-4 pt-6 text-lg font-semibold text-purple-700 dark:text-white sm:pb-6 sm:pt-10 sm:text-xl md:text-22">
                    {service.title}
                  </h3>
                  <p className="mb-8 line-clamp-3 text-sm font-light text-purple-600 dark:text-purple-500 sm:mb-11 sm:text-base">
                    {service.description}
                  </p>
                  <span
                    className={`mx-auto block h-[3px] w-24 rounded-full sm:w-28 ${service.lineColor}`}
                  ></span>
                </div>
              </div>
            </div>
          ))}
          <div
            className="relative rounded-lg bg-secondary px-4 py-8 dark:bg-primary sm:py-10 md:px-7"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 sm:h-20 sm:w-20">
              <img
                loading="lazy"
                src="/assets/images/all-services.svg"
                alt="Services"
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
            </div>
            <h3 className="pb-4 pt-6 text-lg font-semibold text-white sm:pb-6 sm:pt-10 sm:text-xl md:text-22">
              Browse all software services
            </h3>
            <p className="mb-8 line-clamp-3 text-sm font-light text-purple-400 sm:mb-11 sm:text-base">
              Partner with a software team you can rely on for AI, healthcare,
              fintech, and automation projects.
            </p>
            <a
              href="/service-list"
              className="btn inline-flex bg-white text-primary hover:bg-primary hover:text-white dark:hover:bg-secondary"
            >
              Browse service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
