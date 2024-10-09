import React from "react";
import { AnimatedCounter, AnimateOnView } from "pratap-ui";
const codeString = `const Example1 = () => {
  return (
    <div className="max-w-[800px] m-auto ">
      <AnimatedCounter className="text-2xl md:text-5xl font-medium text-[#30C0B7]" style={{fontFamily:'"Roboto Mono", monospace'}} from={0.1} to={1.3} toFixedDecimal={1} suffix="Millon+" />
      <AnimatedCounter className="text-2xl md:text-5xl font-medium text-[#30C0B7]" style={{fontFamily:'"Roboto Mono", monospace'}} from={0} to={897} suffix="K" />
    </div>
  );
};`;

const Example1 = () => {
  return (
    <div className="max-w-[800px] m-auto flex gap-10 ">
      <AnimatedCounter className="text-2xl md:text-5xl font-medium text-[#30C0B7]" style={{fontFamily:`"Roboto Mono", monospace`}} from={0.1} to={2.1} toFixedDecimal={1} suffix="Millon+" />
      <AnimatedCounter className="text-2xl md:text-5xl font-medium text-[#30C0B7]" style={{fontFamily:`"Roboto Mono", monospace`}} from={0} to={897} suffix="K" />
    </div>
  );
};

export default Example1;
export { codeString };
