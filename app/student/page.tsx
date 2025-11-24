import Footer from "../component/Footer";
import Header from "../component/Header";
import EventDisplay from "../component/student/EventDisplay";
import EventOptions from "../component/student/EventOptions";


export default function Dashboard() {
    return (
        <main>
            <Header />
            <div className="min-h-screen pb-10 px-15 mt-[2rem] flex">
                <div className="w-[20%]">
                    <EventOptions />
                </div>
                <div className="w-[80%]">
                    <EventDisplay />
                </div>
            </div>
            <Footer />
        </main>
    )
}