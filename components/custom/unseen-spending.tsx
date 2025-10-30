'use client';
import { useRef, useState } from "react";
import gsap from "gsap";

export default function Spending() {
  const [isAnimating, setIsAnimating] = useState(false);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleAnimate = () => {
    if (!isAnimating) {
      gsap.to(imageRef.current, {
        scale: 1.05,
        rotation: 5,
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: "sine.inOut",
      });
      gsap.to(textRef.current, {
        scale: 1.05,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
        ease: "sine.inOut",
      });
    } else {
      gsap.killTweensOf([imageRef.current, textRef.current]);
      gsap.set([imageRef.current, textRef.current], { scale: 1, rotation: 0 });
    }
    setIsAnimating(!isAnimating);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 py-12 px-4 sm:px-6 md:px-[104px] bg-white mt-12 overflow-hidden">
      <div className="flex justify-center w-full md:w-1/2">
        <img
          ref={imageRef}
          src="/spending0.png"
          alt="Illustration"
          className="w-[280px] sm:w-[320px] md:w-[430px] h-auto object-contain"
        />
      </div>

      <div
        ref={textRef}
        className="p-4 sm:p-6 rounded-md w-full md:w-1/2 flex flex-col justify-center text-center md:text-left"
      >
        <h2 className="text-[20px] sm:text-[22px] md:text-[36px] font-semibold text-gray-600 leading-snug mb-3">
          The unseen of spending three <br /> years at Pixelgrade
        </h2>
        <p className="text-gray-600 text-[13px] sm:text-[14px] md:text-[14px] max-w-full sm:max-w-[600px] mb-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
          Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum
          lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus
          pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button
          onClick={handleAnimate}
          className={`px-3 py-1.5 w-[150px] h-[42px] rounded-md mt-2 font-medium text-[16px] transition mx-auto md:mx-0 ${
            isAnimating
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
