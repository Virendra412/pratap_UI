import React from "react";
import { ScrambleText } from "pratap-ui";

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
  const text = `Pratap UI is a comprehensive React UI library designed to empower developers with a collection of clean, responsive, and accessible components for building modern web applications.`;
  return (
    <div className="max-w-[800px] m-auto p-4 h-[200px] flex items-center">
        <ScrambleText className="text-green-600 font-mono" encyptType="alphanumeric">{text}</ScrambleText>
    </div>
  );
};

export default Example1;
export { codeString };
