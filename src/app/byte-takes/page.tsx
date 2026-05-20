import CategoryHeader from "@/components/CategoryHeader";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import PageContainer from "@/components/PageContainer";
import { posts } from "@/data/posts";
import { categoryColors } from "@/lib/categoryColors";

export default function ByteTakesPage() {
    const byteTakesPosts = posts.filter(
        (post) => post.category === "Byte Take"
    )

    const colors = categoryColors["Byte Take"]

    return (
        <PageContainer>
            <Navbar />
            <CategoryHeader
                category="Byte Take"
                title="Byte Takes"
                description="Opinionated takes on the latest Nintendo or gaming happenings, or just whatever's on my mind."
            />
            {/* <section className="mb-10 rounded-2xl border border-amber-200 bg-amber-100 p-8">
                <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${colors.text}`}>
                    Category
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">
                    Byte Takes
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                    Opinionated takes on the latest Nintendo or gaming happenings, or just whatever's on my mind.
                </p>
            </section> */}
            <p className="text-sm text-zinc-500 mb-2">
                {byteTakesPosts.length} posts
            </p>
            {byteTakesPosts.map((post) => (
                <PostCard
                    key={post.slug}
                    {...post}
                />
            ))}
        </PageContainer>
    )
}