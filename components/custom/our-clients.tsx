'use client';

import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    "/our7.png",
    "/our1.png",
    "/our2.png",
    "/our4.png",
    "/our5.png",
    "/our6.png",
    "/our2.png",
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white py-10 px-6 md:px-[104px] mt-12">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-[28px] font-semibold text-gray-700">
          Our Clients
        </h2>
        <p className="text-gray-600 text-sm md:text-[16px] mt-2">
          We have been working with some Fortune 500+ clients
        </p>
      </motion.div>

      <motion.div
        className="flex flex-row flex-wrap justify-center items-center gap-8 md:gap-[120px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {clients.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Client ${i + 1}`}
            className="w-[45px] h-auto object-contain cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        ))}
      </motion.div>
    </div>
  );
}

