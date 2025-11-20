'use client'
import { Button } from "@heroui/button";
import { Input } from "@heroui/react";
import { Checkbox } from "@heroui/checkbox";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="w-[30%] m-[auto] p-8 mt-[10%] shadow-[0_0_25px_rgba(0,0,0,0.15)]">
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
          <h2>Sign-in to your account and start the adventure</h2>
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
        <div className="flex items-center mt-[1rem] flex-col">
          <Button radius="sm">Login</Button>
          <div>or</div>
          <div>
            Other Login Options
          </div>
        </div>
      </div>
    </main>
  );
}
