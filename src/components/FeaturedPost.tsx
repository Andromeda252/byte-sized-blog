import Link from "next/link";
import Image from "next/image";
// import { Post } from "@/types/post";
import { PostPreview } from "@/types/postPreview";
import { categoryColors } from "@/lib/categoryColors";

type FeaturedPostProps = {
    post: PostPreview
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
            <div className="relative h-[320px] w-full sm:h-[400px] md:h-[500px]">
              <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:from-black/80 md:via-black/40" />
              <div className="absolute bottom-0 w-full p-5 sm:p-6 md:p-10">
                <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] drop-shadow-md sm:text-base ${colors.text}`}>
                  {post.category}
                </p>
                <h2 className="mb-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                  {post.title}
                </h2>
                <p className="mb-6 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg sm:leading-8">
                  {post.excerpt}
                </p>
                <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
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