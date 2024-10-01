import React, { useRef } from 'react'
const str = 'Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. '
import { motion, useInView, easeInOut } from 'framer-motion'
import { twMerge,ClassNameValue } from 'tailwind-merge'
import { getViewContext } from '../testing/ViewContext'




interface Para{
  variant?: "wave" | "scaleOut" | "fadeIn",
  className:ClassNameValue
  wrapperClass: ClassNameValue,
  content:string
}

const AnimatedPara2 = ({variant="wave",className,wrapperClass,content="hii"}:Para) => {

  const newStr = content.split(' ')
  const isInView= getViewContext()??true

    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.02} }
    }
 
    const ChildVarints = {
        wave: {
          hidden: { translateY: "100%" },
          show: {
            translateY: ['100%',"-20%",'0'],
            transition: {duration: 0.8, ease: "easeOut",},
          },
        },
        fadeIn: {
          hidden: { opacity:0},
          show: {
            opacity:1,
            transition: { duration: 0.3, ease: "easeOut" },
          },
        },
        scaleOut: {
          hidden: { scale:1.5,opacity:0},
          show: {
            scale:1,opacity:1,
            transition: { duration: 0.3, ease: "easeOut" },
          },
      },
        
     
        
  };
  

    
  return (
    <motion.div  variants={containerVariants} initial='hidden' animate={isInView ? 'show' : 'hidden'}
    className={twMerge('flex flex-wrap h-fit',wrapperClass)} >
          {newStr?.map((block,index) => {
              return (
                  <p key={index} className='overflow-hidden h-fit' >{block.split('')?.map((char,ind) => {
                    return (<motion.span key={ind+char} variants={ChildVarints[variant]} className={twMerge(`inline-block text-2xl leading-[1.2] font-light relative`,className)}>{char}
                   </motion.span>)
                  }) }&nbsp;</p>
              )
          })}
    </motion.div>
  )
}

export default AnimatedPara2