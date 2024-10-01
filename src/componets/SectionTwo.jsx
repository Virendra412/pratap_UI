
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Code from './uiComponents/Code'
import bluf from '../assets/Conversion_puff.webp'
import AnimatedPara2 from './uiComponents/AnimatedPara2'
const text="I create stunning and functional designs that captivate users and enhance their online experience. By blending creativity with technical skill, I craft visually appealing and responsive websites tailored to meet each client’s unique needs."
const variants=["wave" , "scaleOut" , "fadeIn"]


const SectionTwo = () => {

    const [activeVariant, setActiveVariant] = useState(0)
    const [play, setPlay] = useState(false)
    const animateRef = useRef(null)
    const isSectionInView= useInView(animateRef,{amount:0.2})
    const dynamicClass=['text-blue-500', 'italic font-normal','uppercase']
    let codeString = `
    const text="I create and functional designs that captivate users and enhance their online experience. By blending creativity with technical skill, I craft visually appealing and responsive websites tailored to meet each client’s unique needs, ensuring a seamless and engaging user experience."
    <AnimatedPara2 
    variant='${variants[activeVariant]}' 
    className='text-2xl font-medium ${dynamicClass[activeVariant]}' 
    wrapperClass='max-w-[600px]' content={text}></AnimatedPara2>
  
    `

  useEffect(() => {
    if (isSectionInView) setPlay(prev=>!prev)
      
        const interval = setInterval(() => {
          if (isSectionInView) {
            setActiveVariant(prev => {
              if (prev >= 2) {
                  return 0
              }
              else {
                  return prev+1
              }
          })
          setPlay(prev=>!prev)
           }
        }, 3000)
        
        return () => { clearInterval(interval) }
    },[isSectionInView])

  return (
    <div ref={animateRef} className='animatedPara px-[4%] md:px-[10%] mt-16 relative '>
      
      
      <h2 className='text-3xl sm:text-5xl md:text-6xl font-[600] relative z-10'>
        Apply your own <br />
        <motion.div className='italic font-[700] bg-gradient-to-b from-[#1ce1ff] to-[#4992f8] bg-clip-text text-transparent inline-block overflow-visible'
          >
                  Customization</motion.div>  <br />
      </h2>
      <div className='flex mt-10  items-center flex-col lg:flex-row relative z-10 justify-between '>
        <AnimatedPara2 key={play} variant={variants[activeVariant]} className={`text-1xl sm:text-xl font-normal md:text-2xl ${dynamicClass[activeVariant]}` } wrapperClass='max-w-[600px]' content={text}></AnimatedPara2>
        <Code className='min-h-[300px] max-w-[500px] w-full' codeString={codeString}></Code>
      
     </div>
    </div>
  )
}

export default SectionTwo