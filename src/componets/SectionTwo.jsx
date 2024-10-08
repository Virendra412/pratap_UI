
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Code from './uiComponents/Code'
import {AnimatedText} from 'uday-ui'

const text="I create stunning and functional designs that captivate users and enhance their online experience. By blending creativity with technical skill, I craft visually appealing and responsive websites tailored to meet each client’s unique needs."
const variants=["wave" , "scaleOut" , "fadeIn"]


const SectionTwo = () => {

    const [activeVariant, setActiveVariant] = useState(0)
    const [play, setPlay] = useState(false)
    const animateRef = useRef(null)
    const isSectionInView= useInView(animateRef,{amount:0.2})
    const dynamicClass=['text-blue-500', 'italic font-normal','uppercase']
    let codeString = `import {AnimatedText} from 'pratap-ui'
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
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-[600] z-10 relative'>
      Your&nbsp;
        <span className='text-3xl sm:text-4xl md:text-5xl font-[900] leading-[1.25] p-1  bg-gradient-to-b from-[#FF626D] to-[#FFBB70] bg-clip-text text-transparent inline-block ' > style </span>  <br />
          Your Component!
         </h2>
         <p className='sm:text-xl text-zinc-500 max-w-[600px] mt-2'>Customize every detail to match your design—seamlessly tweak styles, animations, and functionality.</p>
          
      <div className='flex mt-10  items-center flex-col lg:flex-row relative z-10 justify-evenly'>
        <AnimatedText key={play} variant={variants[activeVariant]}  className={`text-1xl sm:text-xl font-normal md:text-2xl ${dynamicClass[activeVariant]}` } wrapperClass='max-w-[600px] gap-[2px]'>{text}</AnimatedText>
     
        <Code className='min-h-[300px] max-w-[500px] w-full' codeString={codeString}></Code>
      
     </div>
    </div>
  )
}

export default SectionTwo