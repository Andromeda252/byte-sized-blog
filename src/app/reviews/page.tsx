import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

export default function ReviewsPage() {
    const reviewPosts = posts.filter(
        (post) => post.category === "Review"
    )

    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Navbar />
            <h1>Reviews Page</h1>
            {reviewPosts.map((post, index) => (
                <PostCard
                    key={index}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                />
            ))}
        </main>
    )
}