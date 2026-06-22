import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { stats } from "@/data/statsData";

export const HeroSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    // Animate counters
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters((prev) =>
        stats.map((stat, index) => {
          const target = stat.value;
          const current = prev[index];
          const increment = (target - current) * 0.1;
          return Math.min(current + increment, target);
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      animate();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="relative mx-auto max-w-[1142px] px-4">
        <img
          src="/assets/images/hero-banner-users.svg"
          alt="Hero banner user"
          className="absolute -right-28 top-0 hidden w-52 lg:block xl:-right-96 xl:top-11 xl:w-96"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
        <div className="absolute -left-96 top-36 hidden lg:block">
          <span className="absolute right-0 top-0 z-1 inline-flex rounded-full bg-secondary p-2 dark:bg-purple-700">
            <img
              loading="lazy"
              src="/assets/images/hero-banner-space-circle.svg"
              alt="space-circle"
            />
          </span>
          <img
            loading="lazy"
            src="/assets/images/hero-banner-space-img-2.svg"
            alt="Space image"
            className="relative right-0 top-20"
          />
        </div>
        <div className="relative mx-auto pt-20 text-center sm:pt-32 md:pt-40 lg:max-w-[965px]">
          <img
            loading="lazy"
            src="/assets/images/banner-bg-shape.png"
            alt="Banner bg shape"
            className="absolute bottom-14 left-1/2 hidden -translate-x-1/2 sm:block"
          />
          <div className="relative mb-6 sm:mb-8 md:mb-12">
            <button
              type="button"
              className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#806BFF26] px-3 py-2 text-sm font-semibold text-primary duration-300 hover:bg-primary hover:text-white sm:-top-20 sm:px-4 sm:py-3 sm:text-base md:-top-24 md:left-[9%] md:translate-x-0 lg:left-[15%]"
            >
              <span>Optivraflow</span>
            </button>
            <img
              loading="lazy"
              src="/assets/images/hero-banner-longarrow.svg"
              alt="Long arrow"
              className="absolute -bottom-10 left-[37%] hidden md:block"
            />
            <div
              className="text-3xl font-extrabold leading-tight! text-purple-700 dark:text-white sm:text-4xl md:text-5xl lg:text-7xl lg:px-24"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h1 className="relative inline-block px-2 sm:px-0">
                We build intelligent{" "}
                <img
                  loading="lazy"
                  src="/assets/images/banner-lady.svg"
                  alt="Engineer illustration"
                  className="absolute left-full top-0 hidden pl-3 sm:block"
                />
                software products
              </h1>
            </div>
          </div>
          <p className="relative mb-6 text-base dark:text-purple-300 sm:mb-10 sm:text-lg md:text-22">
            We build secure, cloud‑native applications for{" "}
            <span className="font-semibold">
              AI, healthcare, e-commerce and fintech
            </span>
            .
          </p>
          <Link to="/contact-us" className="btn inline-flex text-sm sm:text-base">
            Talk to our team
          </Link>
        </div>
      </div>
      <div className="py-12 sm:py-16 lg:pb-44 lg:pt-40">
        <div className="relative mx-auto grid max-w-[1142px] grid-cols-2 gap-x-3 gap-y-8 px-4 text-center text-sm font-medium sm:gap-x-4 sm:gap-y-10 sm:text-base md:grid-cols-4 lg:text-22">
          <span className="absolute left-0 top-1/2 hidden w-full -translate-y-1/2 text-purple-300 dark:text-purple-800 lg:block">
            <svg width="100%" height="256" viewBox="0 0 1108 256" fill="none">
              <path
                d="M2 85V134C2 200.274 55.7258 254 122 254H158C224.274 254 278 200.274 278 134V122C278 55.7258 331.726 2 398 2H434C500.274 2 554 55.7258 554 122V134C554 200.274 607.726 254 674 254H710C776.274 254 830 200.274 830 134V122C830 55.7258 883.726 2 950 2H986C1052.27 2 1106 55.7258 1106 122V173"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 sm:space-y-3 md:space-y-5">
              <h3 className="text-2xl font-extrabold text-purple-700 dark:text-white sm:text-3xl md:text-[40px] md:leading-[1.1]">
                {counters[index].toFixed(stat.value % 1 !== 0 ? 1 : 0)}
                {stat.suffix}
              </h3>
              <div className="text-xs sm:text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
