import { Post } from "@/types/post"
import PostCard from "./PostCard"
import RelatedPostCard from "./RelatedPostCard"

type RelatedPostsProps = {
    posts: Post[]
}

export default function RelatedPosts({
    posts
}: RelatedPostsProps) {
    return (
        <section className="mt-10 border-t pt-8">
            <h2 className="text-xl font-black mb-3 sm:text-3xl">Related Posts</h2>

            {posts.map(post => (
                <RelatedPostCard key={post.slug} {...post} />
            ))}
        </section>
    )
}