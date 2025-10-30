"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"];

  return (
    <header className="bg-neutral-silver">
      <div className="flex items-center justify-between h-[84px] px-6 md:px-[105px]">
        <img src="/Logo.png" className="w-[154px] h-[24px]" alt="Logo" />
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item) =>
            item === "Service" ? (
              <Link key={item} href="/service" className="font-inter text-[16px]">{item}</Link>
            ) : (
              <p key={item} className="font-inter text-[16px]">{item}</p>
            )
          )}
        </nav>
        <div className="hidden md:flex flex-row gap-4">
          <button className="text-brand-primary text-[14px] font-inter w-[77px] h-[40px]">Login</button>
          <button className="bg-brand-primary text-white text-[14px] font-inter w-[77px] h-[40px] rounded-lg">Signup</button>
        </div>
        <button className="md:hidden flex items-center" onClick={() => setOpen(!open)}>
          <Menu size={24} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-neutral-silver px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) =>
            item === "Service" ? (
              <Link key={item} href="/service" className="font-inter text-[16px]">{item}</Link>
            ) : (
              <p key={item} className="font-inter text-[16px]">{item}</p>
            )
          )}
          <div className="flex flex-row gap-4 mt-2">
            <button className="text-brand-primary text-[14px] font-inter w-[77px] h-[40px]">Login</button>
            <button className="bg-brand-primary text-white text-[14px] font-inter w-[77px] h-[40px] rounded-lg">Signup</button>
          </div>
        </div>
      )}
    </header>
  );
}
