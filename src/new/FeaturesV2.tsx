import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import f1 from "../../assets/imge/f1.jpg";
import f2 from "../../assets/imge/f2.jpg";
import f3 from "../../assets/imge/f3.jpg";
import f4 from "../../assets/imge/f4.jpg";

const FeaturesV2 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1 ", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0.3, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
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
      </div>

      <div className="place-items-center text-center mx-60 mt-20 space-y-10 ">
        <div className="flex gap-20 place-items-center rounded-md bg-gray-100 p-3.5">
          <div className="space-y-5">
            <h2 className="text-3xl text-blue-950 font-bold">
              We built something truly unique
            </h2>
            <p>
              The patient is experiencing severe symptoms, including fever,
              cough, and shortness of breath. The condition was diagnosed after
              conducting laboratory tests and imaging scans. X-ray results
              showed clear signs of pneumonia.
            </p>
          </div>
          <img className="rounded-md w-[500px]"  src={f4} alt="" />
        </div>
        <div className="flex gap-20 place-items-center rounded-md bg-gray-100 p-3.5">
          <div className="space-y-5">
            <h2 className="text-3xl text-blue-950 font-bold">
              We built something truly unique
            </h2>
            <p>
              The patient is experiencing severe symptoms, including fever,
              cough, and shortness of breath. The condition was diagnosed after
              conducting laboratory tests and imaging scans. X-ray results
              showed clear signs of pneumonia.
            </p>
          </div>
          <img className="w-[500px]  h-[350px]  rounded-md" src={f2} alt="" />
        </div>
        <div className="flex gap-20 place-items-center rounded-md bg-gray-100 p-3.5">
          <div className="space-y-5">
            <h2 className="text-3xl text-blue-950 font-bold">
              We built something truly unique
            </h2>
            <p>
              The patient is experiencing severe symptoms, including fever,
              cough, and shortness of breath. The condition was diagnosed after
              conducting laboratory tests and imaging scans. X-ray results
              showed clear signs of pneumonia.
            </p>
          </div>
          <img className="w-[500px]  h-[350px]  rounded-md" src={f3} alt="" />
        </div>
        <div className="flex gap-20 place-items-center rounded-md bg-gray-100 p-3.5">
          <div className="space-y-5">
            <h2 className="text-3xl text-blue-950 font-bold">
              We built something truly unique
            </h2>
            <p>
              The patient is experiencing severe symptoms, including fever,
              cough, and shortness of breath. The condition was diagnosed after
              conducting laboratory tests and imaging scans. X-ray results
              showed clear signs of pneumonia.
            </p>
          </div>
          <img className="w-[500px] h-[350px] rounded-md" src={f1} alt="" />
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesV2;
