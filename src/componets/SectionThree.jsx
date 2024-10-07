import React, { useEffect, useRef, useState } from 'react'
import {AnimatedGroup} from 'uday-ui'
import { motion, useInView} from 'framer-motion'
import Code from './uiComponents/Code'
const variant=[ 'fade' , 'slide' , 'scale' , 'blur' , 'blur-slide' , 'zoom' , 'flip' , 'bounce' , 'rotate' ,'swing']

const SectionThree = () => {
    const [activeVariant, setActiveVariant] = useState(0)
    const [play, setPlay] = useState(false)
    const animateRef = useRef(null)
    const isSectionInView= useInView(animateRef,{amount:0.2})
    let codeString = `import {AnimatedGroup} from 'pratap-ui'
<AnimatedGroup key={play} className='flex gap-5 justify-center'
effect='${variant[activeVariant]}'>

<div className=' w-32 h-40 bg-slate-400 rounded'></div>
<div className=' w-32 h-40 bg-slate-400 rounded'></div>
<div className=' w-32 h-40 bg-slate-400 rounded'></div>
<div className=' w-32 h-40 bg-slate-400 rounded'></div>
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
      <div ref={animateRef} className='sectionthree px-[4%] md:px-[10%] mt-16 relative '>
          
          <h2 className='text-3xl sm:text-5xl md:text-6xl font-[600] z-10 relative'>
        Create&nbsp;
        <motion.div className='leading-[1.25] italic font-[700] bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent inline-block overflow-visible'
         animate={{y:[-5,0,5],transition:{ repeat: Infinity, repeatType: "reverse", duration:1.2,ease:'linear'}}}  >
          amazing</motion.div>  <br />
        components in few lines
      </h2>
          

          <div className='flex justify-evenly items-center gap-2 flex-col mt-10 lg:flex-row z-10 relative'>
          
              <AnimatedGroup key={play} className='flex gap-2 md:gap-5 justify-center' effect={variant[activeVariant]}>
               <img src='https://images.pexels.com/photos/24014245/pexels-photo-24014245/free-photo-of-photo-of-a-small-domestic-dog-lying-on-the-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-32 h-40 bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-32 h-40 bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/24014245/pexels-photo-24014245/free-photo-of-photo-of-a-small-domestic-dog-lying-on-the-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover  w-32 h-40 bg-slate-400 rounded'></img>
               <img src='https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='object-cover w-32 h-40 bg-slate-400 rounded'></img>
              </AnimatedGroup>
          
              <Code className='min-h-[300px] max-w-[500px] w-full' codeString={codeString}></Code>
              </div>
      </div>
  )
}

export default SectionThree