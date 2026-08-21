import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BentoCard } from "../components/ui";
import { BentoGrid } from "../components/layout";
import { blogPosts } from "../content/posts";

export function BlogPage() {
  return (
    <BentoGrid className="w-full">
      <BentoCard title="~/blog" colSpan={4} delay={0}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-serif font-bold dark:text-mocha-text text-bone-ink">
              Blog
            </h1>
            <p className="mt-2 font-mono text-sm dark:text-mocha-subtext0 text-bone-pencil">
              Notes from things I've built and learned.
            </p>
          </div>

          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="nav-card-link group flex flex-col sm:flex-row gap-5 p-4 rounded-lg
                  dark:bg-mocha-surface0/50 bg-bone-cream/50
                  dark:hover:bg-mocha-surface0 hover:bg-bone-cream
                  transition-colors"
              >
                <img
                  src={post.cover}
                  alt=""
                  className="w-full sm:w-56 h-40 sm:h-32 object-cover rounded-lg border dark:border-mocha-surface0 border-bone-ash/40"
                />
                <div className="flex-1 flex flex-col justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs dark:text-mocha-mauve text-latte-mauve">
                      {post.date} • {post.readingTime}
                    </p>
                    <h2 className="mt-1 font-serif text-xl font-bold dark:text-mocha-text text-bone-ink">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm dark:text-mocha-subtext1 text-bone-pencil">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 font-mono text-sm dark:text-mocha-subtext0 text-bone-pencil">
                    read post
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </BentoCard>
    </BentoGrid>
  );
}
