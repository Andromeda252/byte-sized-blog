import Link from "next/link";
import { Post } from "@/types/post";
import { categoryColors } from "@/lib/categoryColors";

type FeaturedPostProps = {
    post: Post
}

export default function FeaturedPost({
    post
}: FeaturedPostProps) {
    const colors = categoryColors[post.category] ?? {
      text: "text-zinc-600",
      gradient: "from-zinc-100 to-white",
      border: "border-zinc-200"
    }
    return (
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">
          Featured Post
        </p>
        <Link href={`/posts/${post.slug}`}>
          <article className={`rounded-2xl border bg-gradient-to-br p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${colors.gradient} ${colors.border}`}>
            <p className={`mb-3 text-sm font-medium ${colors.text}`}>
              {post.category}
            </p>
            <h2 className="mb-4 text-4xl font-bold leading-tight text-zinc-900">
              {post.title}
            </h2>
            <p className="mb-6 text-lg leading-8 text-zinc-600">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">
                {post.date}
              </span>
              <span className={`text-sm font-medium ${colors.text}`}>
                Read Now →
              </span>
            </div>
          </article>
        </Link>
      </section>
    )
}