"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Community() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline(); 

      tl.to(".community-card", {
        rotation: 15, 
        duration: 1.2,
        ease: "power2.inOut",
        stagger: 0.2, 
      }).to(".community-card", {
        rotation: 0, 
        duration: 1.2,
        ease: "power2.inOut",
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center bg-white py-[40px] px-6 md:px-[144px]">
      <div className="text-center mb-10 max-w-[600px]">
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-neutral-dgrey leading-snug">
          Manage your entire community in a single system
        </h2>
        <p className="text-gray-500 text-[14px] sm:text-[15px] md:text-[16px] mt-2">
          Who is Nexcent suitable for?
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-[50px] md:gap-[127px]">
        <div className="community-card bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-8 w-[280px] sm:w-[300px] h-[260px] flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <img src="/community1.png" alt="" className="w-[60px] h-[52px]" />
          </div>
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-2 text-gray-700 text-center leading-snug">
            Membership <br /> Organisations
          </h3>
          <p className="font-inter text-[12px] sm:text-[13px] text-neutral-grey text-center leading-snug">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>

        <div className="community-card bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-8 w-[280px] sm:w-[300px] h-[260px] flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <img src="/community2.png" alt="" className="w-[60px] h-[52px]" />
          </div>
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-2 text-gray-700 text-center leading-snug">
            National <br /> Associations
          </h3>
          <p className="font-inter text-[12px] sm:text-[14px] text-neutral-grey text-center leading-snug">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>

        <div className="community-card bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-8 w-[280px] sm:w-[300px] h-[260px] flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <img src="/community3.png" alt="" className="w-[60px] h-[52px]" />
          </div>
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-2 text-gray-700 text-center leading-snug">
            Clubs And <br /> Groups
          </h3>
          <p className="font-inter text-[12px] sm:text-[13px] text-neutral-grey text-center leading-snug">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
      </div>
    </section>
  );
}
