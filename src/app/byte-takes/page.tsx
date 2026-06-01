import CategoryPageLayout from "@/components/CategoryPageLayout";
import { getAllPosts } from "@/lib/posts";

export default function ByteTakesPage() {
    const posts = getAllPosts().filter((post) => post.published)

    const byteTakesPosts = posts.filter(
        (post) => post.category === "Byte Take"
    )

    return (
        <CategoryPageLayout
            category="Byte Take"
            title="Byte Takes"
            description="Opinionated takes on the latest Nintendo or gaming happenings, or just whatever's on my mind."
            posts={byteTakesPosts}
        />
    )
}