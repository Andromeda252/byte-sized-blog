import { posts } from "@/data/posts"
import Navbar from "@/components/Navbar"
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
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Navbar />
            <Link href="/" className="text-sm font-medium text-purple-600 hover:underline mb-8 inline-block">
                ← Back to Home
            </Link>
            <h1 className="text-5xl leading-tight font-bold mb-6">
                {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-zinc-500 mb-6">
                <span className="text-purple-600 font-medium">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
            </div>
            <p className="text-xl leading-8 text-zinc-600 mb-10">
                {post.excerpt}
            </p>
            <article className="text-lg leading-8 text-zinc-700 space-y-6">
                <p>{post.content}</p>
            </article>
        </main>
    )
}