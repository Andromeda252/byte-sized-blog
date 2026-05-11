import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

export default function PlaylogsPage() {
    const posts = [
        {
            title: "What I've Been Playing: Week of 5/3/2026",
            excerpt: "Spoiler Alert: I'm still Living the Dream.",
            category: "Playlog",
            date: "May 9th, 2026"
        }
    ]

    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Navbar />
            <h1>Playlogs Page</h1>
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