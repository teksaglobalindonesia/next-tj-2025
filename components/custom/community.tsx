"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Community() {

  useEffect(() => {
    const initAnimation = () => {
      gsap.set(".card-community", { opacity: 1, rotate: 0 });

      gsap.from(".card-community", {
        rotate: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card-community",
          start: "top 95%",
          scrub: false,
          once: true, 
        },
      });

      gsap.from(".community-text", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".community-text",
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,

        },
      });

      ScrollTrigger.refresh();
    };

    if (document.readyState === "complete") {
      initAnimation();
    } else {
      window.addEventListener("load", initAnimation);
    }

    return () => {
      window.removeEventListener("load", initAnimation);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      className="flex flex-col justify-center items-center 
                 px-6 sm:px-10 md:px-16 lg:px-[104px] 
                 py-12 sm:py-16 md:py-[40px] 
                 bg-white text-center"
    >
      {/* Title */}
      <div className="flex flex-col items-center mb-10 max-w-xl">
        <h2 className="community-text font-inter text-2xl sm:text-3xl md:text-[36px] font-semibold text-neutral-dgrey leading-snug sm:leading-tight">
          Manage your entire community in a single system
        </h2>
        <p className="community-text font-inter text-sm sm:text-base md:text-[16px] text-neutral-grey mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>                                                     
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-8 sm:gap-10 lg:gap-[80px] xl:gap-[127px] 
                   w-full max-w-6xl"
      >
        {/* card 1 */}
        <div className="card-community flex flex-col items-center bg-white 
                        w-full max-w-[299px] mx-auto 
                        rounded-2xl shadow-md px-6 pt-6 pb-6 
                        transition-all duration-300 
                        hover:-translate-y-2 hover:shadow-xl">
          <img src="member-icon.png" alt="" className="w-12 sm:w-[64px] h-auto mb-4 mt-2" />
          <h3 className="text-xl sm:text-2xl font-inter font-semibold text-neutral-dgrey mb-3 leading-snug">
            Membership Organization
          </h3>
          <p className="text-neutral-dgrey font-inter text-sm sm:text-[14px] text-center leading-snug">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        {/* card 2 */}
        <div className="card-community flex flex-col items-center bg-white 
                        w-full max-w-[299px] mx-auto 
                        rounded-2xl shadow-md px-6 pt-6 pb-6 
                        transition-all duration-300 
                        hover:-translate-y-2 hover:shadow-xl">
          <img src="association-icon.png" alt="" className="w-12 sm:w-[64px] h-auto mb-4 mt-2" />
          <h3 className="text-xl sm:text-2xl font-inter font-semibold text-neutral-dgrey mb-3 leading-snug">
            National Association
          </h3>
          <p className="text-neutral-dgrey font-inter text-sm sm:text-[14px] text-center leading-snug">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        {/* card 3 */}
        <div className="card-community flex flex-col items-center bg-white 
                        w-full max-w-[299px] mx-auto 
                        rounded-2xl shadow-md px-6 pt-6 pb-6 
                        transition-all duration-300 
                        hover:-translate-y-2 hover:shadow-xl">
          <img src="group-icon.png" alt="" className="w-12 sm:w-[64px] h-auto mb-4 mt-2" />
          <h3 className="text-xl sm:text-2xl font-inter font-semibold text-neutral-dgrey mb-3 leading-snug">
            Clubs and Groups
          </h3>
          <p className="text-neutral-dgrey font-inter text-sm sm:text-[14px] text-center leading-snug">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>
      </div>
    </section>
  );
}
