import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import { Post } from "@/types/post"

const postsDirectory = path.join(process.cwd(), "content/posts")

export function getPostFiles(folder: string): string[] {
    const entries = fs.readdirSync(folder, { withFileTypes: true })
    
    let posts: string[] = []
    
    for (const entry of entries) {
        const fullPath = path.join(folder, entry.name)
        
        if (entry.isDirectory()) {
            posts.push(...getPostFiles(fullPath))
        } else if (entry.name.endsWith(".md")) {
            posts.push(fullPath)
        }
    }
    
    return posts
}

export function getPostSlugs() {
    // return fs.readdirSync(postsDirectory)
    return getPostFiles(postsDirectory).map((file) => 
        // path.relative(postsDirectory, file).replace(/\.md$/, "").replace(/\\/g, "/"))
        path.basename(file, ".md")
    )
}

export function getPostBySlug(slug: string): Post {
    // const realSlug = slug.replace(/\.md$/, "")

    // const fullPath = path.join(postsDirectory, `${realSlug}.md`)

    const postPath = getPostFiles(postsDirectory).find(
        (post) => path.basename(post, ".md") === slug
    )
    
    if (!postPath) {
        throw new Error(`Post "${slug}" not found.`)
    }
    
    const fileContents = fs.readFileSync(postPath, "utf8")

    const { data, content } = matter(fileContents)

    const readTime = readingTime(content)

    return {
        slug,
        content,
        ...(data as Omit<Post, "slug" | "content" | "readingTime">),
        readingTime: readTime.text
    }
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs()

    const posts = slugs.map((slug) => getPostBySlug(slug)).filter((post) => post.published)

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

export function getAllTags() {
    const posts = getAllPosts()

    const tags = posts.flatMap((post) => post.tags)

    return [...new Set(tags)]
}

export function getPostsByTag(tag: string) {
    const posts = getAllPosts()

    return posts.filter((post) => post.tags.includes(tag))
}