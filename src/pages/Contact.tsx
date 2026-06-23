import { useEffect, useState } from "react";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { useToast } from "@/hooks/use-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { NewsletterSection } from "@/components/NewsletterSection";
import { contactItems } from "@/data/contactData";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <div className="overflow-x-hidden pb-16 pt-10 md:pt-16 lg:pb-32">
        <div className="mx-auto max-w-[1536px] px-4">
          <div className="relative">
            <img
              alt="Chat image"
              loading="lazy"
              width="77"
              height="95"
              className="absolute end-10 top-0 hidden lg:block"
              src="/assets/images/chat.svg"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
            <div className="relative mx-auto max-w-[1142px] pb-14 text-center xl:pb-24">
              <span
                className="absolute -start-96 top-24 rtl:rotate-y-180"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <svg width="488" height="124" viewBox="0 0 488 124" fill="none">
                  <path
                    opacity="0.6"
                    d="M485 3H293.31C265.695 3 243.31 25.3858 243.31 53V71C243.31 98.6142 220.924 121 193.31 121H0"
                    stroke="url(#paint0_radial_434_1170)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_434_1170"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(177.5 -59.5) scale(228 204.246)"
                    >
                      <stop stopColor="#806BFF" />
                      <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
              <h1
                className="mb-8 text-4xl font-extrabold leading-tight text-purple-700 dark:text-white md:mb-12 lg:text-[56px]"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                Get our all info directly from here
              </h1>
              <p
                className="text-lg md:text-22 lg:px-32 text-purple-600 dark:text-purple-400"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                Find a team of digital marketers you can rely on. We build trust
                through communication, transparency, and results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="overflow-x-hidden pb-16 lg:pb-32">
        <div className="mx-auto max-w-[1536px] px-4">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div>
              <div
                className="text-center lg:ltr:text-left lg:rtl:text-right"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2 className="mb-5 text-[26px] leading-[1.75] font-bold text-purple-700 dark:text-white">
                  Let's work together
                </h2>
                <p className="md:text-xl text-purple-600 dark:text-purple-400">
                  We're here to help bring your digital vision to life. Whether
                  you have a project in mind, need technical support, or want to
                  explore how we can collaborate, our team is ready to assist
                  you.
                </p>
                <div className="mt-10 space-y-8 font-medium text-purple-700 dark:text-white md:mt-16 md:space-y-12 md:text-xl">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 md:h-14 md:w-14">
                      <img
                        alt="Email icon"
                        loading="lazy"
                        width="56"
                        height="56"
                        src="/assets/images/email-icon.svg"
                      />
                    </div>
                    <a
                      href={
                        contactItems.find((item) => item.id === "email")
                          ?.href
                      }
                      className="truncate pt-1.5 duration-300 hover:text-red md:pt-3"
                    >
                      {
                        contactItems.find((item) => item.id === "email")
                          ?.display
                      }
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 md:h-14 md:w-14">
                      <img
                        alt="Telegram icon"
                        loading="lazy"
                        width="56"
                        height="56"
                        src="/assets/images/telegram-icon.svg"
                      />
                    </div>
                    <a
                      href={
                        contactItems.find((item) => item.id === "telegram")
                          ?.href
                      }
                      className="truncate pt-1.5 duration-300 hover:text-red md:pt-3"
                    >
                      {
                        contactItems.find((item) => item.id === "telegram")
                          ?.display
                      }
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 md:h-14 md:w-14">
                      <img
                        alt="Call icon"
                        loading="lazy"
                        width="56"
                        height="56"
                        src="/assets/images/call-icon.svg"
                      />
                    </div>
                    <a
                      href="tel:+16508226572"
                      className="pt-1.5 duration-300 hover:text-green md:pt-3"
                    >
                      {
                        contactItems.find((item) => item.id === "whatsapp")
                          ?.display
                      }
                    </a>
                  </div>

                  {/* <div className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 md:h-14 md:w-14">
                      <img
                        alt="Location icon"
                        loading="lazy"
                        width="56"
                        height="56"
                        src="/assets/images/location-icon.svg"
                      />
                    </div>
                    <p className="pt-1.5 md:pt-3">
                      {
                        contactItems.find((item) => item.id === "location")
                          ?.display
                      }
                    </p>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div
              className="mt-10 rounded-2xl border-2 border-purple-300/60 bg-white p-5 shadow-[0_0_80px_rgba(119,128,161,0.1)] dark:border-purple-900 dark:bg-purple-900 dark:shadow-none md:p-8 lg:mt-0"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-7 grid gap-7 md:grid-cols-2 md:gap-y-9">
                  <div>
                    <input
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-2 border-purple-300/60 bg-transparent px-4 py-3 text-base text-purple-700 placeholder:text-purple-400 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-2 border-purple-300/60 bg-transparent px-4 py-3 text-base text-purple-700 placeholder:text-purple-400 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      placeholder="Email ID"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-2 border-purple-300/60 bg-transparent px-4 py-3 text-base text-purple-700 placeholder:text-purple-400 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      name="subject"
                      placeholder="Subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-2 border-purple-300/60 bg-transparent px-4 py-3 text-base text-purple-700 placeholder:text-purple-400 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Type your messages"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea w-full rounded-lg border-2 border-purple-300/60 bg-transparent px-4 py-3 text-base text-purple-700 placeholder:text-purple-400 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn w-full text-base font-bold uppercase md:max-w-[285px] bg-primary text-white hover:bg-secondary"
                >
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Contact;
