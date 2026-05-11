import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

export default function ByteTakesPage() {
    const posts = [
        {
            title: "Why Rebooting Star Fox is the Right Move",
            excerpt: "As annoying as it can be to recieve yet another retelling of Star Fox 64, a fresh start is exactly what this franchise needs.",
            category: "Byte Take",
            date: "May 6th, 2026"
        }
    ]

    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Navbar />
            <h1>Byte Takes Page</h1>
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