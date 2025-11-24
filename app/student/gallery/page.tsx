import Header from "@/app/component/Header"
import Footer from "@/app/component/Footer"
import GalleryOptions from "@/app/component/student/GalleryOptions"
import GalleryDisplay from "@/app/component/student/GalleryDisplay"

export default function Gallery() {
    return (
        <main>
            <Header />
            <div className="min-h-screen pb-10 px-15 mt-[2rem] flex">
                <div className="w-[20%]">
                    <GalleryOptions />
                </div>
                <div className="w-[80%]">
                    <GalleryDisplay />
                </div>
            </div>
            <Footer />
        </main>
    )
}