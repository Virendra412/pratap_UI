import React from "react";
import { InfiniteSlider } from "uday-ui";
const codeString = `const Example1 = () => {
  return (
    <div
      className="m-auto flex gap-10 h-[500px]"
      style={{ mask: "linear-gradient(transparent,black 10%,black 90%,transparent)", }}
    >
      <InfiniteSlider direction="vertical" className="" gap={30} reverse={true} duration={8} >
        {Array.from({ length: 4 }).map(i => {
          return (
            <div className="dark:text-white max-w-[150px] sm:max-w-[200px] md:max-w-[300px] shadow-md border dark:border-zinc-800 p-3 rounded-md bg-zinc-100  dark:bg-neutral-900">
            <h4 className="font-bold mb-1">Best Slider</h4>
            <p className="text-xs sm:text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit repellendus, deleniti ex soluta iste. </p>
          </div>
          )})
        }
      </InfiniteSlider>
      <InfiniteSlider direction="vertical" className="" gap={30} reverse={false} duration={8} >
            //Chirldren same as above
      </InfiniteSlider>
      
    </div>
  );
};`

const Example1 = () => {
  return (
    <div
      className="m-auto flex gap-10 h-[500px]"
      style={{ mask: "linear-gradient(transparent,black 10%,black 90%,transparent)", }}
    >
      <InfiniteSlider direction="vertical" className="" gap={30} reverse={true} duration={8} >
      {Array.from({ length: 4 }).map((i,index) => {
          return (
            <div key={index} className="dark:text-white max-w-[150px] sm:max-w-[200px] md:max-w-[300px] shadow-md border dark:border-zinc-800 p-3 rounded-md bg-zinc-100  dark:bg-neutral-900">
            <h4 className="font-bold mb-1">Best Slider</h4>
            <p className="text-xs sm:text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit repellendus, deleniti ex soluta iste. </p>
          </div>
          )})
        }
      </InfiniteSlider>
      <InfiniteSlider direction="vertical" className="" gap={30} reverse={false} duration={8} >
        {Array.from({ length: 4 }).map((i,index) => {
          return (
            <div key={index} className="dark:text-white max-w-[150px] sm:max-w-[200px] md:max-w-[300px] shadow-md border dark:border-zinc-800 p-3 rounded-md bg-zinc-100  dark:bg-neutral-900">
            <h4 className="font-bold mb-1">Best Slider</h4>
            <p className="text-xs sm:text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit repellendus, deleniti ex soluta iste. </p>
          </div>
          )})
        }
      </InfiniteSlider>
      
    </div>
  );
};

export default Example1;
export {codeString}
