import Navbar from "@/components/Navbar"
import PageContainer from "@/components/PageContainer"

export default function AboutPage() {
    return (
        <PageContainer>
            <Navbar />
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-700">
                    About The Byte-Sized Blog
                </h1>
                <p className="text-md md:text-lg mb-6 text-zinc-600 leading-relaxed">
                    The Byte-Sized Blog is a gaming blog that aims to offer a refreshingly enthusiastic 
                    and optimistic perspective on the gaming industry, with a desire to maintain focus 
                    on what makes video games so fun and exciting. Primarily focused on Nintendo, but 
                    I am always willing to branch out and cover anything that interests me.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-700">
                    Why This Blog Exists
                </h2>
                <p className="text-md md:text-lg mb-6 text-zinc-600 leading-relaxed">
                    text
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-700">
                    Who Am I
                </h2>
                <p className="text-md md:text-lg mb-6 text-zinc-600 leading-relaxed">
                    more text
                </p>
        </PageContainer>
    )
}