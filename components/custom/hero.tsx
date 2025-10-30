"use client";
import { useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
     const title = useRef(null);
     
     useEffect(() => {
         gsap.from(".title", {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger:0.2
         });
     }, []);

     useEffect(() => {
        gsap.from(".foto", {
          x: 100,
          opacity: 0,
          ease: "power2.out",
          duration: 1
        })
     }, [])

  return (
    <section
      className="flex flex-col-reverse md:flex-row justify-between items-center 
                 px-6 sm:px-10 md:px-16 lg:px-[104px] 
                 py-16 sm:py-20 md:py-[106px] 
                 bg-neutral-silver overflow-hidden text-center md:text-left"
    >
      {/* Left Text Section */}
      <div
        className="w-full md:max-w-lg"
      >
        <h1 className="title text-3xl sm:text-4xl lg:text-[48px] font-bold text-neutral-dgrey font-inter leading-snug sm:leading-tight">
          Lessons and insights{" "}
          <span className="text-green-600 font-inter font-semibold">
            from 8 years
          </span>
        </h1>

        <p className="title text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base">
          Where to grow your business as a photographer: site or social media?
        </p>

        <button
          className="title mt-5 sm:mt-6 bg-brand-primary text-white text-sm sm:text-base 
                     px-5 sm:px-6 py-2.5 sm:py-3 rounded-md shadow-md"
        >
          Register
        </button>
      </div>

      {/* Right Image Section */}
      <div
        className="mb-10 md:mb-0 flex justify-center md:justify-end"
      >
        <img
          src="/Illustration.png"
          alt="illustration"
          className="foto w-60 sm:w-72 md:w-[360px] lg:w-[391px] h-auto"
        />
      </div>
    </section>
  );
}
