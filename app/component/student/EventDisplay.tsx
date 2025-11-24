'use client'
import { Input } from "@heroui/react";
import { Search } from "@deemlol/next-icons";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

const cardsData = [
    {
        title: "Acme Camera",
        status: "New",
        image: "https://heroui.com/images/card-example-6.jpeg",
        availableText: "Available soon.",
    },
    {
        title: "Acme Camera 2",
        status: "New",
        image: "https://heroui.com/images/card-example-6.jpeg",
        availableText: "Available soon.",
    },

    {
        title: "Acme Camera 2",
        status: "New",
        image: "https://heroui.com/images/card-example-6.jpeg",
        availableText: "Available soon.",
    },
    {
        title: "Acme Camera 2",
        status: "New",
        image: "https://heroui.com/images/card-example-6.jpeg",
        availableText: "Available soon.",
    },
    {
        title: "Acme Camera 2",
        status: "New",
        image: "https://heroui.com/images/card-example-4.jpeg",
        availableText: "Available soon.",
    },
    {
        title: "Acme Camera 2",
        status: "New",
        image: "https://heroui.com/images/card-example-2.jpeg",
        availableText: "Available soon.",
    },
    {
        title: "Acme Camera 2",
        status: "New",
        image: "https://heroui.com/images/card-example-5.jpeg",
        availableText: "Available soon.",
    },
    {
        title: "Acme Camera 2",
        status: "New",
        image: "https://heroui.com/images/card-example-6.jpeg",
        availableText: "Available soon.",
    },
    // Add more objects if needed
];

export default function EventDisplay() {


    return (
        <main className="flex flex-col gap-8">
            <div className="flex justify-between items-center px-5 ">
                <div className="w-[17rem]">
                    <Input
                        size="sm"
                        isClearable
                        classNames={{
                            label: "text-black/50 dark:text-white/90",
                            input: [
                                "bg-transparent",
                                "text-black/90 dark:text-white/90",
                                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                            ],
                            innerWrapper: "bg-transparent",
                            inputWrapper: [
                                "shadow-sm",
                                "bg-default-200/50",
                                "dark:bg-default/60",
                                "backdrop-blur-xl",
                                "backdrop-saturate-200",
                                "hover:bg-default-200/70",
                                "dark:hover:bg-default/70",
                                "group-data-[focus=true]:bg-default-200/50",
                                "dark:group-data-[focus=true]:bg-default/60",
                                "cursor-text!",
                            ],
                        }}
                        label="Search"
                        placeholder="Type to search..."
                        radius="sm"
                        startContent={
                            <Search size={20} color="#322f2fff" />
                        }

                    />
                </div>
                <div className="flex gap-3">
                    <Button size="sm">
                        New
                    </Button>
                    <Button size="sm">
                        Old
                    </Button>
                </div>
            </div>

            <div className="px-5">
                <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid gap-4">
                    {
                        cardsData.map((card, index) => (
                            <Card key={index} isFooterBlurred className="w-full h-[300px]">
                                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                    <p className="text-tiny text-white/60 uppercase font-bold">{card.status}</p>
                                    <h4 className="text-black font-medium text-2xl">{card.title}</h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card example background"
                                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                    src={card.image}
                                />
                                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                    <div>
                                        <p className="text-black text-tiny">{card.availableText}</p>
                                        <p className="text-black text-tiny">Get notified.</p>
                                    </div>
                                    <Button className="text-tiny" color="primary" radius="full" size="sm">
                                        Notify Me
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}