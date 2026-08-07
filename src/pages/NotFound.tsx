import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:py-32">
      <span className="text-sm font-bold uppercase tracking-wide text-primary">
        404
      </span>
      <h1 className="mt-3 mb-4 text-3xl font-extrabold text-secondary sm:text-4xl">
        Page not found
      </h1>
      <p className="mb-8 text-muted-foreground">
        We can&apos;t find the page you&apos;re looking for. It may have moved
        or no longer exists.
      </p>
      <Button asChild>
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
