import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { portfolioItems, filters } from "@/data/portfolioData";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full max-w-[1536px] mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-x-hidden max-w-[1536px] mx-auto lg:pb-4">
        <div className="mx-auto px-4">
          <div className="mx-auto pb-10 text-center lg:pb-16 pt-[64px]">
            <h1
              className="mb-8 text-4xl font-extrabold text-purple-700 dark:text-white md:mb-12 lg:text-7xl/tight"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Explore our software projects
            </h1>
            <p className="text-lg md:text-22 lg:px-10 text-purple-600 dark:text-purple-300">
              A selection of AI, healthcare, fintech, and automation projects
              delivered by our team across web, mobile, and cloud platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mx-auto px-4 pb-10 lg:pb-14">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-purple-200 text-purple-700 hover:border-primary hover:text-primary dark:border-purple-800 dark:text-purple-200"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="mx-auto px-4 pb-16 lg:pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border-2 border-[#9199B5]/[0.12] bg-white shadow-[0_0_80px_rgba(119,128,161,0.1)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.15)] dark:bg-purple-900 dark:shadow-none"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 100}
            >
              <Link to={`/case-studies/${item.slug}`} className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur items-center gap-2  uppercase tracking-wide text-primary border border-primary">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    {item.category}
                  </div>
                </div>
              </Link>
              <div className="flex flex-col gap-4 px-6 py-6">
                <div className="left-4 top-4 flex gap-2">
                  {item.type.split(",").map((type, index) => (
                    <span
                      className={`rounded-full bg-white/90 px-3 border py-1 text-xs font-semibold text-purple-700 shadow-sm backdrop-blur ${
                        index === 0 ? "bg-primary" : "bg-secondary"
                      }`}
                      key={type}
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-purple-800 transition-colors duration-300 group-hover:text-primary dark:text-white">
                  {item.title}
                </h2>
                <p className="line-clamp-3 text-sm text-purple-600 dark:text-purple-300">
                  {item.id === 1
                    ? "Where your personal AIs aren't just bots, they're whole vibes in human form. Chat, share photos, and take pics together in a social scene where AIs and humans actually hang."
                    : item.id === 2
                    ? "Cloud VoIP phone systems and unified communications tools that combine voice, video, chat, and integrations in one platform so businesses can stay connected from any location with reliable call quality and US-based support."
                    : item.id === 3
                    ? "A professional sports league app that captures and plays back all camera angles from all matches, live and on demand. Used on the field to add markers in real-time with multicam switching capabilities."
                    : item.id === 4
                    ? "An automation workflow that transcribes voice notes from Slack, generates content using AI, saves to Airtable, and automatically posts to social media platforms. Supports images, text, and carousel posts for Instagram."
                    : item.id === 5
                    ? "A custom Java-based point of sale system for a historic downtown West Palm Beach bar and restaurant. Features sales management, inventory tracking, barcode scanning, receipt printing, and comprehensive reporting for a busy neighborhood pub serving 64+ beers on tap and award-winning wings."
                    : item.id === 6
                    ? "Sally is your smart AI assistant for every conversation. She joins online meetings, automatically transcribes discussions, and generates concise summaries. Upload audio or video files or record conversations on-site with the mobile app. Detects tasks, highlights key points, and integrates with 5,000+ business tools—secure, fast, and fully GDPR-compliant."
                    : item.id === 7
                    ? "Vocca is a healthcare-focused voice and text AI platform that automates patient communication for medical groups and practices. It uses conversational AI agents to handle inbound and outbound calls, appointment bookings, reminders, and common patient questions 24/7, reducing no-shows and saving hours per receptionist each day with healthcare-grade security and HIPAA compliance."
                    : item.id === 8
                    ? "MESH revolutionizes fantasy football by introducing squad-based management leagues where entire groups manage roster teams together. Features include rolling drafts across multiple days, weekly lineup voting, collaborative trades and waivers, and league competition powered by group decisions. Whether with friends, fraternity, club, or coworkers, MESH turns 'my fantasy team' into 'our fantasy team'."
                    : "Modern, cloud‑ready solutions built with robust architecture, clean user experiences, and automation that supports real business outcomes."}
                </p>
                <div className="mt-2 flex items-center justify-between text-sm text-purple-500 dark:text-purple-300">
                  <span>Completed in {item.complatedIn}</span>
                  <Link
                    to={`/case-studies/${item.slug}`}
                    className="inline-flex items-center gap-1 text-primary hover:text-purple-500 dark:text-purple-300 duration-300"
                  >
                    <span className="relative start-0 inline-flex items-center gap-2 text-base font-semibold text-primary duration-300 hover:text-secondary dark:hover:text-white">
                      View case study
                    </span>
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
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Testimonials Section (from Optivraflow layout) */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Portfolio;
