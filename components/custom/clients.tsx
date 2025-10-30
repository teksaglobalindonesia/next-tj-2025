"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ClientsSection() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- Animasi teks judul ---
      const textTl = gsap.fromTo(
        ".client-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".client-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // --- Animasi logo ---
      const logoTl = gsap.fromTo(
        ".client-logo",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".client-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      ScrollTrigger.refresh();
      return () => {
        textTl.kill();
        logoTl.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="client-section flex flex-col items-center justify-center bg-white px-6 py-16 ">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="client-text text-3xl sm:text-4xl font-semibold text-gray-800 mb-2">
          Our Clients
        </h2>
        <p className="client-text text-gray-500 text-sm sm:text-base max-w-md mx-auto">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      {/* Client Logos */}
      <div className="client-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 sm:gap-10 md:gap-14 items-center justify-items-center w-full">
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <img
            key={n}
            src={`/client${n}.png`}
            className="client-logo h-10 sm:h-12 md:h-[48px] w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            alt={`Client ${n}`}
          />
        ))}
      </div>
    </section>
  );
}
