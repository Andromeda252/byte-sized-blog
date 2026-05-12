export default function Footer() {
    return (
        <footer className="mt-16 border-t border-zinc-200 pt-6 pb-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-semibold text-zinc-900">
                        The Byte-Sized Blog
                    </p>
                    <p className="text-sm text-zinc-500">
                        Gaming news, reviews, and takes focused on viewing the industry through an optimistic, enthusiastic lens.
                    </p>
                </div>
            </div>
        </footer>
    )
}