import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { TrafficLights } from "../components/ui";
import { blogPosts } from "../content/posts";

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="w-full max-w-4xl self-start">
      <Link
        to="/blog"
        className="blog-back-link inline-flex items-center gap-2 mb-4 font-mono text-sm
          text-bone-pencil hover:text-bone-ink transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        cd ~/blog
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="blog-article rounded-xl border overflow-hidden backdrop-blur-md
          bg-bone-paper border-bone-ash/30"
      >
        <div className="blog-article-header flex items-center gap-4 px-5 py-4 border-b border-bone-ash/20">
          <TrafficLights />
          <span className="text-sm font-mono text-bone-pencil">
            ~/blog/{post.slug}
          </span>
        </div>

        <div className="px-6 py-8 sm:px-10 md:px-14 md:py-10">
          <header className="mb-8">
            <p className="accent-mark font-mono text-xs text-latte-mauve">
              {post.date} • {post.readingTime}
            </p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl font-bold text-bone-ink">
              {post.title}
            </h1>
          </header>
          <post.Content />
        </div>
      </motion.div>
    </article>
  );
}
