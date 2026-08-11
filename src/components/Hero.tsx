export default function Hero() {
    return (
        // <section className="relative mb-12 overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-white via-red-50 to-red-100 p-6 shadow-sm sm:p-8 md:p-12">
        <section className="relative mb-9 overflow-hidden">
            {/* <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-red-200/40 blur-3xl" /> */}
            {/* <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-orange-200/30 blur-2xl" /> */}
            <div className="relative z-10">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
                    Passionate and Enthusiastic Gaming Coverage
                </p>
                <h2 className="mb-3 max-w-4xl text-lg font-black leading-tight tracking-tight text-zinc-900 sm:text-xl md:text-2xl">
                    Passionate gaming content that cuts through the cloud of cynicism and focuses on what makes this medium great.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-zinc-700 sm:text-lg sm:leading-8">
                    Gaming news, reviews, and takes focused on viewing the industry through an optimistic, enthusiastic lens.
                </p>
                <div className="mt-4 flex flex-row gap-4">
                    <a
                        href="/about"
                        className="rounded-xl border border-zinc-900 bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
                    >
                        About The Byte-Sized Blog
                    </a>
                    {/* <a
                        href="/posts/misc-welcome-to-byte-sized-blog"
                        className="rounded-xl border border-zinc-300 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-700 backdrop-blur transition-colors hover:bg-white"
                    >
                        New Here? Read This!
                    </a> */}
                </div>
            </div>
        </section>
    )
}