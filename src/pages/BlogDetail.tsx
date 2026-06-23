import { useEffect, useMemo, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { NewsletterSection } from "@/components/NewsletterSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { blogPosts } from "@/data/blogData";

// Helper function to generate slug from text
const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

const latestArticles = blogPosts.slice(0, 2);

const BlogDetail = () => {
  const { blogName } = useParams<{ blogName: string }>();
  const post = blogPosts.find((p) => p.slug === blogName);
  const contentRef = useRef<HTMLDivElement>(null);

  // Generate table of contents from headings
  const tableOfContents = useMemo(() => {
    if (!post) return [];
    return post.content
      .filter((item) => item.type === "heading" && item.level === 2)
      .map((item) => ({
        text: item.text || "",
        id: `h-${generateSlug(item.text || "")}`,
      }));
  }, [post]);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-white">
          Blog post not found
        </h1>
        <Link
          to="/insights"
          className="mt-4 inline-block text-primary hover:underline"
        >
          Back to insights
        </Link>
      </div>
    );
  }

  return (
    <div className="relative pb-14 pt-12 lg:pb-24">
      <div className="w-full max-w-[1536px] mx-auto px-4">
        <div className="flex flex-col items-start gap-7 lg:flex-row">
          {/* Table of Contents - Left Side */}
          <div
            className="w-[320px] sticky top-[130px] hidden xl:block shrink-0"
            style={{ alignSelf: "flex-start" }}
          >
            <div
              className="rounded-[20px] px-5 py-5"
              style={{
                background: "#fafafa",
                border: "1px solid #e0dddd",
                zIndex: 10,
              }}
            >
              <div
                className="mb-2.5 font-semibold"
                style={{
                  fontSize: "15px",
                  color: "#222",
                  fontWeight: 600,
                }}
              >
                Table of content
              </div>
              <ul
                className="flex flex-col gap-2.5 overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar]:rounded-md [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-[#e0dddd] [&::-webkit-scrollbar-thumb]:rounded-md"
                style={{
                  padding: "0 20px 0 0",
                  margin: 0,
                  listStyle: "none",
                  height: "180px",
                  counterReset: "list",
                }}
              >
                {tableOfContents.map((item, index) => (
                  <li key={index} style={{ margin: 0 }}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                      className="block leading-[1.6] transition-all duration-300"
                      style={{
                        fontSize: "13px",
                        color: "#505050",
                        fontWeight: 400,
                        position: "relative",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#222";
                        e.currentTarget.style.fontWeight = "600";
                        e.currentTarget.style.paddingLeft = "20px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#505050";
                        e.currentTarget.style.fontWeight = "400";
                        e.currentTarget.style.paddingLeft = "0";
                      }}
                    >
                      <span
                        style={{
                          counterIncrement: "list",
                        }}
                      >
                        {index + 1}.{" "}
                      </span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Title */}
            <h1 className="text-4xl font-bold leading-snug text-purple-700 dark:text-white md:text-[50px]">
              {post.title}
            </h1>

            {/* Header with Metadata */}
            <div className="my-6 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 md:gap-6">
              {/* Last Updated */}
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM8 14.4C4.46538 14.4 1.6 11.5346 1.6 8C1.6 4.46538 4.46538 1.6 8 1.6C11.5346 1.6 14.4 4.46538 14.4 8C14.4 11.5346 11.5346 14.4 8 14.4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.8 4V8.4L12 10.6L11.2 11.8L7.6 9.2V4H8.8Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Last Updated: {post.lastUpdated}</span>
              </div>

              {/* Post Date */}
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66667 1.33333H4V2.66667H12V1.33333H13.3333V2.66667H14.6667C15.4 2.66667 16 3.26667 16 4V13.3333C16 14.0667 15.4 14.6667 14.6667 14.6667H1.33333C0.6 14.6667 0 14.0667 0 13.3333V4C0 3.26667 0.6 2.66667 1.33333 2.66667H2.66667V1.33333ZM14.6667 13.3333V6.66667H1.33333V13.3333H14.6667ZM3.33333 8H5.33333V10H3.33333V8ZM7.33333 8H9.33333V10H7.33333V8ZM11.3333 8H13.3333V10H11.3333V8Z"
                    fill="currentColor"
                  />
                </svg>
                <span>{post.date}</span>
              </div>

              {/* View Count */}
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2.66667C4.66667 2.66667 1.82 5.07333 0.666667 8.33333C1.82 11.5933 4.66667 14 8 14C11.3333 14 14.18 11.5933 15.3333 8.33333C14.18 5.07333 11.3333 2.66667 8 2.66667ZM8 12C6.16 12 4.66667 10.5067 4.66667 8.66667C4.66667 6.82667 6.16 5.33333 8 5.33333C9.84 5.33333 11.3333 6.82667 11.3333 8.66667C11.3333 10.5067 9.84 12 8 12ZM8 6.66667C7.08 6.66667 6.33333 7.41333 6.33333 8.33333C6.33333 9.25333 7.08 10 8 10C8.92 10 9.66667 9.25333 9.66667 8.33333C9.66667 7.41333 8.92 6.66667 8 6.66667Z"
                    fill="currentColor"
                  />
                </svg>
                <span>587</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-10 overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="relative w-full overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/50 dark:to-purple-800/30">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover object-center "
                  loading="eager"
                />
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="mt-5 space-y-10 leading-relaxed">
              {post.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <div key={index} className="space-y-5">
                      <p className="text-lg">{item.text}</p>
                    </div>
                  );
                }
                if (item.type === "heading") {
                  const HeadingTag = `h${
                    item.level || 2
                  }` as keyof JSX.IntrinsicElements;
                  const headingClasses = {
                    1: "text-4xl font-bold text-purple-700 dark:text-white md:text-5xl mt-12 mb-6 scroll-mt-24",
                    2: "text-3xl font-bold text-purple-700 dark:text-white md:text-4xl mt-10 mb-5 scroll-mt-24",
                    3: "text-2xl font-bold text-purple-700 dark:text-white md:text-3xl mt-8 mb-4 scroll-mt-24",
                    4: "text-xl font-bold text-purple-700 dark:text-white md:text-2xl mt-6 mb-3 scroll-mt-24",
                    5: "text-lg font-bold text-purple-700 dark:text-white md:text-xl mt-5 mb-2 scroll-mt-24",
                    6: "text-base font-bold text-purple-700 dark:text-white md:text-lg mt-4 mb-2 scroll-mt-24",
                  };
                  const headingId =
                    item.level === 2
                      ? `h-${generateSlug(item.text || "")}`
                      : undefined;
                  return (
                    <HeadingTag
                      key={index}
                      id={headingId}
                      className={
                        headingClasses[
                          (item.level || 2) as keyof typeof headingClasses
                        ]
                      }
                    >
                      {item.text}
                    </HeadingTag>
                  );
                }
                if (item.type === "image") {
                  return (
                    <div key={index} className="my-8">
                      <img
                        src={item.image}
                        alt={item.alt || "Blog image"}
                        className="w-full h-auto rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  );
                }
                if (item.type === "code") {
                  return (
                    <div
                      key={index}
                      className="max-w-xl rounded-lg bg-[#9199B51F] px-5 py-2.5 text-center font-medium leading-9"
                    >
                      <span className="text-[#0168FF]">Route </span>
                      <span className="text-[#FB5D70]">:: </span>
                      <span className="text-[#BB4AF3]"> get </span>
                      <span className="text-[#001E2B] dark:text-white">
                        ('/see-my-paycheck',
                      </span>
                      <span className="text-[#0168FF]"> MyController </span>
                      <span className="text-[#FB5D70]"> ::class </span>
                      <span className="text-[#001E2B] dark:text-white">
                        {" "}
                        ){" "}
                      </span>
                      <span className="text-[#FB5D70]">-&gt; </span>
                      <span className="text-[#BB4AF3]"> middleware </span>
                      <span className="text-[#001E2B] dark:text-white">
                        ('require.pin');
                      </span>
                    </div>
                  );
                }
                if (item.type === "list") {
                  return (
                    <ul
                      key={index}
                      className="space-y-3 leading-8 list-disc list-inside"
                    >
                      {item.items?.map((listItem, listIndex) => (
                        <li key={listIndex} className="text-lg">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (item.type === "quote") {
                  return (
                    <div
                      key={index}
                      className="relative max-w-[630px] overflow-hidden rounded-2xl border-s-4 border-primary bg-secondary/5 p-5 font-medium text-primary dark:bg-primary/10"
                    >
                      <p>{item.text}</p>
                      <span className="mt-2 inline-block">{item.author}</span>
                      <span className="absolute bottom-2.5 end-2.5 text-secondary rotate-y-180 rtl:rotate-0 dark:text-purple-400">
                        <svg
                          width="58"
                          height="52"
                          viewBox="0 0 58 52"
                          fill="none"
                        >
                          <g opacity="0.06">
                            <path
                              d="M4.14496 0H20.7251C23.0131 0 24.8701 1.94133 24.8701 4.33333V21.6667C24.8701 24.0587 23.0131 26 20.7251 26H8.28999C8.28999 35.5595 15.7261 43.3333 24.8701 43.3333V52C11.1536 52 -7.05719e-05 40.3391 -7.05719e-05 26V4.33333C-7.05719e-05 1.94133 1.8569 0 4.14496 0Z"
                              fill="currentColor"
                            />
                            <path
                              d="M37.2739 0H53.854C56.142 0 57.999 1.94133 57.999 4.33333V21.6667C57.999 24.0587 56.142 26 53.854 26H41.4189C41.4189 35.5595 48.855 43.3333 57.999 43.3333V52C44.2825 52 33.1288 40.3391 33.1288 26V4.33333C33.1288 1.94133 34.9858 0 37.2739 0Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                    </div>
                  );
                }
                if (item.type === "numberedList") {
                  return (
                    <ol
                      key={index}
                      className="space-y-4 list-decimal list-inside"
                    >
                      {item.items?.map((listItem, listIndex) => (
                        <li key={listIndex} className="text-lg">
                          {listItem}
                        </li>
                      ))}
                    </ol>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Get a Quote - Right Side */}
          <div
            className="w-[320px] sticky top-[130px] hidden xl:block shrink-0"
            style={{ alignSelf: "flex-start" }}
          >
            <div
              className="rounded-[20px] px-5 py-5"
              style={{
                background: "#fafafa",
                border: "1px solid #e0dddd",
                zIndex: 10,
              }}
            >
              <div
                className="mb-4 font-semibold"
                style={{
                  fontSize: "18px",
                  color: "#222",
                  fontWeight: 600,
                }}
              >
                Get a Quote
              </div>
              <p
                className="mb-5 leading-relaxed"
                style={{
                  fontSize: "14px",
                  color: "#505050",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                Need help with your project? Let's discuss how we can bring your
                ideas to life.
              </p>
              <Link
                to="/contact-us"
                className="btn w-full text-center text-base font-bold uppercase bg-primary text-white hover:bg-secondary"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
              >
                Request Quote
              </Link>
              <div
                className="mt-5 pt-5"
                style={{ borderTop: "1px solid #e0dddd" }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-8 w-8 shrink-0">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32"
                        height="32"
                        rx="16"
                        fill="#806BFF"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M16 10C13.7909 10 12 11.7909 12 14C12 16.2091 13.7909 18 16 18C18.2091 18 20 16.2091 20 14C20 11.7909 18.2091 10 16 10ZM16 16.5C14.6193 16.5 13.5 15.3807 13.5 14C13.5 12.6193 14.6193 11.5 16 11.5C17.3807 11.5 18.5 12.6193 18.5 14C18.5 15.3807 17.3807 16.5 16 16.5Z"
                        fill="#806BFF"
                      />
                      <path
                        d="M16 19.5C12.4101 19.5 9.5 20.4101 9.5 22V23.5H22.5V22C22.5 20.4101 19.5899 19.5 16 19.5ZM10.5 21.5C10.5 21.2239 11.2239 20.5 16 20.5C20.7761 20.5 21.5 21.2239 21.5 21.5V22H10.5V21.5Z"
                        fill="#806BFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#222",
                        fontWeight: 600,
                      }}
                    >
                      Expert Team
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#505050",
                        fontWeight: 400,
                      }}
                    >
                      Professional developers
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-8 w-8 shrink-0">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32"
                        height="32"
                        rx="16"
                        fill="#806BFF"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10ZM16 20.5C13.5147 20.5 11.5 18.4853 11.5 16C11.5 13.5147 13.5147 11.5 16 11.5C18.4853 11.5 20.5 13.5147 20.5 16C20.5 18.4853 18.4853 20.5 16 20.5Z"
                        fill="#806BFF"
                      />
                      <path
                        d="M16 8.5C15.5858 8.5 15.25 8.83579 15.25 9.25V15.25C15.25 15.6642 15.5858 16 16 16C16.4142 16 16.75 15.6642 16.75 15.25V9.25C16.75 8.83579 16.4142 8.5 16 8.5Z"
                        fill="#806BFF"
                      />
                      <path
                        d="M16 17C16.4142 17 16.75 17.3358 16.75 17.75V22.75C16.75 23.1642 16.4142 23.5 16 23.5C15.5858 23.5 15.25 23.1642 15.25 22.75V17.75C15.25 17.3358 15.5858 17 16 17Z"
                        fill="#806BFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#222",
                        fontWeight: 600,
                      }}
                    >
                      Fast Delivery
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#505050",
                        fontWeight: 400,
                      }}
                    >
                      Quick turnaround time
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 shrink-0">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32"
                        height="32"
                        rx="16"
                        fill="#806BFF"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M16 10C13.7909 10 12 11.7909 12 14C12 16.2091 13.7909 18 16 18C18.2091 18 20 16.2091 20 14C20 11.7909 18.2091 10 16 10ZM16 16.5C14.6193 16.5 13.5 15.3807 13.5 14C13.5 12.6193 14.6193 11.5 16 11.5C17.3807 11.5 18.5 12.6193 18.5 14C18.5 15.3807 17.3807 16.5 16 16.5Z"
                        fill="#806BFF"
                      />
                      <path
                        d="M22.5 12.5C22.9142 12.5 23.25 12.8358 23.25 13.25C23.25 13.6642 22.9142 14 22.5 14C22.0858 14 21.75 13.6642 21.75 13.25C21.75 12.8358 22.0858 12.5 22.5 12.5Z"
                        fill="#806BFF"
                      />
                      <path
                        d="M9.5 13.25C9.5 12.8358 9.83579 12.5 10.25 12.5C10.6642 12.5 11 12.8358 11 13.25C11 13.6642 10.6642 14 10.25 14C9.83579 14 9.5 13.6642 9.5 13.25Z"
                        fill="#806BFF"
                      />
                      <path
                        d="M16 19.5C12.4101 19.5 9.5 20.4101 9.5 22V23.5H22.5V22C22.5 20.4101 19.5899 19.5 16 19.5ZM10.5 21.5C10.5 21.2239 11.2239 20.5 16 20.5C20.7761 20.5 21.5 21.2239 21.5 21.5V22H10.5V21.5Z"
                        fill="#806BFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#222",
                        fontWeight: 600,
                      }}
                    >
                      24/7 Support
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#505050",
                        fontWeight: 400,
                      }}
                    >
                      Always here to help
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Articles Section */}
        <div className="py-16 lg:py-24">
          <div className="mx-auto pb-14 text-center lg:w-2/3 lg:pb-20">
            <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">
              Latest Articles
            </h2>
            <p className="text-lg md:text-xl">
              Insights from our engineering teams on AI, healthcare, fintech,
              automation, and modern web development.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-10 xl:grid-cols-2 xl:gap-y-16">
            {latestArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col overflow-hidden rounded-2xl dark:bg-purple-900 sm:flex-row"
              >
                <div className="shrink-0 sm:w-2/5 2xl:w-[366px]">
                  <img
                    src={article.image}
                    alt="Blog image"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 py-6 text-center sm:p-7 sm:ltr:text-left sm:rtl:text-right">
                  <div className="mb-7 flex flex-wrap justify-center gap-3 text-base font-semibold leading-5 sm:justify-start">
                    <span className="rounded-full bg-primary/10 px-5 py-2.5 text-primary">
                      {article.date}
                    </span>
                  </div>
                  <div className="mb-6 space-y-4">
                    <Link
                      to={`/insights/${article.slug}`}
                      className="line-clamp-2 text-22 font-semibold text-purple-700 duration-300 hover:text-primary dark:text-white"
                    >
                      {article.title}
                    </Link>
                    <p className="line-clamp-3 text-lg/6">{article.excerpt}</p>
                  </div>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="relative start-0 text-base font-semibold text-primary duration-300 hover:start-2 hover:text-secondary dark:hover:text-white"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <NewsletterSection />
      </div>
    </div>
  );
};

export default BlogDetail;
