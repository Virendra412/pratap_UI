import React, { useEffect, useRef } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge';

type cusorFocusProps = {
  children: React.ReactNode;
  className?: ClassNameValue;
};


export const CursorFocus = ({children,className,...props}:cusorFocusProps) => {
  const layerRef = useRef<HTMLDivElement | null>(null)
  
  function updatePosition(e:MouseEvent) {
          this.style.setProperty('--x',e.offsetX+'px')
          this.style.setProperty('--y',e.offsetY+'px')
  }
  
    
    useEffect(()=>{
      if (layerRef.current) {
        layerRef.current.addEventListener('mousemove',updatePosition)
      }
      
      return ()=>{layerRef.current.removeEventListener('mousemove',updatePosition)}

    },[])
  return (
      <div ref={layerRef} className={twMerge('relative',className)} {...props} style={{'--x':'-200px','--y':'0px'}} >
          {children}
          <div className='layer absolute top-0 left-0 w-full h-full z-40' style={{background:'radial-gradient(circle at var(--x) var(--y),transparent 10%, rgba(0,0,0,0.9) 20%)'}}></div>
    </div>
  )
}
