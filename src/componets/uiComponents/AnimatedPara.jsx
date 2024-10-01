import React, { useEffect, useRef, useState } from "react";
// import './three.css'
import { motion} from "framer-motion";
import { twMerge } from "tailwind-merge";
import { getViewContext } from "../testing/ViewContext";

export const AnimatedPara = ({ children, className,duration=3 }) => {
  const isInView = getViewContext() ?? true;
  const textAnimation = {
    hiden: { backgroundSize: "0% 100%" },
    show: {
      backgroundSize: "100% 100%",
    },
  };

  return (
    <p>
      <motion.span
        className={twMerge( `text-neutral-600/25 bg-gradient-to-r from-black to-black dark:from-white dark:to-white inline text-3xl max-md:text-2xl max-sm:text-xl`, className )}
        variants={textAnimation}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        transition={{ duration: duration, easings: "easeIn" }}
        style={{
          backgroundClip: "text",
          backgroundSize: "0% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </motion.span>
    </p>
  );
};
