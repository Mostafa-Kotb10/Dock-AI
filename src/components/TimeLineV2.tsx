import { timelineItems } from "@/constants/constants";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const TimeLineV2 = () => {
  const targetRef = useRef(null);
  const [currentProgress, setCurrentProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to a pixel value for the line height
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1600]);

  useMotionValueEvent(progress, "change", (latest) => {
    setCurrentProgress(latest);
  });

  console.log("Rendering...");

  useEffect(() => {
    if (!targetRef.current) return;
  }, []);

  return (
    <section className="min-h-screen">
      <div className="section-container relative">
        <h3 className="text-center">Project Timeline</h3>

        <div ref={targetRef} className="relative flex flex-col min-h-screen">
          {/* Progress Line */}
          <motion.div
            className="w-1 bg-cyan-700 absolute left-1/2 -translate-x-1/2 origin-top"
            style={{
              height: progress,
              background: "linear-gradient(to bottom, #3EAAC1, #3EC186)",
            }}
          />

          {/* Multiple Timeline Items */}
          <AnimatePresence>
            {timelineItems.map((item, index) => {

              return (
                <motion.div
                  key={index}
                  className="absolute w-full grid grid-cols-[1fr_auto_1fr]"
                  style={{
                    top: item.position,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: currentProgress >= item.position ? 1 : 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <div className="flex flex-col justify-center items-center p-4 rounded-lg  mr-4">
                    <div>
                      <h3 className="font-bold mb-2 text-2xl text-cyan-700">
                        {item.title}
                      </h3>
                      <p className="text-gray-800">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptate eius possimus doloribus tempora amet
                        dolorem, similique veritatis architecto eaque labore.
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-300 z-10">
                    {item.icon}
                  </div>

                  <div className="rounded-lg ml-25">
                    <img src={item.src} width={250} height={250} className="" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TimeLineV2;
