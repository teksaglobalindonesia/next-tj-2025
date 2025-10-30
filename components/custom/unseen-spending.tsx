"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Spending() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    if (clicked) {
      tl.to(".spending-title", {
        x: 100,
        duration: 1,
        ease: "power2.inOut",
      })
        .to(
          ".spending-text",
          {
            x: -100,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          ".spending-img",
          {
            scale: 1.2,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
    } else {
      tl.to(".spending-title", {
        x: 0,
        duration: 1,
        ease: "power2.inOut",
      })
        .to(
          ".spending-text",
          {
            x: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          ".spending-img",
          {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
    }
  }, [clicked]);

  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between py-10 px-4 md:px-[104px]">
      <img
        src="/spending.png"
        alt=""
        className="spending-img w-full sm:w-[350px] md:w-[442px] h-auto md:h-[433px] mb-6 md:mb-0"
      />

      <div className="flex flex-col gap-[16px] w-full md:w-[661px] h-auto md:h-[268px] mb-[12px]">
        <h2 className="spending-title text-[36px] md:text-[36px] font-inter font-semibold text-neutral-dgrey leading-tight w-full md:w-[600px] h-auto md:h-[88px]">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="spending-text font-inter text-neutral-grey text-[14px] w-full md:w-[601px] h-auto md:h-[80px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque
          placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
          Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa
          pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar
          odio.
        </p>
        <button
          onClick={() => setClicked((prev) => !prev)} 
          className="w-[151px] h-[52px] py-[14px] px-[32px] bg-brand-primary text-white rounded-sm hover:bg-green-700 transition mt-6 gap-[10px]"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
