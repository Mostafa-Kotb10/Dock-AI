import { FaAngleRight, FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { motion } from "motion/react";

const HeroV2 = () => {
  return (
    <section className="">
      <div className="section-container pb-0 ">
        <div className="relative px-6 py-1 bg-white rounded-sm shadow-xl w-fit mx-auto flex items-center gap-1">
          <motion.div
            className="absolute -inset-1 blur bg-gradient-to-r from-blue-950 to-blue-600 -z-10"
            initial={{
              rotateZ: 0.6,
            }}
            animate={{
              rotateZ: -0.6,
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <FaAngleRight className="size-4" />
          <span>version 1.9.0 is out now</span>
        </div>

        <div className=" text-center mt-20 space-y-4">
          <h1 className="text-5xl max-w-lg mx-auto bg-gradient-to-r from-blue-950 from-40% to-blue-600 bg-clip-text text-transparent font-bold">
            Build robust websites with Dock AI
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Using Dock build high performance websites using a sit of tools to
            help to enhance your capabilities
          </p>
        </div>

        <div className="flex gap-2 justify-center mt-6 ">
          <Button className="bg-white text-blue-950 border-2 border-blue-950 hover:bg-blue-950 hover:text-white transition-all duration-200 ">
            Sign Up
          </Button>
          <Button className="group inline-flex items-center  bg-blue-800 hover:bg-blue-900 transition-all duration-200  border-blue-800 hover:border-blue-900 border-2">
            <span>Read the docs </span>
            <FaLongArrowAltRight className="group-hover:-rotate-[30deg] transition-all duration-200"/>
          </Button>
        </div>

        <div className="flex flex-col items-center space-y-3 mt-30 ">
          <div className="size-5 rounded-full bg-blue-950 animate-bounce" />
          <hr className="w-10 border-1 border-blue-950" />
        </div>
        
      </div>
    </section>
  );
};

export default HeroV2;
