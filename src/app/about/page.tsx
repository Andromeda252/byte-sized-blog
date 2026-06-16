import Navbar from "@/components/Navbar"
import PageContainer from "@/components/PageContainer"

export default function AboutPage() {
    return (
        <PageContainer>
            <Navbar />
            <section className="p-8 border rounded-xl bg-gradient-to-br from-white via-red-50 to-red-200 shadow-lg">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    About The Byte-Sized Blog
                </h1>
                <p className="text-md md:text-lg text-zinc-600 leading-relaxed">
                    The Byte-Sized Blog is a gaming blog that aims to offer a refreshingly enthusiastic 
                    and optimistic perspective on the gaming industry, with a desire to maintain focus 
                    on what makes video games so fun and exciting. Primarily focused on Nintendo, but 
                    I am always willing to branch out and cover anything that interests me.
                </p>
            </section>
        </PageContainer>
    )
}