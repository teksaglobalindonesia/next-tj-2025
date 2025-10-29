"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = ["Home", "Service", "Feature", "Products", "Testimonial", "FAQ"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-silver shadow-md" : "bg-neutral-silver shadow-none"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 h-16 md:h-[84px]">
        {/* Logo */}
        <img
          src="/Logo.png"
          alt="Logo"
          className="w-28 md:w-[154px] h-auto cursor-pointer"
          onClick={scrollToTop}
        />

        {/* Navigation (desktop) */}
        <nav className="hidden md:flex flex-row flex-1 justify-center items-center gap-6 lg:gap-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="font-inter text-sm lg:text-[16px] hover:text-brand-primary transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Buttons (desktop) */}
        <div className="hidden md:flex flex-row gap-3 lg:gap-5">
          <button className="text-brand-primary text-sm lg:text-[14px] font-inter px-2 hover:underline transition duration-200">
            Login
          </button>
          <button className="text-white bg-brand-primary text-sm lg:text-[14px] font-inter px-4 py-2 rounded-lg transition-all duration-300 hover:bg-shade-2 hover:scale-105">
            Sign Up
          </button>
        </div>

        {/* Hamburger icon (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none"
        >
          <span
            className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu (mobile only) */}
      <div
        className={`md:hidden bg-neutral-silver shadow-inner transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-base text-gray-800 hover:text-brand-primary transition-colors duration-200"
            >
              {item}
            </Link>
          ))}

          <div className="flex flex-col w-full items-center gap-3 pt-3 border-t border-gray-300">
            <button className="text-brand-primary text-[14px] font-inter hover:underline transition duration-200">
              Login
            </button>
            <button className="text-white bg-brand-primary text-[14px] font-inter px-4 py-2 rounded-lg transition-all duration-300 hover:bg-shade-2 hover:scale-105">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
