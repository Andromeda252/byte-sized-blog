import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import { posts } from "@/data/posts";

export default function PlayLogsPage() {
    const playLogPosts = posts.filter(
        (post) => post.category === "Play Log"
    )

    return (
        <PageContainer>
            <Navbar />
            <h1>Play Logs Page</h1>
            {playLogPosts.map((post) => (
                <PostCard
                    key={post.slug}
                    {...post}
                />
            ))}
        </PageContainer>
    )
}