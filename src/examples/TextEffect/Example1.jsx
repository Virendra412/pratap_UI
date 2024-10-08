import React from "react";
import { AnimatedText, AnimateOnView } from "uday-ui";

const codeString = `const Example1 = () => {
  const text = "Pratap UI is a comprehensive React UI library designed to empower developers with a collection of clean, responsive, and accessible components for building modern web applications. From buttons and input fields to complex modal dialogs and data tables, the library provides a wide range of UI elements that are easy to integrate and customize.";
  return (
    <div className="max-w-[800px] m-auto p-4">
      <AnimateOnView animateOnce={false}>
        <AnimatedText wrapperClass="gap-1" variant="scaleOut" className='text-sm sm:text-base'>
          {text}
        </AnimatedText>
      </AnimateOnView>
    </div>
  );
};`;

const Example1 = () => {
  const text = `Pratap UI is a comprehensive React UI library designed to empower developers with a collection of clean, responsive, and accessible components for building modern web applications. From buttons and input fields to complex modal dialogs and data tables, the library provides a wide range of UI elements that are easy to integrate and customize.`;
  return (
    <div className="max-w-[800px] m-auto p-4">
      <AnimateOnView animateOnce={false}>
        <AnimatedText wrapperClass="gap-x-[2px] h-auto" variant="scaleOut"  className=' text-sm sm:text-lg '>
          {text}
        </AnimatedText>
      </AnimateOnView>
    </div>
  );
};

export default Example1;
export { codeString };
