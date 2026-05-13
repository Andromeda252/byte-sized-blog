import { posts } from "@/data/posts"
import { categoryColors } from "@/lib/categoryColors"
import Navbar from "@/components/Navbar"
import PageContainer from "@/components/PageContainer"
import Link from "next/link"
import Image from "next/image"

type PostPageProps = {
    params: Promise<{
        slug: string
    }>
}

export default async function PostPage({
    params
}: PostPageProps) {
    const { slug } = await params
    const post = posts.find((post) => post.slug === slug)

    if (!post) {
        return <h1>Post not found</h1>
    }

    const colors = categoryColors[post.category]

    return (
        <PageContainer>
            <Navbar />
            <header className="mb-14 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
                <div className="relative h-[350px] w-full md:h-[500px]">
                    <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 w-full p-6 md:p-10">
                        <Link href="/" className="mb-6 inline-block text-sm font-medium text-white/90 transition hover:text-white hover:underline">
                            ← Back to Home
                        </Link>
                        <div className="mb-4 flex items-center gap-3 text-sm">
                            <span className={`font-semibold uppercase tracking-wide drop-shadow-md ${colors.text}`}>
                                {post.category}
                            </span>
                            <span className="text-zinc-300">•</span>
                            <span className="text-zinc-300">
                                {post.date}
                            </span>
                        </div>
                        <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                            {post.title}
                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-zinc-200 md:text-xl md:leading-9">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </header>
            {/* <header className="mb-12 border-b border-zinc-200 pb-10">
                <Link href="/" className="mb-8 inline-block text-sm font-medium text-red-600 transition-colors hover:text-red-700 hover:underline">
                    ← Back to Home
                </Link>
                <div className="mb-4 flex items-center gap-3 text-sm text-zinc-500">
                    <span className="text-red-600 font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                </div>
                <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-zinc-900">
                    {post.title}
                </h1>
                <p className="max-w-2xl text-xl leading-9 text-zinc-600">
                    {post.excerpt}
                </p>
            </header> */}
            <article className="prose prose-zinc max-w-none
                prose-headings:font-bold
                prose-headings:tracking-tight
                prose-headings:text-zinc-900
                prose-p:text-zinc-700
                prose-p:leading-8
                prose-p:text-lg
                prose-strong:text-zinc-900
                prose-a:text-red-600
                hover:prose-a:text-red-700
                prose-blockquote:border-l-red-500
                prose-blockquote:text-zinc-700
                prose-img:rounded-2xl
                prose-img:shadow-md">
                <p>{post.content}</p>
            </article>
        </PageContainer>
    )
}