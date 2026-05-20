import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageContainer from "@/components/PageContainer";

export default function NotFound() {
    return (
        <PageContainer>
            <Navbar />

            <section className="flex flex-col items-center justify-center py-24 text-center">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                    404 Error
                </p>

                <h1 className="mb-6 text-5xl font-black tracking-tight text-zinc-900 sm:text-6xl">
                    Page Not Found
                </h1>

                <p className="mb-10 max-w-xl text-lg leading-8 text-zinc-600">
                    Insert funny text here.
                </p>

                <Link
                    href="/"
                    className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md">
                        Return Home
                    </Link>
            </section>
        </PageContainer>
    )
}