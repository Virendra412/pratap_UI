import React, { useEffect, useRef, useState } from 'react'
// import './three.css'
import { motion, useInView, easeInOut } from 'framer-motion'
import { twMerge } from 'tailwind-merge'






export const AnimatedPara = ({children,className,color="white" }) => {
   
  const text = useRef(null)

  const isInView = useInView(text,{once:false})
  
 
  
  const textAnimation = {
    hiden: { backgroundSize: '0% 100%' },
    show: {
      backgroundSize: '100% 100%',
     }
  }

 
  
  
  return (
      
     
          <p className='max-w-[95%]  m-auto'><motion.span className={twMerge(`text-neutral-600/25 inline text-3xl max-md:text-2xl max-sm:text-xl`,className)} ref={text} variants={textAnimation} initial='hidden' animate={isInView ? 'show' : 'hidden'} transition={{ duration: 4, easings:'easeIn' }}
          style={{background: `linear-gradient(${color},${color})`,
            backgroundClip: 'text',
            backgroundSize: '0% 100%',
            backgroundRepeat: 'no-repeat'}}
          >
      {children}
      </motion.span>
        
      </p>
     
  )
}