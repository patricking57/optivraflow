import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/data/blogData";
import { generateSlug } from "@/lib/utils";

const BlogDetail = () => {
  const { blogName } = useParams<{ blogName: string }>();
  const post = blogPosts.find((p) => p.slug === blogName);

  const tableOfContents = useMemo(() => {
    if (!post) return [];
    return post.content
      .filter((item) => item.type === "heading" && item.level === 2)
      .map((item) => ({
        text: item.text || "",
        id: `h-${generateSlug(item.text || "")}`,
      }));
  }, [post]);

  if (!post) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="mb-4 text-2xl font-bold text-secondary">
          Article not found
        </h1>
        <Link to="/insights" className="text-primary hover:underline">
          Back to insights
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-16 pt-10 sm:pb-24">
      <div className="mx-auto max-w-[1100px] px-4">
        <div className="flex flex-col gap-10 lg:flex-row">
          {tableOfContents.length > 0 && (
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-28 rounded-xl border border-border p-5">
                <div className="mb-3 text-xs font-bold uppercase tracking-wide text-secondary">
                  Table of contents
                </div>
                <ul className="space-y-2.5">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          <div className="flex-1">
            <div className="mb-6 flex h-40 items-center justify-center rounded-2xl bg-secondary">
              <Newspaper className="h-10 w-10 text-primary" />
            </div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
              {post.date}
            </div>
            <h1 className="mb-8 text-3xl font-extrabold leading-snug text-secondary sm:text-4xl">
              {post.title}
            </h1>

            <div className="space-y-6">
              {post.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <p key={index} className="text-base leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  );
                }
                if (item.type === "heading") {
                  const id =
                    item.level === 2 ? `h-${generateSlug(item.text || "")}` : undefined;
                  return (
                    <h2
                      key={index}
                      id={id}
                      className="scroll-mt-24 pt-4 text-2xl font-bold text-secondary"
                    >
                      {item.text}
                    </h2>
                  );
                }
                if (item.type === "list") {
                  return (
                    <ul key={index} className="list-disc space-y-2 pl-5">
                      {item.items?.map((li, i) => (
                        <li key={i} className="text-base text-muted-foreground">
                          {li}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (item.type === "numberedList") {
                  return (
                    <ol key={index} className="list-decimal space-y-2 pl-5">
                      {item.items?.map((li, i) => (
                        <li key={i} className="text-base text-muted-foreground">
                          {li}
                        </li>
                      ))}
                    </ol>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title="Have questions about our infrastructure?"
          description="Talk to our team about your compute or hosting requirements."
        />
      </div>
    </div>
  );
};

export default BlogDetail;
