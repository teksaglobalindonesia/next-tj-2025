"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-between items-center px-[104px] py-[106px] bg-neutral-silver overflow-hidden"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-lg"
      >
        <h1 className="text-[48px] font-bold text-neutral-dgrey font-inter leading-tight">
          Lessons and insights{" "}
          <span className="text-green-600 font-inter font-semibold">
            from 8 years
          </span>
        </h1>
        <p className="text-gray-500 mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2b7a4b" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-6 bg-brand-primary text-white px-6 py-3 rounded-md shadow-md"
        >
          Register
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src="/Illustration.png"
          alt="illustration"
          className="w-[391px] h-[407px]"
        />
      </motion.div>
    </motion.section>
  );
}
