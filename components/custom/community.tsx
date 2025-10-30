'use client';

import { motion } from "framer-motion";

export default function Community() {
  const items = [
    {
      image: "/community1.png",
      title: (
        <>
          Membership <br /> Organisations
        </>
      ),
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image: "/community2.png",
      title: (
        <>
          National <br /> Associations
        </>
      ),
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image: "/community3.png",
      title: (
        <>
          Clubs And <br /> Groups
        </>
      ),
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <section className="bg-white py-[60px] px-6 md:px-[104px] flex flex-col items-center justify-center text-center mt-[48px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[700px] mb-12"
      >
        <h2 className="text-[24px] md:text-[28px] font-semibold text-gray-700">
          Manage your entire community
        </h2>
        <h2 className="text-[24px] md:text-[28px] font-semibold text-gray-700 mb-2">
          in a single system
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-600">
          Who is Nextcent suitable for?
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[127px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 w-[280px] md:w-[300px] h-[260px] flex flex-col items-center justify-start cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 50, rotate: index % 2 === 0 ? -8 : 8, scale: 0.9 },
              visible: { opacity: 1, y: 0, rotate: 0, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            whileHover={{
              scale: 1.07,
              rotate: index % 2 === 0 ? 3 : -3,
              boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex justify-center mb-4"
            >
              <img
                src={item.image}
                alt="Community"
                className="w-[60px] h-[52px] object-contain"
              />
            </motion.div>

            <h3 className="font-bold text-[18px] md:text-[20px] mb-2 text-gray-700 text-center leading-snug">
              {item.title}
            </h3>
            <p className="font-inter text-[13px] md:text-[14px] text-gray-600 text-center leading-snug">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
