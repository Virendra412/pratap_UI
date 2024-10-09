import React from "react";
import { AnimatedText } from "pratap-ui";
const codeString = `
const Example2 = () => {
  return (
    <AnimatedText variant="wave" wrapperClass="m-auto">
      {"hi this is uday pratap singh chauhan how are you"}
    </AnimatedText>
  );
};`

const Example2 = () => {
  const text = `Pratap UI is a comprehensive React UI library designed to empower developers with a collection of clean, responsive, and accessible components for building modern web applications. From buttons and input fields to complex modal dialogs and data tables, the library provides a wide range of UI elements that are easy to integrate and customize.`;
  return (
    <div className="max-w-[800px] m-auto p-4">
     
        <AnimatedText wrapperClass="gap-x-[2px]" variant="wave" className='text-sm sm:text-lg'>
          {text}
        </AnimatedText>
    
    </div>
  );
};

export default Example2;
export{codeString}
