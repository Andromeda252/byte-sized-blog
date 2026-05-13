import Link from "next/link";
import Image from "next/image";
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
          <article className={`group relative overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${colors.gradient} ${colors.border}`}>
            <div className="relative h-[500px] w-full">
              <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-8 md:p-10">
                <p className={`mb-3 text-lg font-semibold uppercase tracking-wide drop-shadow-md ${colors.text}`}>
                  {post.category}
                </p>
                <h2 className="mb-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                  {post.title}
                </h2>
                <p className="mb-6 max-w-2xl text-lg leading-8 text-zinc-200">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">
                    {post.date}
                  </span>
                  <span className={`text-sm font-medium ${colors.text}`}>
                    Read Now →
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </section>
    )
}