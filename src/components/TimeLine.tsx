import  { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";

const Timeline = () => {
  const timelineRef = useRef(null);
  
  // Get scroll progress relative to the timeline section
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start end", "end start"] });


  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(progress, "change", (latest) => {
    console.log(latest)
  });

  const timelineItems = [
    { id: 1, position: 20, title: "Planning", description: "Initial project planning phase" },
    { id: 2, position: 40, title: "Design", description: "UI/UX design and prototyping" },
    { id: 3, position: 60, title: "Development", description: "Implementation and coding" },
    { id: 4, position: 80, title: "Testing", description: "QA and bug fixes" },
    { id: 5, position: 100, title: "Launch", description: "Product release and deployment" }
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-12 text-gray-800">Project Timeline</h2>

      <div ref={timelineRef} className="relative w-full h-[150vh]">
        {/* Main timeline track */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

        {/* Animated progress line using Motion Value */}
        <motion.div
          className="absolute left-1/2 top-0 w-1 bg-blue-500 transform -translate-x-1/2 origin-top"
          style={{ height: progress }}
        />

        {/* Timeline items */}
        {timelineItems.map((item) => {
          return (
            <div key={item.id} className="absolute w-full" style={{ top: `${item.position}%` }}>
              <div className="flex items-center">
                {/* Left content for even items */}
                {item.id % 2 === 0 && (
                  <motion.div
                    className="w-5/12 pr-8 text-right"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                )}

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center border-gray-300 bg-gray-100"
                    whileInView={{ borderColor: "rgb(59 130 246)", backgroundColor: "white" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-blue-500 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2 }}
                    />
                  </motion.div>
                </div>

                {/* Right content for odd items */}
                {item.id % 2 !== 0 && (
                  <motion.div
                    className="w-5/12 ml-auto pl-8"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
