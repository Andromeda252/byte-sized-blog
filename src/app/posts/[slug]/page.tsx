import { posts } from "@/data/posts"
import Navbar from "@/components/Navbar"

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
            <h1 className="text-4xl font-bold mb-4">
                {post.title}
            </h1>
            <div className="flex gap-4 text-sm text-zinc-500 mb-8">
                <span>{post.category}</span>
                <span>{post.date}</span>
            </div>
            <p className="text-lg leading-relaxed text-zinc-700">
                {post.excerpt}
            </p>
        </main>
    )
}