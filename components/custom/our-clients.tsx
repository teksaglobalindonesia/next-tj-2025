"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Clients() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // ✨ Animasi teks muncul dari bawah satu per satu
      tl.from(".clients-text", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
      });

      // 💥 Animasi gambar muncul dari kecil ke besar (efek gelombang/pluffy)
      const logos = gsap.utils.toArray(".client-logo");

      gsap.set(logos, { opacity: 0, scale: 0 });

      tl.to(
        logos,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)", // efek meledak lembut/pluffy
          stagger: {
            each: 0.15,
            from: "center", // mulai dari tengah, nyebar kiri-kanan
          },
        },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

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
