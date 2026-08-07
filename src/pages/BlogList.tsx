import { Link } from "react-router-dom";
import { ArrowRight, Newspaper } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/data/blogData";

const BlogList = () => {
  return (
    <div>
      <PageHero
        eyebrow="Insights"
        title="Insights on distributed computing infrastructure"
        description="Educational articles on distributed computing, edge computing, remote workstations, and AI compute infrastructure."
      />

      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1142px] px-4">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-border transition-shadow hover:shadow-md"
              >
                <Link to={`/insights/${post.slug}`} className="block">
                  <div className="flex h-40 items-center justify-center bg-secondary">
                    <Newspaper className="h-10 w-10 text-primary" />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
                      {post.date}
                    </div>
                    <h2 className="mb-3 text-lg font-semibold leading-snug text-secondary transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
