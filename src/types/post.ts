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

    tags: string[]
}

export type PostCardProps = Pick<
    Post,
    "slug" | "title" | "excerpt" | "category" | "date" | "image"
>