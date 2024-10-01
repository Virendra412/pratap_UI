import { useInView } from 'framer-motion'
import React, { createContext, useContext, useRef, useState } from 'react'
const MyContext = createContext(null)



const AnimateOnView = ({ children,animateOnce=true,...props }) => {
  const viewRef = useRef(null)
  const isInView= useInView(viewRef,{amount:0.2,once:animateOnce})
    
  return (
    <MyContext.Provider value={isInView}>
      <div ref={viewRef} {...props}>
        {children}
      </div>
    </MyContext.Provider>
  )
}

const getViewContext = () => {
    return useContext(MyContext)
}

export default AnimateOnView
export { getViewContext }