"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Spending() {

  useEffect(() => {

    gsap.from (".img-spending", {
      opacity: 0,
      x: -50,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
          trigger: ".img-spending",
          start: "top 70%",
          scrub: false,
          once: true, 

      }
    }),

    gsap.from (".text-spending", {
      opacity: 0,
      y: 50,
      ease: "power2.out",
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
          trigger: ".text-spending",
          start: "top 70%",
          scrub: false,
          once: true, 

      }
    }),
    
    gsap.from(".button-spending", {
      opacity: 0,
      y: 40,
      ease: "power2.out",
      duration: 0.5,
      scrollTrigger: {
          trigger: ".button-spending",
          start: "top 75%",
          scrub: false,
          once: true, 

      }
    })
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-[104px] py-[60px] gap-12 bg-white">
      
     
      <img
        src="/spending-icon.png"
        alt="Spending Illustration"
        className="img-spending w-[320px] md:w-[442px] h-auto object-contain"
      />

     
      <div className="flex flex-col gap-4 md:gap-6 max-w-[661px]">
        <h2 className="text-spending font-inter text-[28px] md:text-[36px] font-semibold text-neutral-dgrey leading-tight">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-spending font-inter text-neutral-grey text-[15px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo
          ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat
          vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar
          sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae,
          tempus sem. Donec elementum pulvinar odio.
        </p>

        <button className="button-spending w-[160px] py-[14px] px-[32px] bg-brand-primary text-white font-inter rounded-md mt-4 transition-all duration-300 hover:bg-shade-2 hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  );
}
