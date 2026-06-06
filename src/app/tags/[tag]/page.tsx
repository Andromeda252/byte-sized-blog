import PageContainer from "@/components/PageContainer";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { getAllTags, getAllPosts } from "@/lib/posts";
import { tagToSlug, slugToTag } from "@/lib/tagSlug";

type TagPageProps = {
    params: Promise<{
        tag: string
    }>
}

export async function generateStaticParams() {
    const tags = getAllTags()

    return tags.map((tag) => ({tag: tagToSlug(tag)}))
}

export default async function TagPage({
    params
}: TagPageProps) {
    const { tag } = await params
    const postTag = slugToTag(tag)
    const posts = getAllPosts().filter((post) => post.tags.includes(postTag))

    return (
        <PageContainer>
            <Navbar />
            <h1 className="mb-6 text-4xl font-bold">
                #{postTag}
            </h1>
            <p className="mb-3 text-sm text-zinc-500">
                {posts.length} posts
            </p>
            {posts.map((post) => (
                <PostCard key={post.slug} {...post}/>
            ))}
        </PageContainer>
    )
}