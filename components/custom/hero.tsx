'use client';

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row bg-neutral-silver h-auto md:h-[599px] px-6 md:px-[104px] py-10 md:py-0 items-center justify-between gap-8 md:gap-[104px] relative overflow-hidden">

      <div className="flex flex-col gap-4 max-w-full md:max-w-[500px] text-center md:text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {["Lessons and insights", "from 8 years"].map((text, i) => (
            <motion.h1
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className={`text-4xl md:text-[48px] font-bold leading-tight ${
                i === 0 ? "text-gray-700" : "text-brand-primary"
              }`}
            >
              {text}
            </motion.h1>
          ))}

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
            className="text-sm md:text-[16px] text-gray-600 mt-2"
          >
            Where to grow your business as a photographer: site or social media?
          </motion.p>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
            className="mt-4 bg-brand-primary text-white text-[14px] px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 w-fit mx-auto md:mx-0"
          >
            Register
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-auto"
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <motion.img
          src="/Illustration.png"
          alt="Hero"
          className="w-[280px] sm:w-[350px] md:w-[391px] h-auto object-contain"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
