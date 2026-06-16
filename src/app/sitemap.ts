import { MetadataRoute } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { tagToSlug } from "@/lib/tagSlug";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts()
    const tags = getAllTags()

    const postURLs = posts.map((post) => ({
        url: `https://abc.com/posts/${post.slug}`,
        lastModified: new Date(post.date)
    }))

    const tagURLs = tags.map((tag) => ({
        url: `https://abc.com/tags/${tagToSlug(tag)}`,
        lastModified: new Date()
    }))

    return [
        {
            url: "https://abc.com",
            lastModified: new Date()
        },
        {
            url: "https://abc.com/news",
            lastModified: new Date()
        },
        {
            url: "https://abc.com/reviews",
            lastModified: new Date()
        },
        {
            url: "https://abc.com/play-logs",
            lastModified: new Date()
        },
        {
            url: "https://abc.com/byte-takes",
            lastModified: new Date()
        },
        {
            url: "https://abc.com/about",
            lastModified: new Date()
        },
        ...postURLs,
        ...tagURLs
    ]
}