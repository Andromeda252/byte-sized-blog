import { Post } from "./post";

export type PostPreview = Pick<
    Post,
    "slug" | "title" | "excerpt" | "category" | "date" | "image"
>