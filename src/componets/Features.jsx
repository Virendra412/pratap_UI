import React from "react";
import { motion } from "framer-motion";
import { AnimatedGroup } from "./uiComponents/GroupAnimation";
import AnimateOnView from "./testing/ViewContext";

const Features = () => {
  return (
    <div className="px-[4%] md:px-[10%] py-[8%]">
      <h3 className="text-center font-bold text-3xl md:text-6xl">
        Last but <br />
        not least
      </h3>
      <p className="text-center mt-2">
        Unleash Creativity with Our Comprehensive React UI Library!
      </p>

      <AnimateOnView className='flex justify-center'>
        <AnimatedGroup effect="swing" className="grid gap-5 grid-cols-2 md:grid-cols-3 grid-rows-2 mt-10 max-w-[1050px]">
          <div className="border p-2 bg-white dark:bg-neutral-900 rounded-lg border-neutral-100 dark:border-neutral-800 h-full">
            <div className="flex items-center gap-2">
              <span className="bg-neutral-400/30 shrink-0 w-8 aspect-square dark:bg-purple-600/10 inline-block rounded-full p-2 md:w-10"> <img className="w-full" src="https://img.icons8.com/?size=100&id=18636&format=png&color=e600ff" alt="" /> </span>
              <h3 className="text-sm md:text-lg font-medium ">Customizable Component</h3>
            </div>
            <p className="text-xs md:text-sm mt-2"> Our components are highly customizable, allowing you to adjust styles, behaviors, and configurations easily to fit your specific needs. </p>
          </div>
                  
          <div className="border p-2 bg-white dark:bg-neutral-900 rounded-lg border-neutral-100 dark:border-neutral-800 h-full">
            <div className="flex items-center gap-2">
              <span className="bg-neutral-400/30 shrink-0 w-8 aspect-square dark:bg-purple-600/10 inline-block rounded-full p-2 md:w-10"> <img className="w-full h-full" src="https://img.icons8.com/?size=100&id=626&format=png&color=e600ff" alt="" /> </span>
              <h3 className="text-sm md:text-lg font-medium ">Beautifully Designed</h3>
            </div>
            <p className="text-xs md:text-sm mt-2">Pratap UI components are beautifully designed, merging modern aesthetics with functionality for an enhanced user experience and seamless performance in any application.</p>
          </div>
                  
          <div className="border p-2 bg-white dark:bg-neutral-900 rounded-lg border-neutral-100 dark:border-neutral-800 h-full">
            <div className="flex items-center gap-2">
              <span className="bg-neutral-400/30 shrink-0 w-8 aspect-square dark:bg-purple-600/10 inline-block rounded-full p-2 md:w-10 "> <img className="w-full h-full" src="https://img.icons8.com/?size=100&id=347&format=png&color=e600ff" alt="" /> </span>
              <h3 className="text-sm md:text-lg font-medium ">Animate on View</h3>
            </div>
            <p className="text-xs md:text-sm mt-2">
            Pratap UI components feature "animate on view" functionality, adding smooth animations that engage users as elements appear, creating a dynamic, immersive experience.</p>
          </div>
          <div className="border p-2 bg-white dark:bg-neutral-900 rounded-lg border-neutral-100 dark:border-neutral-800 h-full">
            <div className="flex items-center gap-2">
              <span className="bg-neutral-400/30 shrink-0 w-8 aspect-square dark:bg-purple-600/10 inline-block rounded-full p-2 md:w-10"> <img className="w-full h-full" src="https://img.icons8.com/?size=100&id=u4BTDlUOw95p&format=png&color=e600ff" alt="" /> </span>
              <h3 className="text-sm md:text-lg font-medium ">No runtime styles</h3>
            </div>
            <p className="text-xs md:text-sm mt-2">
            Pratap UI harnesses the power of Tailwind CSS, delivering efficient design with zero runtime styles. Say goodbye to bloat and hello to clean, purposeful styling!</p>
          </div>
          <div className="border p-2 bg-white dark:bg-neutral-900 rounded-lg border-neutral-100 dark:border-neutral-800 h-full">
            <div className="flex items-center gap-2">
              <span className="bg-neutral-400/30 shrink-0 w-8 aspect-square dark:bg-purple-600/10 inline-block rounded-full p-2 md:w-10 "> <img className="w-full h-full" src="https://img.icons8.com/?size=100&id=53376&format=png&color=e600ff" alt="" /> </span>
              <h3 className="text-sm md:text-lg font-medium ">Easy to use</h3>
            </div>
            <p className="text-xs md:text-sm mt-2">We provide easy-to-integrate React components with a simple API and clear documentation, enabling effortless incorporation into any project.</p>
          </div>
        </AnimatedGroup>
      </AnimateOnView>
    </div>
  );
};

export default Features;
