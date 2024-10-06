
import React, { useEffect, useRef, useState } from "react";
import useClickAwayListner from "../componets/UtilsComponent/ClickAway";

const animations = [
//   "Animated Number",
//   "Animated Group",
//   "Accordion",
//   "Animated background",
//   "Carousel",
//   "Updated",
//   "Cursor",
//   "Dialog",
//   "Disclosure",
//   "In view",
"Infinite Slider",
  "Text effect",
  
];


const CompnentSlider = ({ changeCategory, activeIndex, setIsOpen, isOpen }) => {
  // const ref = useClickAwayListner(setIsOpen)

 
  // useEffect(() => {
  //   const handleClickAway = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setIsOpen(false)
  //     }
  //   };

  //   // Attach event listener to document
  //   document.addEventListener('mousedown', handleClickAway);

  //   // Cleanup the event listener on unmount
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickAway);
  //   };
  // }, []);


  
  return (
    <div  className={`absolute sm:relative z-40 w-4/5 h-full  sm:w-fit min-w-[250px] transition-all bg-white dark:bg-black  pl-3 ${!isOpen?'-left-full sm:left-0':'left-0'}`}>
      <div className=" sticky top-[60px]">
        <h4 className="mb-3 mt-3 font-semibold">Components</h4>
            <div className="flex flex-col  shrink-0  border-l border-zinc-200 dark:border-zinc-800">
                {animations.map((item, index) =>{
                  return (<span key={index} className={` px-3 py-[5px] text-nowrap transition-all text-sm font-medium border-l-2 border-transparent text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white ${activeIndex == index ? 'border-purple-500' : ''}`} onClick={() => { changeCategory(index); setIsOpen(false)}}>{item}</span>)
                })}
        </div>
      </div>
    </div>
  );
};

export default CompnentSlider;