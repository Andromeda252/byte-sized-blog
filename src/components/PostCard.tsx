import { PostPreview } from "@/types/postPreview"
import { categoryColors } from "@/lib/categoryColors"
import Link from "next/link"
import Image from "next/image"

export default function PostCard({ slug, title, excerpt, category, date, image, readingTime, tags }: PostPreview) {
    const colors = categoryColors[category] ?? {
        text: "text-zinc-600",
        gradient: "hover:from-zinc-50 hover:to-white",
        border: "hover:border-zinc-200"
    }
    return (
        <Link href={`/posts/${slug}`}>
            <article className={`group mb-5 overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${colors.hoverGradient} ${colors.border}`}>
                <div className="flex flex-col md:flex-row">
                    <div className="relative h-56 w-full shrink-0 sm:h-64 md:h-auto md:w-72">
                        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 288px" className="object-cover transition-transform duration-500 group-hover:scale-105"/>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <small className={`text-xs font-semibold uppercase tracking-[0.2em] ${colors.text}`}>{category}</small>
                        <h3 className="text-2xl font-black mt-3 mb-3 leading-tight tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-700">{title}</h3>
                        <p className="text-zinc-600 leading-7 mb-5 text-base">{excerpt}</p>
                        <div className="mt-auto flex items-center justify-between">
                            <small className="text-sm text-zinc-500">
                                {date} • {readingTime}
                            </small>
                            <span className={`text-sm font-medium transition-transform duration-300 group-hover:translate-x-1 ${colors.text}`}>
                                Read More →
                            </span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span key={tag} className="rounded-full bg-black/10 px-3 py-1 text-xs font-medium text-black">{tag}</span>
                                ))}
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}