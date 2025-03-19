import { FaAngleRight, FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { motion } from "motion/react";
import { BackgroundShapes } from "./design/design";

// from-blue-950 from-40% to-blue-600
// bg-gradient-to-r from-30% from-cyan-700 to-emerald-600

const HeroV2 = () => {
  return (
    <section className="relative">
      <div className="section-container ">
        <BackgroundShapes />
        <div className="relative px-6 py-1 bg-white rounded-sm shadow-xl w-fit mx-auto flex items-center gap-1">
          <motion.div
            className="absolute -inset-1.5 blur bg-gradient-to-r from-cyan-700 to-emerald-600 -z-10"
            initial={{
              rotateZ: 0.8,
            }}
            animate={{
              rotateZ: -0.8,
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <FaAngleRight className="size-4" />
          <span>version 1.9.0 is out now</span>
        </div>

        <div className=" text-center mt-20 space-y-4">
          <h1 className="text-5xl max-w-xl mx-auto text-cyan-700  font-bold">
            {/* Manage your Pharmacy with FastAF */}
            Pharmacy Mangment Easier Than Before.
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Using Dock build high performance websites using a sit of tools to
            help to enhance your capabilities
          </p>
        </div>

        <div className="flex gap-2 justify-center mt-6 ">
          <Button className="rounded-sm bg-white text-black border-2 border-cyan-700 hover:bg-cyan-800 hover:text-white transition-all duration-300">
            Sign Up
          </Button>
          <Button className="group inline-flex items-center  bg-cyan-700 hover:bg-cyan-800 transition-all duration-200  border-cyan-700 hover:border-cyan-800 border-2">
            <span>Read the docs </span>
            <FaLongArrowAltRight className="group-hover:-rotate-[30deg] transition-all duration-200" />
          </Button>
        </div>

        <div className="flex flex-col items-center space-y-3 mt-30 ">
          <div className="size-5 rounded-full bg-cyan-700 animate-bounce" />
          <hr className="w-10 border-1 border-black" />
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
