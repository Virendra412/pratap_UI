import React, { useRef, useState } from "react";
import { TypeWriter } from 'pratap-ui'
import { Link } from "react-router-dom";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import { maskGenerator } from "../../test";
import { Github } from "lucide-react";

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
            cursorClass="sm:w-[3px] md:w-[5px] bg-gradient-to-b from-[#FF705B] to-[#FFB457]"
            duration={1}
          >
            {["Modern.", "Engaging.", "Amazing."]}
          </TypeWriter>
        </h1>
        <h3 className="text-1xl sm:text-xl text-center mt-5 max-w-[800px] m-auto font-normal px-3 text-zinc-500">
          Transform your website's appearance with React components. Customize
          and reuse beautiful designs to create a modern, engaging interface
        </h3>

        <div className="buttons flex justify-center gap-5 md:gap-10 mt-6 items-center">
          <Link className=' py-2 px-2 sm:px-5 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-700 rounded-md  md:py-2 flex items-center ' to='/components'>Browse Components
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ml-1.5 h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg>  
          </Link>
          <button className=" py-2 bg-black text-xs sm:text-sm px-2 sm:px-5 text-white dark:bg-white dark:text-black  rounded-md  md:py-2 flex items-center ">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-4 w-4 sm:h-5 sm:w-5 fill-white dark:fill-zinc-950"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
            Star on Github </button>
          
        
        </div>
      </div>
    </motion.div>

    //  <div ref={divRef} className='w-100% h-[300vh] relative flex '>
    // </div>
  );
};

export default Header;
