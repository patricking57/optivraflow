export const ProcessSection = () => {
  return (
    <div className="overflow-x-hidden pt-12 sm:pt-16 lg:pt-36">
      <div className="mx-auto flex max-w-[1142px] flex-col items-center gap-5 px-4 md:flex-row">
        <div className="w-full shrink-0 md:w-3/5">
          <div className="pb-8 text-center sm:pb-10 md:ltr:text-left md:rtl:text-right lg:w-2/3 lg:pb-14">
            <h2 className="mb-4 text-xl leading-[1.75] font-bold text-purple-700 dark:text-white sm:mb-5 sm:text-2xl md:text-[26px]">
              Our software delivery process
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              A simple, transparent, and repeatable way to ship great products.
            </p>
          </div>
          <div className="space-y-4 leading-6 sm:space-y-6 md:space-y-10">
            <div className="group rounded-lg bg-linear-to-b to-transparent p-4 hover:from-primary/[0.16]">
              <h3 className="pb-3 text-lg font-semibold text-purple-700 duration-300 group-hover:text-primary dark:text-white sm:pb-4 sm:text-xl md:text-22">
                1. Discovery & Solution Design
              </h3>
              <p className="text-sm sm:text-base">
                We clarify your goals, users, and constraints, then design a
                solution architecture, tech stack, and delivery roadmap that fit
                your business.
              </p>
            </div>
            <div className="group rounded-lg bg-linear-to-b to-transparent p-4 hover:from-primary/[0.16]">
              <h3 className="pb-3 text-lg font-semibold text-purple-700 duration-300 group-hover:text-primary dark:text-white sm:pb-4 sm:text-xl md:text-22">
                2. Implementation & Testing
              </h3>
              <p className="text-sm sm:text-base">
                Cross‑functional teams deliver in iterations, with code reviews,
                automated testing, and regular demos so you can see progress
                early and often.
              </p>
            </div>
            <div className="group rounded-lg bg-linear-to-b to-transparent p-4 hover:from-primary/[0.16]">
              <h3 className="pb-3 text-lg font-semibold text-purple-700 duration-300 group-hover:text-primary dark:text-white sm:pb-4 sm:text-xl md:text-22">
                3. Launch, Optimize & Scale
              </h3>
              <p className="text-sm sm:text-base">
                We deploy to cloud, monitor real usage, and continuously refine
                performance, security, and features as your product and user
                base grow.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full md:-me-[19%] md:w-2/5 xl:ms-14"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            loading="lazy"
            src="/assets/images/our-process.png"
            alt="Our process"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
