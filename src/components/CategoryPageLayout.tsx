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

            {posts.length == 1 ? (
                <p className="mb-3 text-sm text-zinc-500">
                    {posts.length} post
                </p>
            ) : (
                <p className="mb-3 text-sm text-zinc-500">
                    {posts.length} posts
                </p>
            )}
            
            {posts.length > 0 ? (
                posts.map((post) => (
                    <PostCard
                        key={post.slug}
                        {...post}
                    />
                ))
            ) : (
                <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/60 px-6 py-14 text-center">
                    <p className="mb-2 text-lg font-semibold text-zinc-800">
                        No posts yet.
                    </p>

                    <p className="text-zinc-500">
                        Content for this category is coming soon.
                    </p>
                </div>
            )}
        </PageContainer>
    )
}