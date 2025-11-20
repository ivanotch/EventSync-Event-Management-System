import Footer from "../component/Footer";
import Header from "../component/Header";
import EventDisplay from "../component/student/EventDisplay";

export default function Dashboard() {
    return (
        <main>
            <Header />
            <div className="min-h-screen pb-10 px-15 mt-[2rem] flex">
                <div className="w-[25%]">
                    <div>
                        options
                    </div>
                </div>
                <div className="w-[75%]">
                    <EventDisplay />
                </div>
            </div>
            <Footer />
        </main>
    )
}