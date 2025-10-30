'use client';

import { useEffect } from "react";
import gsap from "gsap";

export default function Community() {
  const items = [
    {
      image: "/community1.png",
      title: "Membership <br /> Organisations",
      desc: "Full automation of membership renewals and payments",
    },
    {
      image: "/community2.png",
      title: "National <br /> Associations",
      desc: "Full automation of membership renewals and payments",
    },
    {
      image: "/community3.png",
      title: "Clubs And <br /> Groups",
      desc: "Full automation of membership renewals and payments",
    },
  ];

  useEffect(() => {
    gsap.set(".community-card", { opacity: 0, y: 40 });
    gsap.fromTo(
      ".community-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.25, ease: "power3.out" }
    );

    gsap.to(".community-img", { y: -5, rotation: 10, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" });
  }, []);

  return (
    <section className="bg-white py-[60px] px-6 md:px-[104px] flex flex-col items-center text-center mt-[48px] overflow-hidden">
      <div className="community-title max-w-[700px] mb-12">
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-gray-700">
          Manage your entire community
        </h2>
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-gray-700">
          in a single system
        </h2>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="flex justify-center items-start gap-8 md:gap-[127px] w-full flex-nowrap">
        {items.map((item, i) => (
          <div
            key={i}
            className="community-card bg-white shadow-md rounded-2xl p-8 w-[280px] md:w-[300px] h-[260px] flex flex-col items-center justify-start cursor-pointer transition-all hover:scale-105"
          >
            <div className="flex justify-center mb-4">
              <img src={item.image} alt="Community" className="community-img w-[60px] h-[52px] object-contain" />
            </div>
            <h3 className="font-bold text-[18px] sm:text-[20px] mb-2 text-gray-700 text-center leading-snug">
              Membership Organisations
            </h3>
            <p className="font-inter text-[13px] md:text-[14px] text-gray-600 text-center leading-snug">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
