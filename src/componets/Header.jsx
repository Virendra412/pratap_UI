import React, { useRef, useState } from "react";
import TypeWriter from "./uiComponents/TypeWriter";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import { maskGenerator } from "../../test";

const Header = () => {


  return (
    <motion.div
      className="w-screen min-h-[80vh] flex items-center  justify-center  shrink-0 grow-0"
      style={{ maskImage: "var(--mask)" }}
    >
      <div >
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-center mb-1 font-bold">
          Make your website <br />
          look&nbsp;
          <TypeWriter
            className="text-3xl sm:text-5xl md:text-6xl text-transparent bg-gradient-to-b from-[#FF705B] to-[#FFB457] bg-clip-text font-bold"
            cusorClass="sm:w-[3px] md:w-[5px] bg-gradient-to-b from-[#FF705B] to-[#FFB457]"
            duration={1}
          >
            {["Modern.", "Engaging.", "Amazing."]}
          </TypeWriter>
        </h1>
        <h3 className="text-1xl sm:text-xl text-center mt-5 max-w-[800px] m-auto font-normal px-3">
          Transform your website's appearance with React components. Customize
          and reuse beautiful designs to create a modern, engaging interface
        </h3>

        <div className="buttons flex justify-center gap-5 md:gap-10 mt-6 items-center">
          <button className="py-2 px-5 text-xs sm:text-base bg-gray-500/45 rounded-md font-medium md:py-1"> Browse Components </button>
          <button className="py-2 bg-black text-xs sm:text-base  px-5 text-white dark:bg-white dark:text-black  rounded-md font-medium md:py-1"> Star on Github </button>
        </div>
      </div>
    </motion.div>

    //  <div ref={divRef} className='w-100% h-[300vh] relative flex '>
    // </div>
  );
};

export default Header;
