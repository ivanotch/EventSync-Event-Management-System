'use client'
import { Button } from "@heroui/button";
import { Input } from "@heroui/react";
import { Checkbox } from "@heroui/checkbox";
import { Google } from "@deemlol/next-icons";
import { Facebook } from "@deemlol/next-icons";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="w-[30%] m-[auto] p-8 mt-[9%] shadow-[0_0_25px_rgba(0,0,0,0.15)]">
        <div className="flex justify-center items-center gap-2 mb-[1rem]">
          <Image
            src="/CCS-Logo.jpg"
            width={70}
            height={70}
            alt="Logo of CCS"
          />
          <header className="text-[1.5rem]">CCS EMS</header>
        </div>
        <div className="flex-col flex mb-[1rem]  items-left">
          <div className="text-[1.4rem]">Welcome To EventSync</div>
          <h2 className="text-gray-500">Sign-in to your account and start the adventure</h2>
        </div>
        <div className="">
          <div className=" flex flex-col gap-5">
            <Input label="Email" type="email" variant='bordered' />
            <Input label="Password" type="password" variant='bordered' />
            <div className="flex justify-between">
              <div>
                <Checkbox  size="sm">
                  Remember me
                </Checkbox>
              </div>
              <div className="text-sm">Forgot Your Account? Click Here</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-[1rem] flex-col">
          <Button variant="ghost" color="secondary" radius="sm" className="w-[100%]">Login</Button>
          <div className="flex w-full gap-3 items-center">
            <span className="flex-grow border-b border-gray-300"></span>
            <span>or</span>
            <span className="flex-grow border-b border-gray-300"></span>
          </div>
          <div className="flex gap-4">
            <Button isIconOnly aria-label="google" variant="ghost" color="secondary">
              <Google size={24} color="#ff0000ff" />
            </Button>
            <Button isIconOnly aria-label="facebook" variant="ghost" color="secondary">
              <Facebook size={24} color="#3110d1ff" />
            </Button>
            
          </div>
        </div>
      </div>
    </main>
  );
}
