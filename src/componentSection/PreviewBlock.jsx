import React, { useState } from 'react'
import Code from '../componets/uiComponents/Code'
import { GalleryThumbnails, RotateCcw, SquareDashedBottomCode } from 'lucide-react'

const PreviewBlock = ({children,codeString='hii'}) => {
  const [retry, setRetry] = useState(Date.now())
  const [isPreviewActive,setIsPreviewActive]=useState(true)
  
    function reRender() {
        setRetry(Date.now())
  }
  
  
  return (
    
    <div >
      <div className='tabs flex gap-2 my-2 '>
        <span className={`py-2 px-4 rounded-lg  border-black ${isPreviewActive?'bg-zinc-300 dark:bg-zinc-800':''}`}  onClick={()=>setIsPreviewActive(true)}><GalleryThumbnails className='inline-block mr-1 w-4' />Preview</span>
        <span className={`py-2 px-4 rounded-lg  border-black ${!isPreviewActive?'bg-zinc-300 dark:bg-zinc-800':''}`} onClick={()=>setIsPreviewActive(false)}><SquareDashedBottomCode className='inline-block mr-1 w-5' />Code</span>
      </div>
      {isPreviewActive &&
        <div className='rounded-md border border-zinc-300 dark:border-zinc-800 relative shrink-0 grow
      bg-[linear-gradient(to_right,#b1b1b112_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b112_1px,transparent_1px)] bg-[size:24px_24px]'>
          <span className='absolute right-2 top-2 w-5 h-fit z-20' onClick={reRender}>
          <RotateCcw  />
          </span>
          <div key={retry} className='min-h-[300px] h-fit flex items-center overflow-hidden py-10' >
            {children}
          </div>
        </div>}
      {!isPreviewActive && <Code className='min-h-[300px] bg-slate-800 dark:bg-slate-900 max-h-[500px]
      bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]
      ' codeString={codeString}></Code>}
    </div>
  )
}

export default PreviewBlock