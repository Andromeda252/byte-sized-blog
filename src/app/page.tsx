import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import FeaturedPost from "@/components/FeaturedPost";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)
  return (
    <PageContainer>
      <Navbar />

      <Hero />

      <FeaturedPost post={featuredPost} />

      <h2 className="text-sm uppercase tracking-wide text-zinc-500 mb-4">
        Latest Posts
      </h2>

      {remainingPosts.map((post) => (
        <PostCard
          key={post.slug}
          {...post}
        />
      ))}
    </PageContainer>
  );
}
