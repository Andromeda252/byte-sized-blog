import { Source } from "./source"

export type Post = {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    content: string
    image: string

    featured: boolean
    published: boolean

    author: string
    readingTime: string

    sources?: Source[]

    tags: string[]
}