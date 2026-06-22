import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/assets/images/logos/collibra.svg",
  "/assets/images/logos/gong.svg",
  "/assets/images/logos/noodle-ai.svg",
  "/assets/images/logos/percy.svg",
  "/assets/images/logos/shake.svg",
  "/assets/images/logos/umake.svg",
];

export const PartnersSection = () => {
  return (
    <div className="relative overflow-x-hidden py-7">
      <div className="absolute left-1/2 h-28 w-[110%] -translate-x-1/2 rotate-[-1.5deg] bg-primary"></div>
      <div className="relative bg-secondary px-4 py-9 dark:bg-purple-900">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={1.5}
            spaceBetween={18}
            speed={1000}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
              1142: {
                slidesPerView: 5,
              },
              1536: {
                slidesPerView: 6,
              },
            }}
            className="logo-slider"
          >
            {[...logos, ...logos].map((logo, index) => (
              <SwiperSlide key={index}>
                <a href="/">
                  <img
                    loading="lazy"
                    src={logo}
                    alt="Partner logo"
                    className="mx-auto h-10 w-auto"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
