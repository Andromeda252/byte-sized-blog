type PostPageProps = {
    params: Promise<{
        slug: string
    }>
}

export default async function PostPage({
    params
}: PostPageProps) {
    const { slug } = await params

    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-6">
                {slug}
            </h1>
            <p className="text-zinc-600">
                Dynamic post page successfully working.
            </p>
        </main>
    )
}