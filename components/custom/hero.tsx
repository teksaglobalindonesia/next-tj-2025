"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          scrub: false,
        },
      });

      tl.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      tl.from(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.95, 
          rotateZ: -3, 
          duration: 1,
          transformOrigin: "center center",
          clearProps: "transform", 
        },
        "-=0.4"
      );

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col-reverse md:flex-row items-center justify-between bg-neutral-silver px-4 md:px-[104px] py-10 md:py-[106px] gap-4 md:gap-8"
    >
      <div className="max-w-full md:max-w-lg text-center md:text-left mt-6 md:mt-0">
        <h1 className="hero-text text-3xl md:text-[48px] font-bold text-dgray leading-snug md:leading-tight mb-4">
          Lessons and insights{" "}
          <span className="text-green-600">from 8 years</span>
        </h1>
        <p className="hero-text text-gray-600 mt-4 mb-6 text-sm md:text-base">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="hero-text bg-brand-primary hover:bg-green-700 text-white px-6 py-3 rounded-sm">
          Register
        </button>
      </div>

      <div ref={imageRef} className="flex justify-center md:justify-end md:ml-4">
        <img
          src="/Illustration.png"
          alt="Hero Illustration"
          className="w-[250px] sm:w-[350px] md:w-[391px] h-auto md:h-[407px]"
        />
      </div>
    </div>
  );
}
