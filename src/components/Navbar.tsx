export default function Navbar() {
    return (
        <nav className="flex items-center justify-between mb-12">
            <h1 className="text-2xl font-bold">
                The Byte-Sized Blog
            </h1>

            <div className="flex gap-6 text-sm font-medium text-zinc-600">
                <a href="#">Home</a>
                <a href="#">News</a>
                <a href="#">Byte Takes</a>
                <a href="#">Reviews</a>
                <a href="#">Playlog</a>
                <a href="#">About</a>
            </div>

            {/* <p className="text-lg text-gray-600">
                Short-form gaming content that cuts through the cloud of cynicism and focuses on what makes this medium great.
            </p> */}
        </nav>
    )
}