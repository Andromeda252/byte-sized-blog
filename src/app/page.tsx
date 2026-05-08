import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = [
    {
      title: "Why Rebooting Star Fox is the Right Move",
      excerpt: "As annoying as it can be to recieve yet another retelling of Star Fox 64, a fresh start is exactly what this franchise needs.",
      category: "Byte Take"
    },
    {
      title: "REVIEW: Tomodachi Life: Living the Dream is a Near Perfect Sequel",
      excerpt: "I've wanted a new Tomodachi Life for a long time, and I don't think I could've asked for much more from what we got.",
      category: "Review"
    },
    {
      title: "Yoshi and the Mysterious Book Gets Retail Demo",
      excerpt: "The intriguing, cozy platformer is available to try at select retailers two weeks ahead of release.",
      category: "News"
    },
    {
      title: "What I've Been Playing: Week of 5/3/2026",
      excerpt: "Spoiler Alert: I'm still Living the Dream.",
      category: "Playlog"
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <Navbar />

      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          excerpt={post.excerpt}
          category={post.category}
        />
      ))}
    </main>
  );
}
