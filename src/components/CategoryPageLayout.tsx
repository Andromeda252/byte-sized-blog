import Navbar from "./Navbar";
import PageContainer from "./PageContainer";
import CategoryHeader from "./CategoryHeader";
import PostCard from "./PostCard";
import { PostPreview } from "@/types/postPreview";

type CategoryPageLayoutProps = {
    category: string
    title: string
    description: string
    posts: PostPreview[]
}

export default function CategoryPageLayout({
    category,
    title,
    description,
    posts
}: CategoryPageLayoutProps) {
    return (
        <PageContainer>
            <Navbar />

            <CategoryHeader
                category={category}
                title={title}
                description={description}
            />

            <p className="mb-3 text-sm text-zinc-500">
                {posts.length} posts
            </p>

            {posts.map((post) => (
                <PostCard
                    key={post.slug}
                    {...post}
                />
            ))}
        </PageContainer>
    )
}