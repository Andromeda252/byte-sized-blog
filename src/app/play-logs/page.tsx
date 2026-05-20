import CategoryPageLayout from "@/components/CategoryPageLayout";
import CategoryHeader from "@/components/CategoryHeader";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import { posts } from "@/data/posts";
import { categoryColors } from "@/lib/categoryColors";

export default function PlayLogsPage() {
    const playLogPosts = posts.filter(
        (post) => post.category === "Play Log"
    )

    const colors = categoryColors["Play Log"]

    return (
        <CategoryPageLayout
            category="Play Log"
            title="Play Logs"
            description="Weekly journalings and impressions on what I've been playing over the past week."
            posts={playLogPosts}
        />
        // <PageContainer>
        //     <Navbar />
        //     <CategoryHeader
        //         category="Play Log"
        //         title="Play Logs"
        //         description="Weekly journalings and impressions on what I've been playing over the past week."
        //     />
        //     <section className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-100 p-8">
        //         <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${colors.text}`}>
        //             Category
        //         </p>
        //         <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">
        //             Play Logs
        //         </h1>
        //         <p className="max-w-2xl text-lg leading-8 text-zinc-600">
        //             Weekly journalings and impressions on what I've been playing over the past week.
        //         </p>
        //     </section>
        //     <p className="text-sm text-zinc-500 mb-2">
        //         {playLogPosts.length} posts
        //     </p>
        //     {playLogPosts.map((post) => (
        //         <PostCard
        //             key={post.slug}
        //             {...post}
        //         />
        //     ))}
        // </PageContainer>
    )
}