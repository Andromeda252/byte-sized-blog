import { categoryColors } from "@/lib/categoryColors";

type CategoryHeaderProps = {
    category: string
    title: string
    description: string
}

export default function CategoryHeader({
    category,
    title,
    description
}: CategoryHeaderProps) {
    const colors = categoryColors[category]

    const backgroundStyles: Record<string, string> = {
        News: "border-orange-200 bg-orange-100",
        "Byte Take": "border-amber-200 bg-amber-100",
        Review: "border-red-200 bg-red-100",
        "Play Log": "border-emerald-200 bg-emerald-100"
    }

    return (
        <section className={`mb-10 rounded-2xl border p-6 shadow-sm sm:p-8 ${backgroundStyles[category]}`}>
            <p className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${colors.text}`}>
                Category
            </p>

            <h1 className="mb-4 text-3xl font-black uppercase tracking-tight text-zinc-900 sm:text-4xl">
                {title}
            </h1>

            <p className="max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">
                {description}
            </p>
        </section>
    )
}