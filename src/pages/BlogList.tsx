import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { blogPosts } from "@/data/blogData";

const BlogList = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white font-jakarta text-lg font-normal text-purple-500 antialiased dark:bg-secondary">
      <img
        src="/assets/images/top-right-curv.svg"
        alt="Arrow right"
        className="absolute right-0 top-0 hidden lg:block"
        data-aos="fade-down"
        data-aos-duration="2000"
      />

      {/* Inner Content */}
      <div>
        <div className="py-14 lg:pb-32">
          <div className="mx-auto max-w-[1536px] px-4">
            {/* Hero Section */}
            <div
              className="relative mx-auto max-w-4xl pb-14 text-center lg:pb-28"
              data-aos="fade-up"
            >
              <span
                className="absolute -left-96 top-24 aos-init aos-animate"
                data-aos="slide-right"
                data-aos-duration="2000"
              >
                <svg width="488" height="124" viewBox="0 0 488 124" fill="none">
                  <path
                    opacity="0.6"
                    d="M485 3H293.31C265.695 3 243.31 25.3858 243.31 53V71C243.31 98.6142 220.924 121 193.31 121H0"
                    stroke="url(#paint0_radial_434_1170)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_434_1170"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(177.5 -59.5) scale(228 204.246)"
                    >
                      <stop stopColor="#806BFF"></stop>
                      <stop
                        offset="1"
                        stopColor="#806BFF"
                        stopOpacity="0"
                      ></stop>
                    </radialGradient>
                  </defs>
                </svg>
              </span>
              <h1 className="mb-8 text-4xl font-extrabold leading-tight text-purple-700 dark:text-white md:mb-8 lg:px-10 lg:text-[56px]">
                Insights on modern software development
              </h1>
              <p className="text-lg md:text-22 xl:px-10">
                Articles from our engineering teams on AI, healthcare, fintech,
                automation, and building reliable products with modern web
                technologies.
              </p>
            </div>

            {/* Blog Posts Section */}
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl border-2 border-[#9199B5]/[0.12] bg-white shadow-[0_0_80px_rgba(119,128,161,0.1)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.15)] dark:bg-purple-900 dark:shadow-none"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                >
                  <Link to={`/insights/${post.slug}`} className="block">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-4 flex items-center gap-3 text-sm text-purple-600 dark:text-purple-400">
                        <span>{post.date}</span>
                      </div>
                      <h2 className="mb-3 text-xl font-semibold leading-tight text-purple-700 transition-colors duration-300 group-hover:text-primary dark:text-white">
                        {post.title}
                      </h2>
                      <p className="mb-4 line-clamp-3 text-base leading-normal text-purple-600 dark:text-purple-400">
                        {post.excerpt}
                      </p>
                      <span className="relative start-0 inline-flex items-center gap-2 text-base font-semibold text-primary duration-300 hover:start-2 hover:text-secondary dark:hover:text-white">
                        Read more
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path
                            d="M6 12L10 8L6 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Newsletter Section */}
        <NewsletterSection />
      </div>
    </div>
  );
};

export default BlogList;
