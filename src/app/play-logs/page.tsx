import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import { posts } from "@/data/posts";

export default function PlayLogsPage() {
    const playLogPosts = posts.filter(
        (post) => post.category === "Play Log"
    )

    return (
        <PageContainer>
            <Navbar />
            <section className="mb-10">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-600">
                    Category
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">
                    Play Logs
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                    Weekly journalings and impressions on what I've been playing over the past week.
                </p>
            </section>
            <p className="text-sm text-zinc-500 mb-2">
                {playLogPosts.length} posts
            </p>
            {playLogPosts.map((post) => (
                <PostCard
                    key={post.slug}
                    {...post}
                />
            ))}
        </PageContainer>
    )
}