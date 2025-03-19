import { motion } from "motion/react";

import { Pharmacies } from "@/constants/constants";

const MarqueeV2 = () => {
  return (
    <section className="section-container">
      <div className="flex overflow-hidden mask-carousel py-2">
        <motion.div
          className="flex gap-16 flex-none pr-16 "
          animate={{ x: "-50%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <Stack />
          <Stack />
        </motion.div>
      </div>
    </section>
  );
};

const Stack = () => {
  return (
    <ul className="flex gap-16">
      {Pharmacies.map((pharmacy, index) => (
        <motion.li
          key={index}
          className="hover:text-black text-gray-500 group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110 text-xl font-semibold"
        >
          {pharmacy}
        </motion.li>
      ))}
    </ul>
  );
};

export default MarqueeV2;
