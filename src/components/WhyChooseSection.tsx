import { Link } from "react-router-dom";

export const WhyChooseSection = () => {
  return (
    <div className="overflow-x-hidden py-12 sm:py-16 lg:pb-44 lg:pt-32">
      <div className="relative mx-auto max-w-[1142px] gap-5 px-4 lg:flex">
        <img
          loading="lazy"
          src="/assets/images/why-choose-bg.svg"
          alt="Why choose bg"
          className="absolute right-0 top-0 hidden xl:block xl:-right-44 xl:-top-12"
        />
        <div className="relative mx-auto w-full shrink-0 sm:w-1/2 lg:mx-0 lg:w-auto">
          <span
            className="absolute end-1/3 top-1/4 hidden lg:block"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <svg width="811" height="441" viewBox="0 0 811 441" fill="none">
              <path
                opacity="0.2"
                d="M2 150H323.69C340.259 150 353.69 136.569 353.69 120V32C353.69 15.4315 367.122 2 383.69 2H808.5"
                stroke="url(#paint0_radial_69_208)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                opacity="0.2"
                d="M135 439L545.5 439L676 439L779 439C795.569 439 809 425.569 809 409L809 2.50003"
                stroke="url(#paint1_radial_69_208)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_69_208"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(429.5 -10.5) rotate(159.422) scale(456.636 382.773)"
                >
                  <stop stopColor="#806BFF" />
                  <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_69_208"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(749 355.5) rotate(170.679) scale(414.979 404.919)"
                >
                  <stop stopColor="#806BFF" />
                  <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </span>
          <div
            className="relative w-1/2 overflow-hidden rounded-lg"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              loading="lazy"
              src="/assets/images/advance-tracking.jpg"
              alt="Advance tracking"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="relative ms-auto w-1/2 overflow-hidden rounded-lg lg:-mt-10 lg:me-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              loading="lazy"
              src="/assets/images/depth-monitoring.jpg"
              alt="Depth monitoring"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="relative mt-8 w-full lg:mt-0 lg:w-auto">
          <div className="pb-8 text-center sm:pb-10 lg:pb-14 lg:ltr:text-left lg:rtl:text-right">
            <h2 className="mb-4 text-xl leading-[1.75] font-bold text-purple-700 dark:text-white sm:mb-5 sm:text-2xl md:text-[26px]">
              Why software teams choose us
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              We combine deep engineering expertise with domain knowledge in AI,
              healthcare, and fintech.
            </p>
          </div>
          <div className="space-y-8 pb-8 sm:space-y-12 sm:pb-10 lg:pb-16">
            <div className="flex gap-3 leading-6 sm:gap-4 md:gap-8">
              <span className="shrink-0">
                <img
                  loading="lazy"
                  src="/assets/images/advance-tracking-icon.svg"
                  alt="Advance tracking icon"
                  className="h-8 w-8 sm:h-10 sm:w-10"
                />
              </span>
              <div>
                <h3 className="pb-3 text-lg font-semibold text-purple-700 dark:text-white sm:pb-4 sm:text-xl md:text-22">
                  Senior engineering talent
                </h3>
                <p className="text-sm sm:text-base">
                  Full‑stack engineers experienced with React, Next.js,
                  TypeScript, Java, and cloud services delivering production‑
                  ready systems.
                </p>
              </div>
            </div>
            <div className="flex gap-3 leading-6 sm:gap-4 md:gap-8">
              <span className="shrink-0">
                <img
                  loading="lazy"
                  src="/assets/images/depth-monitoring-icon.svg"
                  alt="Depth monitoring icon"
                  className="h-8 w-8 sm:h-10 sm:w-10"
                />
              </span>
              <div>
                <h3 className="pb-3 text-lg font-semibold text-purple-700 dark:text-white sm:pb-4 sm:text-xl md:text-22">
                  Regulated industry experience
                </h3>
                <p className="text-sm sm:text-base">
                  Proven delivery in healthcare and fintech, with a strong focus
                  on data privacy, compliance, observability, and reliability.
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex text-center lg:ltr:text-left lg:rtl:text-right">
            <Link to="/about-us" className="btn text-sm sm:text-base">
              About us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
