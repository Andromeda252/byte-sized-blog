import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

export default function NewsPage() {
    const posts = [
        {
            title: "Yoshi and the Mysterious Book Gets Retail Demo",
            excerpt: "The intriguing, cozy platformer is available to try at select retailers two weeks ahead of release.",
            category: "News",
            date: "May 8th, 2026"
        }
    ]
    
    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Navbar />
            <h1>News Page</h1>
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