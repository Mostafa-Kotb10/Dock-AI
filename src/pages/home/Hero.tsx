import { FaAngleRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { BackgroundShapes } from "./design/design";

// from-blue-950 from-40% to-blue-600
// bg-gradient-to-r from-30% from-cyan-700 to-emerald-600

const Hero = () => {
  return (
    <section className="relative">
      <div className="section-container">
        <BackgroundShapes />
        <div className="mt-40 space-y-4 text-center">
          <h1 className="mx-auto max-w-xl text-5xl font-bold text-cyan-700">
            {/* Manage your Pharmacy with FastAF */}
            Pharmacy Mangment Easier Than Before.
          </h1>
          <p className="mx-auto max-w-lg text-lg text-gray-600">
            Using Dock build high performance websites using a sit of tools to
            help to enhance your capabilities
          </p>
        </div>

        <Button className="group relative mx-auto mt-6 flex w-fit cursor-pointer items-center gap-1 rounded-sm bg-cyan-700 px-6 py-1 shadow-xl hover:bg-cyan-800">
          <div className="absolute -inset-0 -z-10 bg-gradient-to-r from-cyan-700 to-emerald-600 blur transition-all duration-150 group-hover:-inset-1" />
          <FaAngleRight className="size-4" />
          <span>Try now for free</span>
        </Button>

        <div className="mt-30 flex flex-col items-center space-y-3">
          <div className="size-5 animate-bounce rounded-full bg-cyan-700" />
          <hr className="w-10 border-1 border-black" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <Button className="rounded-sm bg-white text-black border-2 border-cyan-700 hover:bg-cyan-800 hover:text-white transition-all duration-300">
Sign Up
</Button>
<Button className="group inline-flex items-center  bg-cyan-700 hover:bg-cyan-800 transition-all duration-200  border-cyan-700 hover:border-cyan-800 border-2">
<span>Read the docs </span>
<FaLongArrowAltRight className="group-hover:-rotate-[30deg] transition-all duration-200" />
</Button> */
}
