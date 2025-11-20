import Image from "next/image"
import { Facebook, Mail } from "@deemlol/next-icons";
import { Button } from "@heroui/button";
import {Input} from "@heroui/react";

export default function Footer() {
    return (
        <main className="h-[20rem] grid-cols-4 grid gap-5 py-10 border-t">
            <div className="flex flex-col px-7 ml-[1rem]">
                <Image
                    src="/CCS-Logo.jpg"
                    width={80}
                    height={80}
                    alt="Logo of CCS"
                />
                <div className="flex gap-3">
                    <Button isIconOnly variant="faded">
                        <Facebook size={30} color="#003e58ff" />
                    </Button>
                    <Button isIconOnly variant="faded">
                        <Mail size={30} color="#a80000ff" />
                    </Button>
                </div>
            </div>
            <div className="p-7">
                <header className="font-bold mb-[1rem]">Contact Us</header>
                <ul className="text-gray-500 pl-3">
                    <li>College of Computing Studies</li>
                    <li>Information Technology</li>
                    <li>Computer Science</li>
                </ul>
            </div>
            <div className="p-7">
                <header className="font-bold mb-[1rem]">About Us</header>
                <ul className="text-gray-500 pl-3">
                    <li>College of Computing Studies</li>
                    <li>ITSA</li>
                    <li>COMSA</li>
                    <li>Previous Events</li>
                </ul>
            </div>
        </main>
    )
}