import Image from "next/image"
import { Button } from "@heroui/button"

export default function Header() {
    return (
        <main className="flex items-center px-15 py-2 justify-between border-b">
            <div className="flex items-center gap-3">
                <Image
                    src="/CCS-Logo.jpg"
                    width={50}
                    height={50}
                    alt="Logo of CCS"
                />
                <div className="text-[1.6rem]">CCS EventSync</div>
            </div>
            <div>
                <ul className="flex items-center gap-5">
                    <li>Dashboard</li>
                    <li>Gallery</li>
                    <li>Profile</li>
                    <li>
                        <Button className="w-[9rem] bg-black text-white" size="sm" variant="solid">
                            Logout
                        </Button>
                    </li>
                </ul>
            </div>
        </main>
    )
}