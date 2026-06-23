import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollpos = window.scrollY;
      setIsVisible(scrollpos > 0);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="scrollToTopBtn"
      className="group fixed bottom-5 z-10 animate-bounce right-5 cursor-pointer"
      onClick={scrollToTop}
    >
      <button
        type="button"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition duration-300 group-hover:bg-secondary dark:group-hover:bg-purple-700"
        aria-label="Scroll to top"
      >
        <span className="h-6 w-6 transition">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-full w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};
