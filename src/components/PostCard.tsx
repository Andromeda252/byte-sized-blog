// type PostCardProps = {
//     title: string
//     excerpt: string
//     category: string
// }

import { PostCardProps } from "@/types/post"

export default function PostCard({ title, excerpt, category }: PostCardProps) {
    return (
        <article className="border border-zinc-200 rounded-xl p-6 mb-4 bg-white shadow-sm">
            <small className="text-sm text-purple-600 font-medium">{category}</small>
            <h3 className="text-2xl font-bold mt-2 mb-3">{title}</h3>
            <p className="text-zinc-600 leading-relaxed">{excerpt}</p>
        </article>
    )
}