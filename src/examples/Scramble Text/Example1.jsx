import React from "react";
import { ScrambleText } from "pratap-ui";

const codeString = `const Example1 = () => {
  const text = "Animate your ideas with Pratap UI";
  return (
    <div className="max-w-[800px] m-auto p-4 h-[200px] flex items-center">
        <ScrambleText className="text-green-600 font-mono uppercase font-bold text-sm md:text-3xl" encyptType="alphanumeric">{text}</ScrambleText>
    </div>
  );
};`;

const Example1 = () => {
  const text = "Animate your ideas with Pratap UI";
  return (
    <div className="max-w-[800px] m-auto p-4 h-[200px] flex items-center">
        <ScrambleText className="text-green-600 font-mono uppercase font-bold text-sm md:text-3xl" encyptType="alphanumeric">{text}</ScrambleText>
    </div>
  );
};

export default Example1;
export { codeString };
