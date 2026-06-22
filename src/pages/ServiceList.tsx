import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "@/data/serviceData";

const ServiceList = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-x-hidden pb-16 lg:pb-16 xl:pt-36">
        <img
          alt="Digital marketing background"
          src="/assets/images/digital-market-bg.svg"
          className="absolute top-12"
          data-aos="slide-right"
          data-aos-duration="3000"
          loading="lazy"
        />
        <div className="mx-auto max-w-[1142px] px-4">
          <div className="mx-auto text-center lg:px-10">
            <h1
              className="mb-8 text-4xl font-extrabold text-purple-700 dark:text-white md:mb-12 lg:text-7xl/tight"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Software development services
            </h1>
            <p className="text-lg md:text-22">
              We design, build, and maintain custom software for AI, healthcare,
              fintech, and automation – from prototypes to enterprise platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative overflow-x-hidden lg:pb-28">
        <div className="mx-auto max-w-[1142px] px-4">
          <div className="relative grid items-start gap-4 text-center leading-6 sm:grid-cols-2 md:gap-x-[30px] md:gap-y-12 lg:grid-cols-3">
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
                  <div className="relative z-[1] rounded-lg bg-white px-4 py-10 dark:bg-purple-900 md:px-7">
                    <Link
                      to={`/service-list/${service.slug}`}
                      className="absolute inset-0"
                    ></Link>
                    <div
                      className={`inline-flex h-20 w-20 items-center justify-center rounded-full ${service.bgColor}`}
                    >
                      <img
                        loading="lazy"
                        src={service.icon}
                        alt={service.title}
                      />
                    </div>
                    <h3 className="pb-6 pt-10 text-22 font-semibold text-purple-700 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-11 line-clamp-3 font-light text-purple-600 dark:text-purple-500">
                      {service.description}
                    </p>
                    <span
                      className={`mx-auto block h-[3px] w-28 rounded-full ${service.lineColor}`}
                    ></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default ServiceList;
