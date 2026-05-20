import CategoryHeader from "@/components/CategoryHeader";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import { posts } from "@/data/posts";
import { categoryColors } from "@/lib/categoryColors";

export default function ReviewsPage() {
    const reviewPosts = posts.filter(
        (post) => post.category === "Review"
    )

    const colors = categoryColors["Review"]

    return (
        <PageContainer>
            <Navbar />
            <CategoryHeader
                category="Review"
                title="Reviews"
                description="Long-form, analyical deep dives into my thoughts and impressions on the latest games."
            />
            {/* <section className="mb-10 rounded-2xl border border-red-200 bg-red-100 p-8">
                <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${colors.text}`}>
                    Category
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">
                    Reviews
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                    Long-form, analyical deep dives into my thoughts and impressions on the latest games.
                </p>
            </section> */}
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