import { posts } from "@/data/posts"
import Navbar from "@/components/Navbar"
import PageContainer from "@/components/PageContainer"
import Link from "next/link"

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

    return (
        <PageContainer>
            <Navbar />
            <header className="mb-12 border-b border-zinc-200 pb-10">
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
            </header>
            <article className="prose prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-zinc-700 prose-p:leading-8 prose-p:text-lg prose-a:text-red-600 hover:prose-a:text-red-700">
                <p>{post.content}</p>
            </article>
        </PageContainer>
    )
}