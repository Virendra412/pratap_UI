import React, { useEffect, useState ,ComponentProps, ComponentPropsWithoutRef, useRef} from 'react'
import { useSpring, motion, useMotionValue, useInView, MotionProps, ForwardRefComponent, HTMLMotionProps } from 'framer-motion'






interface Prps {
    from: number
    to:number,
    toFixedDecimal:number
    prefix: string,
    suffix: string
    className: string,
    onClick?: React.MouseEventHandler
    inview?: 1 | 0
}


const AnimatedCounter = ({ className, from = 0, to = 100, toFixedDecimal = 0, prefix, suffix, inview=1 ,...props}: Prps) => {
    const viewRef = useRef(null)
    const isInView= useInView(viewRef)
    const [counter, setCounter] = useState(from)
    const counterSpring = useSpring(0, { bounce: 0, duration: 2000})
    
    
    counterSpring.on('change', val => {
        setCounter(val)
    })
    useEffect(() => {
        if (inview) {
            counterSpring.set(to) 
        } else {
            counterSpring.set(from) 
        }
        
    },[inview])

  return (
      <motion.div ref={viewRef} {...props} className={`text-4xl  p-5 w-fit flex justify-start  ${className?className:""}`} {...props}>{prefix}{counter.toFixed(toFixedDecimal)}{ suffix}</motion.div>
  )
}

export default AnimatedCounter

