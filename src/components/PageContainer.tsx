import Footer from "./Footer"

type PageContainerProps = {
    children: React.ReactNode
}

export default function PageContainer({
    children
}: PageContainerProps) {
    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            {children}

            <Footer />
        </main>
    )
}