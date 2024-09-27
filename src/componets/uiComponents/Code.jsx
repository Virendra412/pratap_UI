import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as theme,coldarkCold ,materialLight as theme2 } from "react-syntax-highlighter/dist/esm/styles/prism";
import { twMerge } from "tailwind-merge";
import { Check, Copy } from "lucide-react";


const Code = ({className,codeString,fontSize='12px',wrapLines=true,...props}) => {
  const [isCopy, setIsCopy] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(codeString);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 4000);
  }

  return (
    <div className={twMerge( 'bg-slate-900  my-10 rounded-lg w-1/2 overflow-auto px-3 relative',className)} {...props}>
      <div className="codeHeader flex justify-between  py-1 sticky  left-0">
        <div className="flex gap-1  py-2">
          <span className="w-3 h-3 rounded-full bg-pink-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
        </div>
        <button
          onClick={handleCopy}
          className={`text-sm font-ligh  pl-3 flex items-center ${ !isCopy ? "text-white" : "text-green-500" }`}
        >
          {!isCopy ? ( <Copy size='18'/> ) : ( <Check size='18' />)}
          <span>&nbsp;{!isCopy ? "Copy" : "Copied"}</span>
        </button>
      </div>
      <SyntaxHighlighter  wrapLines language="jsx" style={theme} 
        customStyle={{ background: "transparent", fontFamily: "Verdana, Geneva, Tahoma, sans-serif", fontSize:fontSize, fontWeight: "100" }} >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
