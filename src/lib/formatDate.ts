export function formatDate(dateString: string) {
    const date = new Date(`${dateString}T12:00:00`)

    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })
}