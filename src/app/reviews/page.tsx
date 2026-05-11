import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

export default function ReviewsPage() {
    const posts = [
        {
            title: "REVIEW: Tomodachi Life: Living the Dream is a Near Perfect Sequel",
            excerpt: "I've wanted a new Tomodachi Life for a long time, and I don't think I could've asked for much more from what we got.",
            category: "Review",
            date: "May 1st, 2026"
        }
    ]
    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Navbar />
            <h1>Reviews Page</h1>
            {posts.map((post, index) => (
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