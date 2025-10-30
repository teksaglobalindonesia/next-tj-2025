'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export default function Spending() {
  const [animateContent, setAnimateContent] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 py-12 px-6 md:px-[104px] bg-white mt-[48px] overflow-hidden">
      <motion.div
        className="flex justify-center md:w-1/2"
        animate={
          animateContent
            ? { rotate: [0, 360], transition: { duration: 2, ease: "easeInOut", repeat: Infinity } }
            : { rotate: 0, transition: { duration: 0.5, ease: "easeOut" } }
        }
      >
        <motion.img
          src="/spending0.png"
          alt="Illustration"
          className="w-[320px] md:w-[430px] h-auto object-contain"
          animate={
            animateContent
              ? { scale: [1, 1.05, 1], rotate: [0, 10, -10, 0] }
              : { scale: 1, rotate: 0 }
          }
          transition={{
            duration: 2,
            repeat: animateContent ? Infinity : 0,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="p-6 rounded-md md:w-1/2 flex flex-col justify-center text-left"
        animate={
          animateContent
            ? { scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }
            : { scale: 1, rotate: 0 }
        }
        transition={{
          duration: 2,
          repeat: animateContent ? Infinity : 0,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <h2 className="text-[22px] md:text-[36px] font-semibold text-gray-600 leading-snug mb-3">
          The unseen of spending three <br /> years at Pixelgrade
        </h2>

        <p className="text-gray-600 text-[14px] max-w-[600px] mb-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
          Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum
          lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus
          pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setAnimateContent(!animateContent)}
          className={`px-3 py-1.5 w-[150px] h-[42px] rounded-md mt-2 font-medium text-[16px] transition ${
            animateContent
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {animateContent ? "Learn More" : "Learn More"}
        </motion.button>
      </motion.div>
    </section>
  );
}
