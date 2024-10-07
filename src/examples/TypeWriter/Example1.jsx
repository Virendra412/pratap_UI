import React from "react";
import {TypeWriter} from "uday-ui";
const codeString = `const Example1 = () => {
  return (
    <div className="max-w-[800px] m-auto p-4">
      <TypeWriter
            className="text-3xl sm:text-5xl md:text-6xl text-transparent bg-gradient-to-b from-[#FF705B] to-[#FFB457] bg-clip-text font-bold"
            cursorClass="sm:w-[3px] md:w-[5px] bg-gradient-to-b from-[#FF705B] to-[#FFB457]"
            duration={1}
          >{["Modern.", "Engaging.", "Amazing."]}
          </TypeWriter>
    </div>
  );
};`;

const Example1 = () => {
  return (
    <div className="max-w-[800px] m-auto">
      <TypeWriter
            className="text-3xl sm:text-5xl md:text-6xl text-transparent bg-gradient-to-b from-[#FF705B] to-[#FFB457] bg-clip-text font-bold"
            cursorClass="sm:w-[3px] md:w-[5px] bg-gradient-to-b from-[#FF705B] to-[#FFB457]"
            duration={1}
          >
            {["Modern.", "Engaging.", "Amazing."]}
          </TypeWriter>
    </div>
  );
};

export default Example1;
export { codeString };
