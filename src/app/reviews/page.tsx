import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import { posts } from "@/data/posts";

export default function ReviewsPage() {
    const reviewPosts = posts.filter(
        (post) => post.category === "Review"
    )

    return (
        <PageContainer>
            <Navbar />
            <section className="mb-10">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-600">
                    Category
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">
                    Reviews
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                    Long-form, analyical deep dives into my thoughts and impressions on the latest games.
                </p>
            </section>
            <p className="text-sm text-zinc-500 mb-2">
                {reviewPosts.length} posts
            </p>
            {reviewPosts.map((post) => (
                <PostCard
                    key={post.slug}
                    {...post}
                />
            ))}
        </PageContainer>
    )
}