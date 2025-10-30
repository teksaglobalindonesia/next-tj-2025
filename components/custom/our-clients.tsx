"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Clients() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".clients-text", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
      });

      const logos = gsap.utils.toArray(".client-logo");
      gsap.set(logos, { opacity: 0, scale: 0 });

      tl.to(
        logos,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)", 
          stagger: {
            each: 0.15,
            from: "center", 
          },
        },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  const clients = [
    "/our7.png",
    "/our1.png",
    "/our2.png",
    "/our4.png",
    "/our5.png",
    "/our6.png",
    "/our2.png",
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-white py-[40px] px-[104px]">
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <h2 className="clients-text text-[36px] font-semibold text-neutral-dgrey">
          Our Clients
        </h2>
        <p className="clients-text text-gray-500 text-[16px]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="flex justify-between items-center flex-wrap w-full gap-16">
        {clients.map((src, i) => (
          <div key={i} className="w-[48px] h-[48px] flex items-center justify-center">
            <img src={src} alt={`client ${i + 1}`} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
