export function tagToSlug(tag: string) {
    return tag.toLowerCase().replaceAll(" ", "-")
}

export function slugToTag(slug: string) {
    return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}