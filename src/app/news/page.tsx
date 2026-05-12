import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import { posts } from "@/data/posts";

export default function NewsPage() {
    const newsPosts = posts.filter(
        (post) => post.category === "News"
    )

    return (
        <PageContainer>
            <Navbar />
            <h1>News Page</h1>
            {newsPosts.map((post) => (
                <PostCard
                    key={post.slug}
                    {...post}
                />
            ))}
        </PageContainer>
    )
}