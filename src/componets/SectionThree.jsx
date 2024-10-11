import React, { useEffect, useRef, useState } from 'react'
import {AnimatedGroup} from 'pratap-ui'
import { motion, useInView} from 'framer-motion'
import Code from './UtilsComponent/Code'
const variant=[ 'fade' , 'slide' , 'scale' , 'blur' , 'blur-slide' , 'zoom' , 'flip' , 'bounce' , 'rotate' ,'swing']

const SectionThree = () => {
    const [activeVariant, setActiveVariant] = useState(0)
    const [play, setPlay] = useState(false)
    const animateRef = useRef(null)
    const isSectionInView= useInView(animateRef,{amount:0.2})
    let codeString = `import {AnimatedGroup} from 'pratap-ui'
<AnimatedGroup key={play} className='grid grid-rows-2 grid-cols-2 sm:grid-cols-4 sm:grid-rows-1 gap-4'
effect='${variant[activeVariant]}'>
 <img src='//image link' className='object-cover w-full aspect-[4/5] rounded'></img>
 <img src='//image link' className='object-cover w-full aspect-[4/5] rounded'></img>
 <img src='//image link' className='object-cover w-full aspect-[4/5] rounded'></img>
 <img src='//image link' className='object-cover w-full aspect-[4/5] rounded'></img>
</AnimatedGroup>`


    useEffect(() => {
       const interval = setInterval(() => {
                    if (isSectionInView) {
                        setActiveVariant(prev => {
                            if (prev >= 9) {
                                return 0
                            }
                            else {
                                return prev+1
                            }
                        })
                        setPlay(prev=>!prev)
               }
            }, 2000)
       
        
        return () => { clearInterval(interval) }
    },[isSectionInView])

 return (
      <div ref={animateRef} className='sectionthree max-w-7xl mx-auto mt-16 relative px-6'>
          
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-[600] z-10 relative'>
        Build&nbsp;
        <motion.div className='text-3xl sm:text-4xl md:text-5xl font-[1000] italic py-1  pr-1  bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent inline-block '
         animate={{y:[-5,0,5],transition:{ repeat: Infinity, repeatType: "reverse", duration:1.2,ease:'linear'}}}  >
          Amazing </motion.div>  <br />
          Components in No Time!
         </h2>
         <p className='sm:text-xl text-zinc-500 max-w-[600px] mt-2'>Create interactive, animated components in just a few lines—powerful features, dynamic functionality, all with minimal code!</p>
          

          <div className='flex justify-between items-center gap-8 flex-col mt-10 lg:flex-row z-10 relative'>
          
              <AnimatedGroup key={play} className='grid grid-rows-2 grid-cols-2 sm:grid-cols-4 sm:grid-rows-1 gap-4 max-w-[650px] w-full' effect={variant[activeVariant]}>
               <img src='https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=256&q=75' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/15238233/pexels-photo-15238233/free-photo-of-woman-in-violet-lamp-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/2189907/pexels-photo-2189907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-full aspect-[4/5] bg-slate-400 rounded'></img>
              </AnimatedGroup>
          
              <Code className='min-h-[300px] max-w-[550px] w-full' codeString={codeString}></Code>
              </div>
      </div>
  )
}

export default SectionThree