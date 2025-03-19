import { storageSrc } from "@/assets";
import { Box } from "lucide-react";
import { motion, MotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useRef, useState } from "react";

const variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const TimeLineBlock = ({ progress }: { progress: MotionValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useMotionValueEvent(progress, "change", (latest) => {
    if (!targetRef.current || !targetRef.current.parentElement) return;
  
    const scrollProgress = parseInt(latest); // Convert scrollYProgress to a number
    const elementPosition =
      (targetRef.current.offsetTop / targetRef.current.parentElement.scrollHeight) * 100;
  
    console.log("Scroll Progress:", scrollProgress);
    console.log("Element Position:", elementPosition);
  
    if (scrollProgress >= elementPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });
  

  return (
    <motion.div
      ref={targetRef}
      className="grid grid-cols-[1fr_auto_1fr]"
      variants={variants}
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="space-y-2 place-content-center place-items-center ">
        <div className=" w-fit">
          <h3 className="text-xl font-medium text-cyan-700">
            Storage Mangment
          </h3>
          <p className="text-gray-700 text-sm place-items-center justfiy-center text-cent max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            odio, illum ut qui minus quibusdam rerum error adipisci laborum,
            deserunt, corrupti sequi sint commodi itaque! Quam, exercitationem!
            Porro, odit sapiente.
          </p>
        </div>
      </div>

      <div className="">
        <Box />
      </div>
      <div className="place-items-center justify-center ">
        <img src={storageSrc} className="size-[300px] rounded-md" alt="" />
      </div>
    </motion.div>
  );
};

export default TimeLineBlock;
