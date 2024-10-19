import React from "react";
import {AnimatedGroup, TypeWriter} from "pratap-ui";
const codeString = `const Example1 = () => {
  return (
    <div className="max-w-[800px] m-auto">
           <AnimatedGroup className='grid grid-rows-2 grid-cols-2 sm:grid-cols-4 sm:grid-rows-1 gap-4 max-w-[650px] w-full' effect='rotate'>
               <img src='https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=256&q=75' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/15238233/pexels-photo-15238233/free-photo-of-woman-in-violet-lamp-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/2189907/pexels-photo-2189907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
              </AnimatedGroup>
          
    </div>
  );
};`;
const title="Group Animation (effect='rotate')"

const Example1 = () => {
  return (
    <div className="max-w-[800px] m-auto">
           <AnimatedGroup className='grid grid-rows-2 grid-cols-2 sm:grid-cols-4 sm:grid-rows-1 gap-4 max-w-[650px] w-full' effect='rotate'>
               <img src='https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=256&q=75' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/15238233/pexels-photo-15238233/free-photo-of-woman-in-violet-lamp-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/2189907/pexels-photo-2189907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
              </AnimatedGroup>
          
    </div>
  );
};

export default Example1;
export { codeString,title };
