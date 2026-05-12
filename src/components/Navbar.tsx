"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="mb-12 flex flex-col gap-6 border-b border-zinc-200 pb-6 md:items-center md:justify-between">
            <h1 className="text-2xl font-black tracking-tight text-zinc-900">
                The Byte-Sized Blog
            </h1>

            <div className="flex flex-wrap gap-5 text-sm font-medium text-zinc-600">
                <Link href="/" className={`transition-colors hover:text-red-600 ${
                    pathname === "/"
                        ? "text-red-600"
                        : "text-zinc-600"
                }`}>Home</Link>
                <Link href="/news" className={`transition-colors hover:text-red-600 ${
                    pathname === "/news"
                        ? "text-red-600"
                        : "text-zinc-600"
                }`}>News</Link>
                <Link href="/byte-takes" className={`transition-colors hover:text-red-600 ${
                    pathname === "/byte-takes"
                        ? "text-red-600"
                        : "text-zinc-600"
                }`}>Byte Takes</Link>
                <Link href="/reviews" className={`transition-colors hover:text-red-600 ${
                    pathname === "/reviews"
                        ? "text-red-600"
                        : "text-zinc-600"
                }`}>Reviews</Link>
                <Link href="/play-logs" className={`transition-colors hover:text-red-600 ${
                    pathname === "/play-logs"
                        ? "text-red-600"
                        : "text-zinc-600"
                }`}>Play Logs</Link>
                <Link href="/about" className={`transition-colors hover:text-red-600 ${
                    pathname === "/about"
                        ? "text-red-600"
                        : "text-zinc-600"
                }`}>About</Link>
            </div>
        </nav>
    )
}