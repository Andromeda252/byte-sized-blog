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
            <Link href="/" className="text-sm text-purple-600 hover:underline mb-6 inline-block">Back to Home</Link>
            <h1 className="text-4xl font-bold mb-4">
                {post.title}
            </h1>
            <div className="flex gap-4 text-sm text-zinc-500 mb-4">
                <span>{post.category}</span>
                <span>{post.date}</span>
            </div>
            <p className="text-lg leading-relaxed text-zinc-700 mb-6">
                {post.excerpt}
            </p>
            <article className="text-lg leading-8 text-zinc-700">
                <p>{post.content}</p>
            </article>
        </main>
    )
}