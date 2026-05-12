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
            <h1>Reviews Page</h1>
            {reviewPosts.map((post) => (
                <PostCard
                    key={post.slug}
                    {...post}
                />
            ))}
        </PageContainer>
    )
}