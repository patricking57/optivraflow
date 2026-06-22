import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { serviceDetails } from "@/data/serviceData";

const ServiceDetail = () => {
  const { serviceName } = useParams<{ serviceName: string }>();
  const service = serviceDetails.find((s) => s.slug === serviceName);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-purple-700 dark:text-white">
            Service not found
          </h1>
          <Link
            to="/service-list"
            className="btn inline-flex bg-primary text-white hover:bg-secondary"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <div className="overflow-x-hidden">
        <div className="mx-auto max-w-[1536px] px-4">
          <div className="flex flex-col items-center gap-y-6 pb-16 pt-12 lg:flex-row lg:pb-24">
            <div
              className="text-center lg:pe-10 lg:ltr:text-left lg:rtl:text-right xl:pe-32"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h1 className="mb-8 text-4xl font-extrabold leading-tight text-purple-700 dark:text-white xl:mb-12 xl:text-[56px]">
                {service.title}
              </h1>
              <p className="sm:text-22 text-purple-600 dark:text-purple-400">
                {service.heroDescription}
              </p>
            </div>
            <div
              className="shrink-0 lg:w-2/5"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <img
                alt={service.title}
                loading="lazy"
                src={service.heroImage}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="overflow-x-hidden">
        <div className="mx-auto max-w-[1536px] px-4">
          <div className="flex flex-col gap-y-6 lg:flex-row xl:items-center">
            <div
              className="text-center lg:pe-12 lg:ltr:text-left lg:rtl:text-right xl:pe-28"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="mb-14 space-y-5">
                <h2 className="text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                  We design, build, and scale reliable software
                </h2>
                <p className="sm:text-xl text-purple-600 dark:text-purple-400">
                  From discovery to production operations, we pair modern
                  engineering practices with deep domain expertise in AI,
                  healthcare, fintech, and automation to deliver software that
                  your teams and customers can depend on.
                </p>
              </div>
              <div className="mb-10 flex justify-center gap-5 sm:gap-14 lg:mb-20 lg:justify-start">
                {service.stats.map((stat, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-[40px] font-extrabold leading-tight text-purple-700 dark:text-white">
                      <span>{stat.value}</span>
                    </h3>
                    <h4 className="font-medium sm:text-xl text-purple-600 dark:text-purple-400">
                      {stat.label}
                    </h4>
                  </div>
                ))}
              </div>
              <Link
                to="/contact-us"
                className="btn inline-flex bg-primary text-white hover:bg-secondary"
              >
                Request a quote
              </Link>
            </div>
            <div
              className="group shrink-0 overflow-hidden rounded-3xl shadow-[10px_14px_34px_rgba(0,0,0,0.15)] lg:w-2/5 xl:max-w-2xl"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                alt="Business image"
                loading="lazy"
                src="/assets/images/business-image.jpg"
                className="h-full w-full object-cover duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 lg:py-36">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 xl:items-center xl:gap-28">
            <div className="space-y-16">
              {service.processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex gap-8 xl:gap-14 ${
                    index < service.processSteps.length - 1 ? "" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                >
                  {index < service.processSteps.length - 1 && (
                    <span className="absolute left-6 top-14 inline-flex h-full border border-dashed border-purple-400 rtl:left-auto rtl:right-6 sm:left-9 sm:top-[68px] sm:ltr:left-9 sm:rtl:right-9"></span>
                  )}
                  <div className="shrink-0">
                    <img
                      alt={step.title}
                      loading="lazy"
                      width="72"
                      height="72"
                      src={step.icon}
                      className="w-12 sm:w-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-22 font-semibold text-purple-700 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="text-center lg:ltr:text-left lg:rtl:text-right"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="mb-10 space-y-5 lg:mb-20">
                <h2 className="text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                  Our proven process to deliver on {service.title}
                </h2>
                <p className="text-xl text-purple-600 dark:text-purple-400">
                  We keep you involved at every stage with clear milestones,
                  demos, and metrics, so you always know how your{" "}
                  {service.title.toLowerCase()} initiative is progressing.
                </p>
              </div>
              <Link
                to="/contact-us"
                className="btn inline-flex bg-primary text-white hover:bg-secondary"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="overflow-x-hidden pb-[144px]">
        <div className="mx-auto max-w-[1536px] px-4">
          <div className="flex flex-col items-center gap-y-6 rounded-3xl bg-secondary px-4 py-12 dark:bg-purple-900 sm:px-16 lg:flex-row xl:py-8 xl:pr-40">
            <div
              className="relative text-center lg:pe-28 lg:ltr:text-left lg:rtl:text-right"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="absolute -top-12 left-4 sm:-left-12 sm:-top-12">
                <svg width="66" height="59" viewBox="0 0 66 59" fill="none">
                  <path
                    d="M33.3408 37.9196C32.9764 36.6924 32.8479 35.7352 32.4204 34.9478C31.635 33.4964 30.6305 32.1704 29.7958 30.7495C28.3324 28.2643 26.9783 25.7118 25.4798 23.2484C24.6325 21.8547 23.7335 20.4392 22.5978 19.2968C21.266 17.9578 19.3883 17.9091 18.0753 18.8026C16.6256 19.7903 16.1249 21.6835 17.0236 23.6028C17.5976 24.8327 18.3071 26.0865 19.2486 27.0357C22.2429 30.0525 25.3551 32.9525 28.4653 35.8489C29.2614 36.5896 30.1646 37.2594 31.1189 37.7655C31.616 38.0357 32.3398 37.8725 33.3408 37.9196Z"
                    fill="#31D2AC"
                  />
                  <path
                    d="M52.8074 35.962C53.1214 36.0812 53.5023 36.3595 53.8355 36.3103C54.1792 36.2546 54.6336 35.9497 54.7593 35.6374C55.0643 34.8771 55.2591 34.0626 55.4057 33.2485C56.26 28.4821 57.1065 23.7108 57.9005 18.9327C58.0554 17.9961 58.1042 16.9882 57.939 16.0584C57.6243 14.2969 56.1157 12.9937 54.5627 12.9059C53.0303 12.82 51.4925 14.0382 50.9658 15.7763C50.8449 16.1687 50.7426 16.5839 50.7288 16.9933C50.5411 22.9667 50.8409 28.8982 52.2886 34.7275C52.383 35.1239 52.6026 35.4871 52.8074 35.962Z"
                    fill="#31D2AC"
                  />
                  <path
                    d="M8.5124 42.8932C9.05004 43.2703 9.86692 44.0861 10.8473 44.4833C14.4032 45.9313 18.0107 47.2493 21.6087 48.5831C22.1136 48.7702 22.6826 48.815 23.226 48.8414C23.9132 48.8817 24.7159 48.841 24.8653 48.0154C24.9454 47.5797 24.5967 47.0029 24.3165 46.5793C24.1023 46.2568 23.6907 46.0561 23.349 45.827C20.0318 43.6207 16.7306 41.385 13.3741 39.242C12.4699 38.666 11.4225 38.2464 10.3838 37.9928C9.42675 37.7621 8.46366 38.0338 7.89911 39.013C7.37872 39.921 7.34318 40.8473 7.84427 41.78C7.97627 42.0309 8.12909 42.2594 8.5124 42.8932Z"
                    fill="#31D2AC"
                  />
                </svg>
              </span>
              <img
                alt="Yellow star"
                loading="lazy"
                width="43"
                height="42"
                className="absolute -top-6 right-1/4"
                src="/assets/images/yellow-star.svg"
              />
              <h2 className="pb-5 text-[26px] font-bold leading-tight text-white">
                A software development partner for modern teams
              </h2>
              <p className="text-xl text-white/80">
                Whether you are building a new product or modernizing an
                existing platform, we bring cross‑functional teams, proven
                processes, and a modern stack to help you ship with confidence.
              </p>
              <div className="mt-10 md:mt-16">
                <Link
                  to="/contact-us"
                  className="btn inline-flex bg-white text-primary hover:bg-purple-800 hover:text-white"
                >
                  Get started now
                </Link>
              </div>
            </div>
            <div
              className="max-w-xs shrink-0 xl:max-w-[484px]"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                alt="Software delivery team"
                loading="lazy"
                width="484"
                height="516"
                src="/assets/images/first-marketing-company.svg"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default ServiceDetail;
