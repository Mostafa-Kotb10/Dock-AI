import { motion, useMotionValueEvent, useScroll, Variants } from "motion/react";
import { Button } from "./ui/button";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { cn } from "@/lib/utils";

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 50) {
    setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  });

  return (
    <motion.header
      className={cn(
        "py-5 px-5 fixed top-0 left-0 right-0 z-20 transition-all duration-300",
        isScrolled && "bg-white shadow-md"
      )}
      variants={variants}
    >
      <div className="grid grid-cols-3 items-center max-w-6xl px-3 m-auto">
        <div>
          <h2 className="font-bold text-2xl bg-gradient-to-r from-cyan-700 to-emerald-600 bg-clip-text text-transparent">
            FastAF
          </h2>
        </div>

        <motion.nav
          className={`hidden md:block justify-items-center place-content-center`}
          variants={variants}
          initial="hidden"
          animate={isScrolled ? "visible" : "hidden"}
        >
          <ul className="flex items-center gap-5  text-[15px]">
            <li className="hover:text-cyan-700 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              Home
            </li>
            <li className="hover:text-cyan-700 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              About
            </li>
            <li className="hover:text-cyan-700 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              Solutions
            </li>
            <li className="hover:text-cyan-700 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              Features
            </li>
            <li className="hover:text-cyan-700 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              Pricing
            </li>
          </ul>
        </motion.nav>

        <div className="hidden md:block justify-items-end">
          <div className="space-x-2">
            <Button className="rounded-sm bg-white text-black border-2 border-cyan-700 hover:bg-cyan-800 hover:text-white transition-all duration-300">
              Sign Up
            </Button>
            <Button className="bg-cyan-700 rounded-sm hover:bg-cyan-800">
              Login
            </Button>
          </div>
        </div>

        <div className="md:hidden place-items-end">
          <FaBars className="cursor-pointer size-4" />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
