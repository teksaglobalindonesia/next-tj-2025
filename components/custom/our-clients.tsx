"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Clients() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".clients-text", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".clients-section",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      const logos = gsap.utils.toArray(".client-logo");
      gsap.set(logos, { opacity: 0, scale: 0, transformOrigin: "center center" });

      gsap.to(logos, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        stagger: {
          each: 0.15,
          from: "center",
        },
        scrollTrigger: {
          trigger: ".clients-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="clients-section flex flex-col justify-center items-center bg-white py-[40px] px-4 sm:px-12 md:px-[104px]">
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <h2 className="clients-text text-[36px] font-semibold text-neutral-dgrey">
          Our Clients
        </h2>
        <p className="clients-text text-gray-500 text-[16px]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 justify-items-center gap-8 sm:gap-12 md:gap-16 w-full">
        <img src="/our1.png" alt="client 1" className="client-logo w-[48px] h-[48px]" />
        <img src="/our2.png" alt="client 2" className="client-logo w-[48px] h-[48px]" />
        <img src="/our3.png" alt="client 3" className="client-logo w-[48px] h-[48px]" />
        <img src="/our4.png" alt="client 4" className="client-logo w-[48px] h-[48px]" />
        <img src="/our5.png" alt="client 5" className="client-logo w-[48px] h-[48px]" />
        <img src="/our6.png" alt="client 6" className="client-logo w-[48px] h-[48px]" />
        <img src="/our7.png" alt="client 7" className="client-logo w-[48px] h-[48px]" />
      </div>
    </div>
  );
}
