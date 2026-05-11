import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

export default function ByteTakesPage() {
    const byteTakesPosts = posts.filter(
        (post) => post.category === "Byte Take"
    )

    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Navbar />
            <h1>Byte Takes Page</h1>
            {byteTakesPosts.map((post, index) => (
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