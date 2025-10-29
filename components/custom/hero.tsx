"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col-reverse md:flex-row justify-between items-center 
                 px-6 sm:px-10 md:px-16 lg:px-[104px] 
                 py-16 sm:py-20 md:py-[106px] 
                 bg-neutral-silver overflow-hidden text-center md:text-left"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:max-w-lg"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-neutral-dgrey font-inter leading-snug sm:leading-tight">
          Lessons and insights{" "}
          <span className="text-green-600 font-inter font-semibold">
            from 8 years
          </span>
        </h1>

        <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base">
          Where to grow your business as a photographer: site or social media?
        </p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2b7a4b" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-5 sm:mt-6 bg-brand-primary text-white text-sm sm:text-base 
                     px-5 sm:px-6 py-2.5 sm:py-3 rounded-md shadow-md"
        >
          Register
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-10 md:mb-0 flex justify-center md:justify-end"
      >
        <img
          src="/Illustration.png"
          alt="illustration"
          className="w-60 sm:w-72 md:w-[360px] lg:w-[391px] h-auto"
        />
      </motion.div>
    </motion.section>
  );
}
