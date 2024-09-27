import React, { FC, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { twMerge,ClassNameValue } from 'tailwind-merge'
import useBounds from '../UtilsComponent/UseBounds'



    interface ComponentProps {
        lines: string[],
        className:string
        
        container_class:ClassNameValue
        
        
    }



/**
 * A Function which accepts several props in order to animate below example given:
 * 
 * @param text_class Optional!! to give style to the text
 * @param lines Required** It is the array if lines You want to animate
 * @param container_class Optional!! To give style to the outer container of the text defaults-(flex,justify-center)
 * 
 * 
 * @example
 
 *<TextReveal text_class='text-green-500' container_class='bg-green-100 py-10' lines={["Nature is an inherent character or constitution, particularly of" , "the ecosphere or the universe as a whole.", "In this general sense nature refers to the laws, elements and", "phenomena of the physical world, including life. Although", "humans are part of nature, human activity or humans", "as a whole are often described as at times at odds, or","outright separate and even superior to nature."]} />
 

 */
const TextReveal:FC<ComponentProps> = ({ lines,className,container_class,...props }) => {
    const elem = useRef(null)
    
    const isInView = useInView(elem, {
        amount:0.3
    })
    
    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.09 } }
    }
    const childVariants = {
        hidden: { translateY: '100%' },
        show: {
            translateY: '0', transition: {
            duration:1,ease:[0,0.55,0.45,1]
        } }
        
    }



  return (
      <motion.div className={twMerge(' flex  items-center justify-around ',container_class)} >
         <motion.div ref={elem}  variants={containerVariants} initial='hidden' animate={isInView?'show':'hidden'}>
          {lines?.map((line) => {
              return (
                  <div className='w-fit overflow-hidden h-fit '>
                      <motion.p variants={childVariants} className={twMerge('text-3xl leading-[1.1] pb-[4px] ', className)} {...props}>{ line}</motion.p>
                  </div>
              )
          })}
          </motion.div>
          
    </motion.div>
  )
}

export default TextReveal