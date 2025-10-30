"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-neutral-silver h-auto md:h-[84px] px-4 md:px-[105px] py-4 md:py-0 items-center">
      <div className="flex w-full md:w-auto items-center justify-between">
        <img src="/Logo.png" className="w-[154px] h-[24px]" alt=""/>
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      <div className={`flex flex-col md:flex-row flex-1 justify-center items-center gap-4 md:gap-8 mt-4 md:mt-0 ${isOpen ? "flex" : "hidden md:flex"}`}>
        <p className="font-inter text-[16px]">Home</p>
        <Link href="/service" className="font-inter text-[16px]">Service</Link>
        <p className="font-inter text-[16px]">Feature</p>
        <p className="font-inter text-[16px]">Product</p>
        <p className="font-inter text-[16px]">Testimonial</p>
        <p className="font-inter text-[16px]">FAQ</p>
      </div>

      <div className={`flex flex-row gap-4 mt-4 md:mt-0 ${isOpen ? "flex" : "hidden md:flex"}`}>
        <button className="text-brand-primary text-[14px] font-inter w-[77px] h-[40px]">Login</button>
        <button className="bg-brand-primary text-white text-[14px] font-inter w-[77px] h-[40px] rounded-lg">Signup</button>
      </div>

    </div>
  );
}
