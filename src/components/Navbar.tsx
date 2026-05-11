import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-12">
            <h1 className="text-2xl font-bold">
                The Byte-Sized Blog
            </h1>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-600">
                <a href="/">Home</a>
                <a href="/news">News</a>
                <a href="/byte-takes">Byte Takes</a>
                <a href="/reviews">Reviews</a>
                <a href="/play-logs">Play Logs</a>
                <Link href="/about">About</Link>
            </div>
        </nav>
    )
}