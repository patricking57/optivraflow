import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    avatar: "/assets/images/testimonials/testimonial-user-1.svg",
    name: "Butterflies AI",
    role: "Founders, Butterflies AI",
    rating: 5,
    content:
      "Optivraflow brought our vision of personal AI companions to life. They built a platform where users can create authentic AI personalities, share photos, and take pictures together in real-time. The 85% user engagement rate and 2.5M+ photos shared speak to how well they understood our social platform goals.",
  },
  {
    id: 2,
    avatar: "/assets/images/testimonials/testimonial-user-2.svg",
    name: "MLR",
    role: "Media Operations, Major League Rugby",
    rating: 5,
    content:
      "The live streaming app with multicam switching that Optivraflow built transformed how we cover matches. With 4K video quality support and less than 2 seconds stream latency, we can now capture and playback all camera angles from every match. The real-time marker features are game-changing for our field operators.",
  },
  {
    id: 3,
    avatar: "/assets/images/testimonials/testimonial-user-3.svg",
    name: "Ringfree",
    role: "Executive Team, Ringfree",
    rating: 5,
    content:
      "Optivraflow delivered a cloud VoIP platform that achieved 99.9% uptime reliability. Their PBXware integration, voice AI development with LiveKit and ElevenLabs, and unified communications platform exceeded our expectations. The 5.0 customer support rating reflects the quality of their work.",
  },
  {
    id: 4,
    avatar: "/assets/images/testimonials/testimonial-user-4.svg",
    name: "Content Marketing Agency",
    role: "Operations Director",
    rating: 5,
    content:
      "Optivraflow's AI-powered Slack to Airtable automation saved us 80% of our content creation time. The workflow that transcribes voice notes, generates content with AI, and auto-posts to Instagram has tripled our content output. The approval workflow ensures quality while maintaining 100% automation accuracy.",
  },
  {
    id: 5,
    avatar: "/assets/images/testimonials/testimonial-user-5.svg",
    name: "Roxy's Pub",
    role: "Owner, Roxy's Pub",
    rating: 5,
    content:
      "The JavaFX point of sale system Optivraflow built for our historic bar streamlined operations perfectly. With 64+ beers on tap and a full menu, the inventory management is flawless. Checkout time improved by 40%, and the hardware integration with barcode scanners and receipt printers works seamlessly.",
  },
  {
    id: 6,
    avatar: "/assets/images/testimonials/testimonial-user-6.svg",
    name: "Sally AI",
    role: "Product Team, Sally AI",
    rating: 5,
    content:
      "Optivraflow built our AI meeting assistant with 95% transcription accuracy and full GDPR compliance. The React Native app for on-site recording, Django backend, and integration with 5,000+ business tools exceeded our expectations. Sally automatically joins meetings and generates summaries that our users love.",
  },
  {
    id: 7,
    avatar: "/assets/images/testimonials/testimonial-user-7.svg",
    name: "Vocca Healthcare",
    role: "Clinical Operations, Vocca",
    rating: 5,
    content:
      "Optivraflow's healthcare voice AI platform automates patient communication 24/7 while maintaining 100% HIPAA and GDPR compliance. The LiveKit and ElevenLabs integration creates natural-sounding AI agents that handle hundreds of simultaneous calls. Our receptionists save hours daily, and patients love the seamless experience.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <div className="inline-flex items-center gap-1">
      {Array.from({ length: totalStars }).map((_, index) => {
        const filled = index < rating;
        return (
          <svg
            key={index}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0002 2.25C12.3057 2.25 12.5942 2.41406 12.7485 2.68359L15.1414 6.87094L19.8246 7.76719C20.1235 7.82578 20.3762 8.03906 20.4704 8.32734C20.5645 8.61563 20.4851 8.92969 20.2645 9.14062L16.8633 12.4297L17.4692 17.0898C17.5066 17.3922 17.3805 17.6914 17.1348 17.8703C16.889 18.0492 16.5613 18.0785 16.2857 17.9453L12.0002 15.8672L7.71473 17.9453C7.4391 18.0785 7.11135 18.0492 6.8656 17.8703C6.61985 17.6914 6.49379 17.3922 6.53116 17.0898L7.13704 12.4297L3.73579 9.14062C3.51523 8.92969 3.43585 8.61563 3.52998 8.32734C3.6241 8.03906 3.87685 7.82578 4.17573 7.76719L8.85898 6.87094L11.2518 2.68359C11.4061 2.41406 11.6947 2.25 12.0002 2.25Z"
              fill={filled ? "#FFD02C" : "#E8E7EB"}
            />
          </svg>
        );
      })}
    </div>
  );
};

export const TestimonialsSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  return (
    <div className="pb-12 sm:pb-16 lg:pb-28">
      <div className="mx-auto max-w-[1536px] px-4">
        <div className="mx-auto pb-6 text-center sm:pb-8 lg:w-2/3">
          <h2 className="mb-4 text-xl leading-[1.75] font-bold text-purple-700 dark:text-white sm:mb-5 sm:text-2xl md:text-[26px]">
            Testimonial
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            Don't take our word for it, take theirs!
          </p>
        </div>

        <div className="swiper mx-auto max-w-3xl">
          <Swiper
            modules={[Thumbs, Autoplay]}
            onSwiper={setThumbsSwiper}
            // loop={true}
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides={true}
            watchSlidesProgress={true}
            initialSlide={1}
            breakpoints={{
              640: {
                slidesPerView: 5,
                initialSlide: 2,
              },
              1024: {
                slidesPerView: 7,
                initialSlide: 3,
              },
            }}
            onSlideChange={(swiper) => {
              // When thumbs swiper changes, update main swiper
              if (mainSwiper && mainSwiper.realIndex !== swiper.realIndex) {
                mainSwiper.slideToLoop(swiper.realIndex);
              }
            }}
            className="testimonial-thumb py-6 sm:py-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="mx-auto h-14 w-14 overflow-hidden rounded-full grayscale sm:h-16 sm:w-16 md:h-20 md:w-20">
                  <img
                    loading="lazy"
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative mt-4 md:mt-10">
          <Swiper
            modules={[Thumbs, Autoplay]}
            onSwiper={setMainSwiper}
            thumbs={{ swiper: thumbsSwiper }}
            // loop={true}
            watchSlidesProgress={true}
            initialSlide={1}
            breakpoints={{
              640: {
                initialSlide: 2,
              },
              1024: {
                initialSlide: 4,
              },
            }}
            onSlideChange={(swiper) => {
              // When main swiper changes, update thumbs swiper
              if (thumbsSwiper && thumbsSwiper.realIndex !== swiper.realIndex) {
                thumbsSwiper.slideToLoop(swiper.realIndex);
              }
            }}
            className="swiper testimonial mx-auto w-full max-w-xl text-center"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="inline-block">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="mt-4 text-sm font-medium sm:text-base">
                  {testimonial.content}
                </p>
                <div className="mt-6 sm:mt-10">
                  <h3 className="mb-1 text-sm font-semibold text-purple-700 dark:text-purple-300 sm:text-base">
                    {testimonial.name}
                  </h3>
                  <span className="text-xs font-medium italic">
                    {testimonial.role}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
