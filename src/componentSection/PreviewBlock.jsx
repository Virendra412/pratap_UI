import React, { useState } from 'react'
import Code from '../componets/uiComponents/Code'

const PreviewBlock = ({children,codeString='hii'}) => {
  const [retry, setRetry] = useState(Date.now())
  const [isPreviewActive,setIsPreviewActive]=useState(true)
  
    function reRender() {
        setRetry(Date.now())
  }
  
  
  return (
    
    <div >
      <div className='tabs flex gap-4  border-b border-zinc-200 dark:border-zinc-800 mb-2'>
        <span className={`p-2 dark:border-white border-black ${isPreviewActive?'border-b-2':''}`}  onClick={()=>setIsPreviewActive(true)}>Preview</span>
        <span className={`p-2 dark:border-white border-black ${!isPreviewActive?'border-b-2':''}`} onClick={()=>setIsPreviewActive(false)}>Code</span>
      </div>
      {isPreviewActive &&
        <div className='rounded-md border border-zinc-200 dark:border-zinc-800 relative shrink-0 grow
      bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'>
          <span className='absolute right-2 top-2 w-5 h-fit z-20' onClick={reRender}>
            <img src="https://img.icons8.com/?size=100&id=11676&format=png&color=e600ff" alt="" />
          </span>
          <div key={retry} className='min-h-[300px] h-fit flex items-center overflow-hidden py-10' >
            {children}
          </div>
        </div>}
      {!isPreviewActive && <Code className='min-h-[300px] bg-slate-800 dark:bg-slate-900
      bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]
      ' codeString={codeString}></Code>}
    </div>
  )
}

export default PreviewBlock