'use client';
import { useEffect } from "react";
import gsap from "gsap";

export default function Community() {
  const items = [
    { image: "/community1.png", title: <>Membership <br /> Organisations</>, desc: "Our membership management software provides full automation of membership renewals and payments" },
    { image: "/community2.png", title: <>National <br /> Associations</>, desc: "Our membership management software provides full automation of membership renewals and payments" },
    { image: "/community3.png", title: <>Clubs And <br /> Groups</>, desc: "Our membership management software provides full automation of membership renewals and payments" },
  ];

  useEffect(() => {
    gsap.from(".community-title", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from(".community-card", { y: 50, opacity: 0, duration: 0.8, stagger: 0.3, ease: "power3.out", delay: 0.3 });
    gsap.to(".community-img", { rotate: 360, repeat: -1, duration: 8, ease: "linear" });
  }, []);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-[104px] flex flex-col items-center text-center mt-12">
      <div className="community-title max-w-full sm:max-w-[700px] mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-[28px] font-semibold text-gray-700">Manage your entire community</h2>
        <h2 className="text-2xl sm:text-3xl md:text-[28px] font-semibold text-gray-700 mb-2">in a single system</h2>
        <p className="text-sm sm:text-[14px] md:text-[16px] text-gray-600">Who is Nextcent suitable for?</p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-[127px] w-full">
        {items.map((item, index) => (
          <div key={index} className="community-card bg-white shadow-md rounded-2xl p-6 sm:p-8 w-[240px] sm:w-[280px] md:w-[300px] h-[260px] flex flex-col items-center justify-start cursor-pointer transition-all">
            <div className="w-[60px] h-[60px] mb-4 flex items-center justify-center">
              <img src={item.image} alt="Community" className="community-img object-contain w-full h-full" />
            </div>
            <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] mb-2 text-gray-700 text-center leading-snug">{item.title}</h3>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-600 text-center leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
