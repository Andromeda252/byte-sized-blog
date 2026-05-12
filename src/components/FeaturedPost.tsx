import Link from "next/link";
import { Post } from "@/types/post";

type FeaturedPostProps = {
    post: Post
}

export default function FeaturedPost({
    post
}: FeaturedPostProps) {
    return (
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">
          Featured Post
        </p>
        <Link href={`/posts/${post.slug}`}>
          <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <p className="mb-3 text-sm font-medium text-red-600">
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
              <span className="text-sm font-medium text-red-600">
                Read Now →
              </span>
            </div>
          </article>
        </Link>
      </section>
    )
}