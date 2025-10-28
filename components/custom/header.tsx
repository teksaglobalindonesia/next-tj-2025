"use client";

import Link from "next/link";
import { useEffect, useState } from "react"


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex flex-row h-[84px] px-[104px] items-center transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-silver shadow-md"
          : "bg-neutral-silver shadow-none"
      }`}>
      <img src="/Logo.png" className="w-[154px] h-[24px]" onClick={scrollToTop} />

      <div className="flex flex-row flex-1 justify-center items-center gap-8">
        <p>
          <Link href="/" className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200">
            Home
          </Link>
        </p>

        <p>
          <Link href="/service" className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200">
            Service
          </Link>
        </p>

        <p>
          <a href="" className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200">
            Feature
          </a>
        </p>

        <p>
          <a href="" className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200">
            Products
          </a>
        </p>

        <p>
          <a href="" className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200">
            Testimonial
          </a>
        </p>
        <p>
          <a href="" className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200">
            FAQ
          </a>
        </p>
      </div>

      <div className="flex flex-row gap-5">
        <button className="text-brand-primary text-[14px] font-inter w-[37px] h-[40px] hover:underline transition duration-200 ">
          Login
        </button>
        <button className="text-white bg-brand-primary text-[14px] font-inter w-[91px] h-[40px] rounded-lg  transition-all duration-300 hover:bg-shade-2 hover:scale-105">
          Sign Up
        </button>
      </div>
    </div>
  );
}
