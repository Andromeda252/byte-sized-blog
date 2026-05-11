import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

export default function PlayLogsPage() {
    const playLogPosts = posts.filter(
        (post) => post.category === "Play Log"
    )

    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Navbar />
            <h1>Play Logs Page</h1>
            {playLogPosts.map((post, index) => (
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