import { Post } from "@/types/post"
import PostCard from "./PostCard"

type RelatedPostsProps = {
    posts: Post[]
}

export default function RelatedPosts({
    posts
}: RelatedPostsProps) {
    return (
        <section>
            <h2>Related Posts</h2>

            {posts.map(post => (
                <PostCard key={post.slug} {...post} />
            ))}
        </section>
    )
}