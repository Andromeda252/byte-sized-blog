import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = [
    {
      title: "Why Rebooting Star Fox is the Right Move",
      excerpt: "As annoying as it can be to recieve yet another retelling of Star Fox 64, a fresh start is exactly what this franchise needs.",
      category: "Byte Take",
      date: "May 6th, 2026"
    },
    {
      title: "REVIEW: Tomodachi Life: Living the Dream is a Near Perfect Sequel",
      excerpt: "I've wanted a new Tomodachi Life for a long time, and I don't think I could've asked for much more from what we got.",
      category: "Review",
      date: "May 1st, 2026"
    },
    {
      title: "Yoshi and the Mysterious Book Gets Retail Demo",
      excerpt: "The intriguing, cozy platformer is available to try at select retailers two weeks ahead of release.",
      category: "News",
      date: "May 8th, 2026"
    },
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
