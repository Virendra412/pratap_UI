import React, { useEffect, useState } from 'react'
import { useSpring, motion} from 'framer-motion'
import { getViewContext } from '../testing/ViewContext'






interface Prps {
    from: number
    to:number,
    toFixedDecimal:number
    prefix: string,
    suffix: string
    className: string,
    onClick?: React.MouseEventHandler
    
}


const AnimatedCounter = ({ className, from = 0, to = 100, toFixedDecimal = 0, prefix, suffix ,...props}: Prps) => {
    const isInView= getViewContext()??true
    const [counter, setCounter] = useState(from)
    const counterSpring = useSpring(0, { damping: 100, stiffness: 100})
    
    counterSpring.on('change', val => {
        setCounter(val)
    })
    useEffect(() => {
        if (isInView) {
            counterSpring.set(to) 
        } else {
            counterSpring.set(from) 
        }
        
    },[isInView])

  return (
      <motion.div {...props} className={`text-4xl  p-5 w-fit flex justify-start  ${className?className:""}`} {...props}>{prefix}{counter.toFixed(toFixedDecimal)}{ suffix}</motion.div>
  )
}

export default AnimatedCounter

