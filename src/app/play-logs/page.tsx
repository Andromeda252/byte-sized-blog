import CategoryPageLayout from "@/components/CategoryPageLayout";
import { getAllPosts } from "@/lib/posts";

export default function PlayLogsPage() {
    const posts = getAllPosts().filter((post) => post.published)

    const playLogPosts = posts.filter(
        (post) => post.category === "Play Log"
    )

    return (
        <CategoryPageLayout
            category="Play Log"
            title="Play Logs"
            description="Weekly journalings and impressions on what I've been playing over the past week."
            posts={playLogPosts}
        />
    )
}