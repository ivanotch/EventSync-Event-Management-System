'use client'
import { Input } from "@heroui/react";
import { Search } from "@deemlol/next-icons";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import {Accordion, AccordionItem} from "@heroui/accordion";
import { Image } from "@heroui/image";



export default function GalleryDisplay() {

    const data = [
        {
            key: "1",
            title: "Living Room Designs",
            images: [
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
                "https://images.unsplash.com/photo-1567016548193-60d0fcd4d237",
                "https://images.unsplash.com/photo-1586105251261-72a756497a12",
                "https://images.unsplash.com/photo-1615873968403-89e2df52b3c6",
            ],
        },
        {
            key: "2",
            title: "Bedroom Designs",
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
                "https://images.unsplash.com/photo-1617104678098-fbb5b1f33cd1",
                "https://images.unsplash.com/photo-1616594039964-ae9021e4f714",
            ],
        },
        {
            key: "3",
            title: "Kitchen Designs",
            images: [
                "https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            ],
        },
    ];

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
                <div className="">
                    <Accordion selectionMode="multiple" defaultExpandedKeys={data.map((item) => item.key)}>
                        {data.map((item) => (
                            <AccordionItem key={item.key} title={item.title}>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {item.images.map((img, index) => (
                                        <div key={index} className="overflow-hidden rounded-xl">
                                            <img
                                                src={img}
                                                alt={item.title}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </main>
    )
}