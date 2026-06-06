import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Post } from "@/types/post"

const postsDirectory = path.join(process.cwd(), "content/posts")

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.md$/, "")

    const fullPath = path.join(postsDirectory, `${realSlug}.md`)

    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data, content } = matter(fileContents)

    return {
        slug: realSlug,
        content,
        ...(data as Omit<Post, "slug" | "content">)
    }
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs()

    const posts = slugs.map((slug) => getPostBySlug(slug))

    return posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}

export function getRelatedPosts(
    currentSlug: string,
    tags: string[],
    limit = 3
) {
    const posts = getAllPosts()

    return posts
        .filter(post => post.slug !== currentSlug)
        .map(post => ({...post, matches: post.tags.filter(tag => tags.includes(tag)).length}))
        .filter(posts => posts.matches > 0)
        .sort((a, b) => b.matches - a.matches)
        .slice(0, limit)
}