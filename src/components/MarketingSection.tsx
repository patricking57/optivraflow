import { Link } from "react-router-dom";

export const MarketingSection = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="mx-auto max-w-[1142px] px-4">
        <div className="relative mx-auto pb-8 text-center sm:pb-10 lg:w-2/3 lg:pb-14">
          <img
            loading="lazy"
            src="/assets/images/pink-star.svg"
            alt="Pink star"
            className="absolute -right-24 top-10 hidden lg:block"
          />
          <h2 className="mb-4 text-xl leading-[1.75] font-bold text-purple-700 dark:text-white sm:mb-5 sm:text-2xl md:text-[26px]">
            Software development services that ship
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            We design, build, and maintain custom web, mobile, and cloud
            software—covering product engineering, AI capabilities, and
            cloud-native delivery.
          </p>
        </div>
        <div className="relative flex flex-col gap-6 sm:gap-[30px] lg:grid lg:grid-cols-3">
          <span
            className="absolute -top-14 right-full"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <svg width="144" height="61" viewBox="0 0 144 61" fill="none">
              <path
                opacity="0.3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M143.669 56.7802C143.517 56.096 142.839 55.6647 142.154 55.8167C102.832 64.555 73.5893 49.184 66.834 27.4292C70.9798 26.3058 74.8366 24.5663 77.8865 22.0012C81.8467 18.6706 84.3828 13.9965 84.454 7.70868C84.495 4.08308 81.2848 1.03613 77.5491 1.90523C67.4494 4.25488 61.2828 15.2435 63.6806 25.5707C63.3903 25.6305 63.0984 25.6876 62.8051 25.742C49.374 27.7196 38.5879 25.7366 29.0415 21.1425C20.2651 16.919 12.4823 10.4634 4.62742 2.70948L12.957 2.76647C13.6578 2.77126 14.2299 2.20699 14.2347 1.50612C14.2395 0.805266 13.6752 0.23321 12.9743 0.228414L1.55308 0.150267C0.852227 0.145482 0.280179 0.709761 0.275378 1.41062L0.197236 12.8319C0.192435 13.5327 0.756717 14.1048 1.45758 14.1096C2.15845 14.1144 2.73049 13.5501 2.7353 12.8492L2.79265 4.46481C10.7456 12.3215 18.7798 19.0209 27.9409 23.4296C37.964 28.2531 49.271 30.3045 63.1986 28.2496L63.2216 28.2462L63.2445 28.2419C63.6177 28.1728 63.9898 28.0995 64.3604 28.0217C71.5632 51.6528 102.637 67.1985 142.705 58.2944C143.389 58.1423 143.821 57.4644 143.669 56.7802ZM66.1499 24.985C64.0406 15.8938 69.5314 6.3764 78.1242 4.37732C80.0557 3.92797 81.9408 5.48736 81.916 7.67994C81.8534 13.2063 79.6646 17.1893 76.2529 20.0587C73.5538 22.3287 70.0515 23.9301 66.1499 24.985Z"
                fill="url(#paint0_linear_121_108)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_121_108"
                  x1="136.201"
                  y1="59.8017"
                  x2="1.58355"
                  y2="8.50293"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7780A1" stopOpacity="0" />
                  <stop offset="0.0001" stopColor="#1A1036" stopOpacity="0" />
                  <stop offset="1" stopColor="#1A1036" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span
            className="absolute bottom-0 left-[85%]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <svg width="572" height="583" viewBox="0 0 572 583" fill="none">
              <path
                opacity="0.2"
                d="M2 150H323.69C340.259 150 353.69 136.569 353.69 120V32C353.69 15.4315 367.122 2 383.69 2H570"
                stroke="url(#paint0_radial_67_199)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                opacity="0.2"
                d="M2 433H323.69C340.259 433 353.69 446.431 353.69 463V551C353.69 567.569 367.122 581 383.69 581H570"
                stroke="url(#paint1_radial_67_199)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_67_199"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(339.5 150) rotate(-180) scale(337.5 189.41)"
                >
                  <stop stopColor="#806BFF" />
                  <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_67_199"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(339.5 433) rotate(180) scale(337.5 189.41)"
                >
                  <stop stopColor="#806BFF" />
                  <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </span>
          <div className="relative inline-flex w-full flex-col justify-between gap-6 rounded-lg bg-green px-4 pt-8 leading-6 text-white sm:gap-10 sm:px-7 sm:pt-10 lg:col-span-1">
            <div>
              <h3 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl md:text-22">
                Custom Web & SaaS Development
              </h3>
              <p className="text-sm sm:text-base">
                End‑to‑end product development with modern stacks (React,
                Next.js, TypeScript) and scalable backends deployed to your
                preferred cloud.
              </p>
              <Link
                to="/service-list/custom-web-app-development"
                className="group mt-6 inline-flex items-center gap-2.5 text-sm font-semibold sm:mt-10 sm:text-base"
              >
                <span>Learn more</span>
                <span className="relative start-0 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-white/40 to-50% duration-300 group-hover:start-1 rtl:rotate-180">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path
                      d="M12.9 3.53991L10.06 0.689912C9.77 0.399912 9.29 0.399912 9 0.689912C8.71 0.979912 8.71 1.45991 9 1.74991L10.56 3.30991H0.989998C0.579998 3.30991 0.239998 3.64991 0.239998 4.05991C0.239998 4.46991 0.579998 4.80991 0.989998 4.80991H10.56L9 6.37991C8.71 6.66991 8.71 7.14991 9 7.43991C9.15 7.58991 9.34 7.65991 9.53 7.65991C9.72 7.65991 9.91 7.58991 10.06 7.43991L12.9 4.58991C13.2 4.29991 13.2 3.82991 12.9 3.53991Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="overflow-hidden rounded-t-lg lg:h-48">
              <img
                loading="lazy"
                src="/assets/images/marketing-automation.jpg"
                alt="Marketing automation"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative inline-flex w-full flex-col justify-between gap-6 rounded-lg bg-primary px-4 pt-8 leading-6 text-white sm:gap-10 sm:px-7 sm:pt-10 lg:col-span-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl md:text-22">
                AI Products & Intelligent Automation
              </h3>
              <p className="text-sm sm:text-base">
                Design and ship AI features—search, recommendations, copilots,
                and workflow automations—tailored to your domain and data.
              </p>
              <Link
                to="/service-list/ai-product-engineering"
                className="group mt-6 inline-flex items-center gap-2.5 text-sm font-semibold sm:mt-10 sm:text-base"
              >
                <span>Learn more</span>
                <span className="relative start-0 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-white/40 to-50% duration-300 group-hover:start-1 rtl:rotate-180">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path
                      d="M12.9 3.53991L10.06 0.689912C9.77 0.399912 9.29 0.399912 9 0.689912C8.71 0.979912 8.71 1.45991 9 1.74991L10.56 3.30991H0.989998C0.579998 3.30991 0.239998 3.64991 0.239998 4.05991C0.239998 4.46991 0.579998 4.80991 0.989998 4.80991H10.56L9 6.37991C8.71 6.66991 8.71 7.14991 9 7.43991C9.15 7.58991 9.34 7.65991 9.53 7.65991C9.72 7.65991 9.91 7.58991 10.06 7.43991L12.9 4.58991C13.2 4.29991 13.2 3.82991 12.9 3.53991Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="overflow-hidden rounded-t-lg lg:h-40">
              <img
                loading="lazy"
                src="/assets/images/content-marketing.jpg"
                alt="Content marketing"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative inline-flex w-full flex-col justify-between gap-6 rounded-lg bg-yellow px-4 pt-8 leading-6 text-secondary sm:gap-10 sm:px-7 sm:pt-10 lg:col-span-3 lg:flex-row lg:gap-7">
            <div>
              <h3 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl md:text-22">
                Cloud, DevOps & Ongoing Delivery
              </h3>
              <p className="text-sm sm:text-base">
                Modernize infrastructure, automate CI/CD, and keep products
                healthy with observability, security, and continuous iteration
                after launch.
              </p>
              <Link
                to="/service-list/cloud-devops-automation"
                className="group mt-6 inline-flex items-center gap-2.5 text-sm font-semibold sm:mt-10 sm:text-base"
              >
                <span>Learn more</span>
                <span className="relative start-0 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-secondary/40 to-50% duration-300 group-hover:start-1 rtl:rotate-180">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path
                      d="M12.9 3.53991L10.06 0.689912C9.77 0.399912 9.29 0.399912 9 0.689912C8.71 0.979912 8.71 1.45991 9 1.74991L10.56 3.30991H0.989998C0.579998 3.30991 0.239998 3.64991 0.239998 4.05991C0.239998 4.46991 0.579998 4.80991 0.989998 4.80991H10.56L9 6.37991C8.71 6.66991 8.71 7.14991 9 7.43991C9.15 7.58991 9.34 7.65991 9.53 7.65991C9.72 7.65991 9.91 7.58991 10.06 7.43991L12.9 4.58991C13.2 4.29991 13.2 3.82991 12.9 3.53991Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="w-full overflow-hidden rounded-t-lg lg:h-56 lg:max-w-lg">
              <img
                loading="lazy"
                src="/assets/images/social-media-marketing.jpg"
                alt="Media marketing"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
