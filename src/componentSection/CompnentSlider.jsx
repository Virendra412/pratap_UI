
import React from "react";
// import useClickAwayListner from "../componets/UtilsComponent/ClickAway";
import componentData from '../assets/componentData.js'


const CompnentSlider = ({ changeCategory, activeIndex, setIsOpen, isOpen }) => {
return (
    <div className={`absolute sm:relative z-40 w-4/5 h-full  sm:w-fit min-w-[250px] transition-all bg-white dark:bg-black  pl-3 ${!isOpen?'-left-full sm:left-0':'left-0'}`}>
     <div className=" sticky top-[60px]">
        <h4 className="mb-3 mt-3 font-semibold">Components</h4>
            <div className="flex flex-col  shrink-0 border-l border-zinc-200 dark:border-zinc-800">
                {componentData.map((item, index) =>{
                  return (<span key={index} className={` px-3 py-[5px] text-nowrap transition-all text-sm font-medium border-l-2 border-transparent text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white ${activeIndex == index ? 'border-zinc-400 ' : ''}`} onClick={() => { changeCategory(index); setIsOpen(false)}}>{item.title}</span>)
                })}
        </div>
      </div>
    </div>
  );
};

export default CompnentSlider;
