import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import FeaturedPost from "@/components/FeaturedPost";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().filter((post) => post.published)

  //If there is no featured post, default to the latest post.
  const featuredPost = posts.find((post) => post.featured) ?? posts[0]
  const remainingPosts = posts.filter((post) => post.slug !== featuredPost?.slug)
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
