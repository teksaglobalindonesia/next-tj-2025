'use client';
import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".fade-up", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".hero-img", {
      scale: 0.8,
      rotate: -8,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.7)",
      delay: 0.5,
    });

    gsap.to(".hero-img", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-neutral-silver h-auto md:h-[599px] px-4 sm:px-6 md:px-[104px] py-10 md:py-0 items-center justify-between gap-6 md:gap-[104px] relative overflow-hidden">
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
        <h1 className="fade-up text-3xl sm:text-4xl md:text-[48px] font-bold leading-tight text-gray-700">
          Lessons and insights
        </h1>
        <h1 className="fade-up text-3xl sm:text-4xl md:text-[48px] font-bold leading-tight text-brand-primary">
          from 8 years
        </h1>
        <p className="fade-up text-sm sm:text-[14px] md:text-[16px] text-gray-600 mt-2">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="fade-up mt-4 bg-brand-primary text-white text-[14px] px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 w-fit mx-auto md:mx-0">
          Register
        </button>
      </div>
      <div className="mt-6 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src="/Illustration.png"
          alt="Hero"
          className="hero-img w-[240px] sm:w-[320px] md:w-[391px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
