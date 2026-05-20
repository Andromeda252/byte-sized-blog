import CategoryHeader from "@/components/CategoryHeader";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import { posts } from "@/data/posts";
import { categoryColors } from "@/lib/categoryColors";

export default function NewsPage() {
    const newsPosts = posts.filter(
        (post) => post.category === "News"
    )

    const colors = categoryColors["News"]

    return (
        <PageContainer>
            <Navbar />
            <CategoryHeader
                category="News"
                title="News"
                description="Quick, byte-sized coverage and reactions to the latest gaming news that matters to me."
            />
            {/* <section className="mb-10 rounded-2xl border border-orange-200 bg-orange-100 p-8">
                <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${colors.text}`}>
                    Category
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">
                    News
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                    Quick, byte-sized coverage and reactions to the latest gaming news that matters to me.
                </p>
            </section> */}
            <p className="text-sm text-zinc-500 mb-2">
                {newsPosts.length} posts
            </p>
            {newsPosts.map((post) => (
                <PostCard
                    key={post.slug}
                    {...post}
                />
            ))}
        </PageContainer>
    )
}