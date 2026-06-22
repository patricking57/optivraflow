import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Optional: log 404s for debugging/analytics
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="py-14 md:py-20 text-center">
      <div className="container">
        <div className="max-w-xl mx-auto" data-aos-duration="1000">
          <img
            src="/assets/images/404-light.svg"
            alt="404"
            className="w-full h-full object-cover inline-flex dark:hidden"
          />
          <img
            src="/assets/images/404-dark.svg"
            alt="404"
            className="w-full h-full object-cover hidden dark:inline-flex"
          />
        </div>

        <div className="mt-6">
          <h2 className="mb-5 text-22 md:text-[32px] text-purple-700 font-bold leading-tight dark:text-white">
            Oops!
          </h2>
          <p className="md:text-2xl font-medium dark:text-primary">
            We can&apos;t seems to find the page you&apos;re looking for.
          </p>
          <Link to="/" className="btn inline-flex mt-8 md:mt-16">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
