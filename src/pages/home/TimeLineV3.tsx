// TimeLineV3.jsx
import SectionHeading from "@/components/SectionHeading";
import TimeLineBlock from "./TimeLineBlock";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const TimeLineV3 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <section>
      <div className="section-container">
        <SectionHeading
          title="Why Choose Us"
          text="FastAF app features alot of tools to help you mange your pharmacy from employees to storage"
        />

        <div ref={targetRef} className="relative mt-30 space-y-30">
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 bg-cyan-700 w-1"
          />

          <TimeLineBlock   />
          <TimeLineBlock  />
          <TimeLineBlock   />
          <TimeLineBlock   />
        </div>
      </div>
    </section>
  );
};

export default TimeLineV3;