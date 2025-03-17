import { motion, useScroll } from "motion/react";
import { useRef } from "react";

import { FaCog } from "react-icons/fa";

const Features = () => {
  const scrollRef = useRef(null);

  // Attach useScroll to the specific container
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <section>
      <div className="section-container pt-0">
        <div className="flex flex-col justify-center items-center text-center gap-3">
          <h2 className="text-3xl text-blue-950 font-bold">
            We built something truly unique
          </h2>
          <p className="text-gray-700 text-lg max-w-lg">
            With Dock's next-gen AI engine and seamless design, building your
            website feels like magic—effortless, intuitive, and ready to scale
            at the speed of your imagination.
          </p>
        </div>

        <div ref={scrollRef} className="relative mt-20 py-5">
          <motion.div
            className="w-0.5 bg-blue-950 absolute left-1/2 -translate-x-1/2 origin-top -z-10 h-10"
            style={{
              height: "100%",
              scaleY: scrollYProgress,
            }}
          />

          <div className="mt-20 space-y-10">
            <motion.div
              className="grid grid-cols-[1fr_auto_1fr]"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: "all",
              }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
            >
              <div className="place-items-center text-center">
                <h2 className="text-3xl text-blue-950 font-bold">
                  We built something truly unique
                </h2>
                <p className="text-gray-700 text-lg max-w-lg">
                  With Dock's next-gen AI engine and seamless design, building
                  your website feels like magic—effortless, intuitive, and ready
                  to scale at the speed of your imagination.
                </p>
              </div>
              <div className="size-7 inline-flex items-center justify-center bg-blue-100 rounded-full">
                <FaCog />
              </div>
              <div className="place-items-center text-center">
                <h2 className="text-3xl text-blue-950 font-bold">
                  We built something truly unique
                </h2>
                <p className="text-gray-700 text-lg max-w-lg">
                  With Dock's next-gen AI engine and seamless design, building
                  your website feels like magic—effortless, intuitive, and ready
                  to scale at the speed of your imagination.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-[1fr_auto_1fr]"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: "all",
              }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
            >
              <div className="place-items-center text-center">
                <h2 className="text-3xl text-blue-950 font-bold">
                  We built something truly unique
                </h2>
                <p className="text-gray-700 text-lg max-w-lg">
                  With Dock's next-gen AI engine and seamless design, building
                  your website feels like magic—effortless, intuitive, and ready
                  to scale at the speed of your imagination.
                </p>
              </div>
              <div className="size-7 inline-flex items-center justify-center bg-blue-100 rounded-full">
                <FaCog />
              </div>
              <div className="place-items-center text-center">
                <h2 className="text-3xl text-blue-950 font-bold">
                  We built something truly unique
                </h2>
                <p className="text-gray-700 text-lg max-w-lg">
                  With Dock's next-gen AI engine and seamless design, building
                  your website feels like magic—effortless, intuitive, and ready
                  to scale at the speed of your imagination.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-[1fr_auto_1fr]"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: "all",
              }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
            >
              <div className="place-items-center text-center">
                <h2 className="text-3xl text-blue-950 font-bold">
                  We built something truly unique
                </h2>
                <p className="text-gray-700 text-lg max-w-lg">
                  With Dock's next-gen AI engine and seamless design, building
                  your website feels like magic—effortless, intuitive, and ready
                  to scale at the speed of your imagination.
                </p>
              </div>
              <div className="size-7 inline-flex items-center justify-center bg-blue-100 rounded-full">
                <FaCog />
              </div>
              <div className="place-items-center text-center">
                <h2 className="text-3xl text-blue-950 font-bold">
                  We built something truly unique
                </h2>
                <p className="text-gray-700 text-lg max-w-lg">
                  With Dock's next-gen AI engine and seamless design, building
                  your website feels like magic—effortless, intuitive, and ready
                  to scale at the speed of your imagination.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
