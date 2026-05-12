import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import { posts } from "@/data/posts";

export default function ByteTakesPage() {
    const byteTakesPosts = posts.filter(
        (post) => post.category === "Byte Take"
    )

    return (
        <PageContainer>
            <Navbar />
            <h1>Byte Takes Page</h1>
            {byteTakesPosts.map((post) => (
                <PostCard
                    key={post.slug}
                    {...post}
                />
            ))}
        </PageContainer>
    )
}