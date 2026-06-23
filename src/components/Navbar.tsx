"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        //Keeping this comment because the style is in line with how I eventually want to style the navbar down the line.
        <nav className="mb-6 flex flex-col gap-6 border-b border-zinc-200 pb-6 md:items-center md:justify-between">
        {/* <nav className="mb-6 border-b border-zinc-200 pb-6"> */}
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-black tracking-tight text-zinc-900">
                    The Byte-Sized Blog
                </Link>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg border border-zinc-200 p-2 text-zinc-700 transition hover:bg-zinc-100 md:hidden"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
            
            <div className={`
                mt-6 flex flex-col gap-3
                md:mt-0 md:flex md:flex-row md:flex-wrap md:gap-5
                text-sm font-medium
                ${menuOpen ? "flex" : "hidden md:flex"}
            `}>
                <Link href="/" className={`rounded-lg px-3 py-2 transition-colors hover:bg-red-50 hover:text-red-600 ${
                    pathname === "/"
                        ? "text-red-600"
                        : "text-zinc-600"
                }`}>Home</Link>
                <Link href="/news" className={`rounded-lg px-3 py-2 transition-colors hover:bg-orange-50 hover:text-orange-600 ${
                    pathname === "/news"
                        ? "text-orange-600"
                        : "text-zinc-600"
                }`}>News</Link>
                <Link href="/ramblings" className={`rounded-lg px-3 py-2 transition-colors hover:bg-amber-50 hover:text-amber-600 ${
                    pathname === "/ramblings"
                        ? "text-amber-600"
                        : "text-zinc-600"
                }`}>Ramblings</Link>
                <Link href="/reviews" className={`rounded-lg px-3 py-2 transition-colors hover:bg-sky-50 hover:text-sky-600 ${
                    pathname === "/reviews"
                        ? "text-sky-600"
                        : "text-zinc-600"
                }`}>Reviews</Link>
                <Link href="/play-logs" className={`rounded-lg px-3 py-2 transition-colors hover:bg-emerald-50 hover:text-emerald-600 ${
                    pathname === "/play-logs"
                        ? "text-emerald-600"
                        : "text-zinc-600"
                }`}>Play Logs</Link>
                <Link href="/about" className={`rounded-lg px-3 py-2 transition-colors hover:bg-red-50 hover:text-red-600 ${
                    pathname === "/about"
                        ? "text-red-600"
                        : "text-zinc-600"
                }`}>About</Link>
            </div>
        </nav>
    )
}