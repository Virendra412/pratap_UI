import { useInView } from 'framer-motion'
import { div } from 'framer-motion/client'
import React, { useRef } from 'react'

interface animateOnView{
  children: React.ReactElement
  animationPlayOnce?:boolean
}


const AnimateOnView = ({children,animationPlayOnce=true}:animateOnView) => {
  const viewRef = useRef(null)
  const inview=useInView(viewRef,{once:animationPlayOnce,amount:0.2})
  const element = React.cloneElement(children, { inview:inview? 1:0})
 
  
  return <div ref={viewRef} className='w-fit' >{ element}</div>
}

export default AnimateOnView