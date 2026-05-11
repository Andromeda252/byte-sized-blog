import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <Navbar />

      <Hero />

      <h2 className="text-sm uppercase tracking-wide text-zinc-500 mb-4">
        Latest Posts
      </h2>

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
  );
}
