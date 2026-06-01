import CategoryPageLayout from "@/components/CategoryPageLayout";
import { getAllPosts } from "@/lib/posts";

export default function NewsPage() {
    const posts = getAllPosts().filter((post) => post.published)

    const newsPosts = posts.filter(
        (post) => post.category === "News"
    )

    return (
        <CategoryPageLayout
            category="News"
            title="News"
            description="Quick, byte-sized coverage and reactions to the latest gaming news that matters to me."
            posts={newsPosts}
        />
    )
}