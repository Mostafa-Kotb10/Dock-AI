import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import TimeLineBlock from "./TimeLineBlock";

const TimeLineCl = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const progress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["0%", "20%", "50%", "100%"]
  );

  return (
    <section className="relative min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bottom-0 w-1 bg-gray-200">
        <motion.div
          className="top-0 absolute bg-black z-10 left-1/2 -translate-x-1/2 w-1"
          style={{ height: progress }}
          transition={{ type: "spring", stiffness: 60, damping: 30 }}
        />
      </div>

      <div ref={targetRef} className="space-y-32 pt-40">
        <TimeLineBlock progress={progress} />
        <TimeLineBlock progress={progress} />
        <TimeLineBlock progress={progress} />
        <TimeLineBlock progress={progress}  />
      </div>
    </section>
  );
};

export default TimeLineCl;