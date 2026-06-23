export const NewsletterSection = () => {
  return (
    <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-0">
      <div className="relative mx-auto flex w-full max-w-[1536px] flex-col items-center justify-between gap-x-4 gap-y-6 bg-primary px-5 py-8 text-white dark:bg-purple-900 sm:gap-y-10 sm:px-8 sm:py-11 md:mb-10 md:px-16 lg:flex-row xl:rounded-lg">
        {/* Dark overlay for better contrast on top of background images */}
        <div className="pointer-events-none absolute inset-0 rounded-lg bg-black/40 dark:bg-black/30" />
        <img
          src="/assets/images/news-latter-light.png"
          alt="News latter"
          className="absolute left-0 top-0 flex h-full w-full object-cover dark:hidden"
        />
        <img
          loading="lazy"
          src="/assets/images/news-latter-dark.png"
          alt="News latter"
          className="absolute left-0 top-0 hidden h-full w-full object-cover dark:flex"
        />
        <div className="relative z-10 w-full text-center lg:w-auto lg:ltr:text-left lg:rtl:text-right">
          <h2 className="pb-2 text-2xl font-extrabold leading-tight text-white sm:pb-3 sm:text-3xl md:text-[40px]">
            Newsletter
          </h2>
          <p className="text-sm text-purple-100 dark:text-purple-100/90 sm:text-base">
            Stay updated with the latest tech trends, development insights, and
            exclusive project showcases delivered to your inbox.
          </p>
        </div>
        <div className="relative z-10 flex w-full flex-col gap-3 text-center sm:flex-row sm:max-w-md">
          <input
            type="text"
            placeholder="Enter email address"
            className="w-full rounded-lg border border-white/70 bg-white/95 px-4 py-2.5 text-sm text-purple-900 placeholder:text-purple-400 focus:outline-none focus:border-white sm:rounded-s-lg sm:rounded-e-none sm:border-r-0 sm:px-5 sm:py-3 sm:text-base"
          />
          <button
            type="button"
            className="btn w-full rounded-lg border border-white/80 bg-secondary text-white py-2.5 text-sm hover:bg-white hover:text-secondary sm:w-auto sm:rounded-s-none sm:rounded-e-lg sm:py-2 sm:text-base"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
