import { Post } from "@/types/post"
import { categoryColors } from "@/lib/categoryColors"
import Link from "next/link"

export default function PostCard({ slug, title, excerpt, category, date }: Post) {
    const colors = categoryColors[category] ?? {
        text: "text-zinc-600",
        gradient: "hover:from-zinc-50 hover:to-white",
        border: "hover:border-zinc-200"
    }
    return (
        <Link href={`/posts/${slug}`}>
            <article className={`mb-4 rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${colors.hoverGradient} ${colors.border}`}>
                <small className={`text-sm font-medium ${colors.text}`}>{category}</small>
                <h3 className="text-2xl font-bold mt-2 mb-3">{title}</h3>
                <p className="text-zinc-600 leading-relaxed mb-4">{excerpt}</p>
                <small className="text-zinc-500">{date}</small>
            </article>
        </Link>
    )
}