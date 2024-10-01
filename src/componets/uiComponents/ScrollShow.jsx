import React, { useEffect, useRef, useState } from 'react'
import {fullMaskRight,fullMaskBottom} from '../../../test'
import { cubicBezier, useScroll,useTransform ,motion} from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Code from './Code';



let codeString=`<TopLayer className='bg-[#E7EEF2] text-[#454647]'>
    <div className='w-full h-full relative flex items-center'>
        <div className="textContent w-[480px] translate-x-28 z-10">
            <h2 className='text-7xl font-bold mb-5'>Discover the  Wonder</h2>
            <p className='text-4xl'> Healing waters. A subterranean spa. Gourmet cuisine. Luxurious suites. Otherworldly vistas. A universe of radiant wellbeing. </p>
        </div>    
        <img className='absolute w-4/5 right-0' src="https://images.ctfassets.net/w65k7w0nsb8q/4Wbe9vCvdfZkup84ZqGW5e/d948938f3d3ff222aae16b1562185697/BL_SPA_BRAND23_AM_Hero2.jpg?w=3840&q=75&fm=webp" alt="" />
    </div>
</TopLayer>
<MiddleLayer className='bg-black text-white'>
              
</MiddleLayer>
<BottomLayer></BottomLayer>`

const ScrollShow = () => {
   
    const [viewWidth,setViewWidth]= useState(1000)
    const divRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: divRef,
      offset: ["start end", "end end"],
    });
    console.log("renredering");


    useEffect(()=>{
        if (divRef.current) {
          setViewWidth(divRef.current.getBoundingClientRect().width);
      }
    },[])

    const rotX=useTransform(scrollYProgress,[0,0.3],[95,0])
    const rotY=useTransform(scrollYProgress,[0,0.3],[90,0])
    const sca= useTransform(scrollYProgress,[0,0.3],[0.1,1])
  
    const progress1 = useTransform(scrollYProgress, [0.33, 0.66], [0, 45])
    const scale2 = useTransform(scrollYProgress, [0.33, 0.6], [1.7, 1],{ease: cubicBezier(0.17, 0.67, 0.83, 0.67)});
    scale2.on("change", (lat) => {
        if (divRef.current) { divRef.current.style.setProperty("--scale2", lat); }
    });

    
    
    progress1.on("change", (lat) => {
        if (divRef.current) {
            
            divRef.current.querySelector('.topLayer').style.setProperty("--mask1", viewWidth > 500 ?fullMaskRight[Math.round(lat)] : fullMaskBottom[Math.round(lat)] )
            // divRef.current.querySelector('.topLayer').style.setProperty("--mask1",fullMaskBottom[lat])
            // .style.setProperty("--mask1", maskGenerator(lat, viewWidth > 500 ? 'right' : 'bottom'))
        }
    });
    
    const progress2 = useTransform(scrollYProgress, [0.69, 1], [0, 45]);
    const scale3 = useTransform(scrollYProgress, [0.69, 0.95], [1.7, 1],{ease: cubicBezier(0.17, 0.67, 0.83, 0.67)});
    scale3.on("change", (lat) => {
        if (divRef.current) {
            divRef.current.style.setProperty("--scale3", lat);
        }
    });
    
    progress2.on("change", (lat) => {
        if (divRef.current) { 
            divRef.current.querySelector('.middleLayer').style.setProperty("--mask2", viewWidth > 500 ? fullMaskRight[Math.round(lat)] : fullMaskBottom[Math.round(lat)])}
    });

    

  return (
      <div ref={divRef} className='scrollShow relative w-full h-[500vh]'>
          <motion.div className='sticky top-0 left-0 w-full h-[100vh] overflow-hidden' style={{rotateX:rotX,rotateY:rotY,scale:sca}}>
              <TopLayer className='bg-[#E7EEF2]'>
                  <div className='w-full h-full relative flex items-end '>
                      <div className="textContent w-fit ml-[2%] mb-[2%] max-w-[90%] sm:max-w-[400px] z-10 bg-neutral-100/50 p-3 rounded-lg backdrop-blur-lg">
                          <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-5 text-transparent bg-gradient-to-bl from-purple-600 to-cyan-500 bg-clip-text'>Taj Mahal</h2>
                          <p className='text-1xl md:text-xl text-transparent bg-gradient-to-bl from-purple-600 to-cyan-800 bg-clip-text font-medium'>
                          The Taj Mahal is a dazzling white marble masterpiece in Agra, India, celebrated for its intricate artistry, lush gardens, and romantic allure—a timeless tribute to love and beauty.
                          </p>
                      </div>    
                <img className='absolute w-full h-full object-cover object-center right-0' src="https://images.pexels.com/photos/28257148/pexels-photo-28257148/free-photo-of-double-taj.jpeg" alt="" />
                  </div>

              </TopLayer>
              <MiddleLayer className='bg-black text-white'>
              <div className='w-full h-full relative flex items-end '>
                    <div className="textContent w-fit ml-[2%] mb-[2%] max-w-[90%] sm:max-w-[400px] z-10 bg-neutral-950/50 p-3 rounded-lg backdrop-blur-lg ">
                          <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-5 text-transparent bg-gradient-to-bl from-orange-600 to-red-500 bg-clip-text'>Hawa Mahal</h2>
                          <p className='text-1xl md:text-xl text-transparent bg-gradient-to-bl from-orange-600 to-red-500 bg-clip-text font-medium'>
                          The enchanting "Palace of Winds" in Jaipur, dazzles with its stunning pink facade and intricate latticework. This architectural gem offers a glimpse into royal life and vibrant culture.
                          </p>
                      </div>    
                <img className='absolute w-full h-full object-cover object-center right-0' src="https://images.pexels.com/photos/14940427/pexels-photo-14940427.jpeg" alt="" />
                  </div>
                  
                  
                 {/* https://images.pexels.com/photos/17762635/pexels-photo-17762635/free-photo-of-jal-mahal-palace.jpeg*/}
                
              </MiddleLayer>
              <BottomLayer className='bg-green-200 flex justify-center'>
              <div className='w-full h-full relative flex items-end'>
                    <div className="textContent w-fit ml-[2%] mb-[2%] max-w-[90%] sm:max-w-[400px] z-10 bg-neutral-900/50 p-3 rounded-lg backdrop-blur-lg ">
                          <h2 className='text-2xl sm:text-3xl  md:text-5xl font-bold mb-2 md:mb-5 text-transparent bg-gradient-to-b from-yellow-400 to-orange-700 bg-clip-text'>Jal Mahal</h2>
                          <p className='text-1xl md:text-xl text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600 bg-clip-text font-medium'>
                          Jal Mahal, the mesmerizing "Water Palace" in Jaipur, enchants with its stunning blend of Rajput and Mughal design, gracefully floating on Man Sagar Lake—an idyllic gem of serenity and beauty!
                          </p>
                      </div>    
                <img className='absolute w-full h-full object-cover object-center right-0' src="https://images.pexels.com/photos/13427001/pexels-photo-13427001.jpeg" alt="" />
                  </div>
              </BottomLayer>
          </motion.div>
    </div>
  )
}

export default ScrollShow


export function TopLayer({ children, className, style,...props}) {
    return (
        <div className={twMerge(`topLayer top-0 left-0 z-20 w-full h-[100vh] absolute bg-slate-800`,className)} {...props} style={{maskImage:'var(--mask1)',scale:'var(--scale1)',pointerEvents:'none',...style}} >
            {children}
        </div>
    )
}

export function MiddleLayer({ children, className,style,...props }) {
    
    return (
        <div className={twMerge(`middleLayer top-0 z-10 left-0 w-full h-[100vh] absolute `,className)} {...props} style={{maskImage:'var(--mask2)',scale:'var(--scale2)',pointerEvents:'none',...style}}>
            {children}
        </div>
    )
}

export function BottomLayer({ children, className,...props }) {
    
    return (
        <div className={twMerge(`top-0 left-0 w-full h-[100vh] absolute bg-orange-500 `,className)} {...props} style={{scale:'var(--scale3)'}} >
            {children}
        </div>
    )
}