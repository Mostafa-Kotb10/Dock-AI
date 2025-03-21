import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { techStack } from "@/constants/constants";

const MarqueeV2 = () => {
  return (
    <Marquee>
      <div className="flex gap-25 my-24">
        {techStack.map((tech, index) => (
          <motion.div
            className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
            key={index}
            initial={{
              color: "gray",
            }}
            whileHover={{
              color: tech.color,
            }}
          >
            <tech.icon size={40} className="transition-colors duration-300" />
            <p className="mt-2 text-sm text-gray-700 group-hover:text-black">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeV2;
