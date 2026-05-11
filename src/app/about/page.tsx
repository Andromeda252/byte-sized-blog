import Navbar from "@/components/Navbar"

export default function AboutPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Navbar />
            <h1 className="text-4xl font-bold mb-6">
                About The Byte-Sized Blog
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
                The Byte-Sized Blog is a gaming blog that aims to offer a refreshingly enthusiastic 
                and optimistic perspective on the gaming industry, with a desire to maintain focus 
                on what makes video games so fun and exciting. Primarily focused on Nintendo, but 
                I am always willing to branch out and cover anything that interests me.
            </p>
        </main>
    )
}