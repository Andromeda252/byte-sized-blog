import CategoryPageLayout from "@/components/CategoryPageLayout";
import { getAllPosts } from "@/lib/posts";

export default function ReviewsPage() {
    const posts = getAllPosts().filter((post) => post.published)

    const reviewPosts = posts.filter(
        (post) => post.category === "Review"
    )

    return (
        <CategoryPageLayout
            category="Review"
            title="Reviews"
            description="Long-form, analyical deep dives into my thoughts and impressions on the latest games."
            posts={reviewPosts}
        />
    )
}