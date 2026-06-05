import { categoryColors } from "@/lib/categoryColors"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Navbar from "@/components/Navbar"
import PageContainer from "@/components/PageContainer"
import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getPostSlugs, getPostBySlug } from "@/lib/posts"

type PostPageProps = {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const slugs = getPostSlugs()

    return slugs.map((slug) => ({slug: slug.replace(/\.md$/, "")}))
}

export async function generateMetadata({
    params
}: PostPageProps): Promise<Metadata> {
    const { slug } = await params

    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: "Post Not Found | Byte Sized Blog"
        }
    }

    return {
        title: `${post.title} | The Byte-Sized Blog`,
        description: post.excerpt,
    }
}

export default async function PostPage({
    params
}: PostPageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const colors = categoryColors[post.category]

    return (
        <PageContainer>
            <Navbar />
            <header className="mb-14 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
                <div className="relative min-h-[420px] w-full sm:min-h-[520px] md:min-h-[600px]">
                    <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent md:from-black/80 md:via-black/40" />
                    <div className="absolute inset-0 flex items-end p-5 sm:p-6 md:p-10">
                        <div className="w-full max-w-4xl">
                            <Link href="/" className="mb-6 inline-block text-sm font-medium text-white/90 transition hover:text-white hover:underline">
                                ← Back to Home
                            </Link>
                            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                                <span className={`font-bold uppercase tracking-[0.2em] drop-shadow-md ${colors.text}`}>
                                    {post.category}
                                </span>
                                <span className="text-zinc-300">•</span>
                                <span className="text-zinc-300">
                                    {post.date}
                                </span>
                                {/* <span className="text-zinc-300">•</span>
                                <span className="text-zinc-300">By: {post.author}</span> */}
                                <span className="text-zinc-300">•</span>
                                <span className="text-zinc-300">{post.readingTime}</span>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">{tag}</span>
                                ))}
                            </div>
                            <h1 className="mb-1 mt-2 max-w-4xl text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                                {post.title}
                            </h1>
                            <p className="max-w-2xl text-sm leading-6 text-zinc-200 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
                                {post.excerpt}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <article className="prose prose-zinc max-w-none
                prose-sm sm:prose-base lg:prose-lg

                prose-headings:font-bold
                prose-headings:tracking-tight
                prose-headings:text-zinc-900

                prose-h2:mt-12
                prose-h2:mb-6

                prose-h3:mt-8
                prose-h3:mb-4

                prose-p:text-zinc-700
                prose-p:leading-7 sm:prose-p:leading-8
                prose-p:text-lg

                prose-ul:my-6
                prose-ol:my-6
                prose-li:my-1

                prose-strong:text-zinc-900

                prose-a:text-red-600
                hover:prose-a:text-red-700

                prose-blockquote:border-l-red-500
                prose-blockquote:text-zinc-700
                prose-blockquote:italic

                prose-img:rounded-2xl
                prose-img:shadow-md

                prose-code:text-red-600">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </article>
        </PageContainer>
    )
}