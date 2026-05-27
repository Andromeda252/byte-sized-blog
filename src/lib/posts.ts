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