import { Post } from "@/types/post"
import Link from "next/link"

export default function PostCard({ slug, title, excerpt, category, date }: Post) {
    return (
        <Link href={`/posts/${slug}`}>
            <article className="border border-zinc-200 rounded-xl p-6 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                <small className="text-sm text-purple-600 font-medium">{category}</small>
                <h3 className="text-2xl font-bold mt-2 mb-3">{title}</h3>
                <p className="text-zinc-600 leading-relaxed mb-4">{excerpt}</p>
                <small className="text-zinc-500">{date}</small>
            </article>
        </Link>
    )
}