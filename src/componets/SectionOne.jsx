import React from 'react'
import TextReveal from './uiComponents/TextReveal'
import { motion } from 'framer-motion'
import Code from './uiComponents/Code'
import { InfiniteSlider } from './uiComponents/InfiniteSlider'
const para=['I create stunning and functional designs that', 'captivate users and enhance their online experience.', 'By blending creativity with technical skill, I craft', 'visually appealing and responsive websites tailored','to meet each client’s needs, ensuring a seamless', 'and engaging user experience.']

const codeString =
`<InfiniteSlider className='bg-white' gap={30} reverse={true} >
  <img src='/apple_music_logo.svg'  className='h-[80px] w-auto' />
  <img src='/chrome_logo.svg'  className='h-[80px] w-auto' />
  <img src='/strava_logo.svg'  className='h-[80px] w-auto' />
  <img src='/nintendo_logo.svg' al className='h-[80px] w-auto' />
  <img src='/jquery_logo.svg'  className='h-[80px] w-auto' />
  <img src='/prada_logo.svg' className='h-[80px] w-auto' />
</InfiniteSlider>

<InfiniteSlider className='bg-white' gap={30} reverse={true} >
//children same as above
</InfiniteSlider>`




const SectionOne = () => {
  return (
    <div className='px-[4%] md:px-[10%] mt-16'>
      <h2 className='text-3xl sm:text-5xl md:text-6xl font-[600]'>
        Create&nbsp;
        <motion.div className='italic font-[700] bg-gradient-to-b from-[#1cff95] to-[#55f849] bg-clip-text text-transparent inline-block overflow-visible'
         animate={{y:[-10,0,10],transition:{ repeat: Infinity, repeatType: "mirror", duration:1.2,ease:'linear'}}}  >
          AMAZING</motion.div>  <br />
        components in few lines
      </h2>
      <div className='flex mt-10 justify-evenly items-center flex-col lg:flex-row'>
        {/* <TextReveal className='text-2xl font-medium' container_class='z-40 shrink-0' lines={para}></TextReveal> */}

        <div className='basis-1/2 max-w-[600px] w-full flex flex-col gap-2 md:gap-5 lg:gap-10 border' style={{ maskImage:'linear-gradient( to right,transparent,black 10%,black 90%,transparent)'}}>
        <InfiniteSlider className='bg-white' gap={30} reverse={true} >
                <img src='https://motion-primitives.com/apple_music_logo.svg' alt='Apple Music logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/chrome_logo.svg' alt='Chrome logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/strava_logo.svg' alt='Strava logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/nintendo_logo.svg' alt='Nintendo logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/jquery_logo.svg' alt='Jquery logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/prada_logo.svg' alt='Prada logo' className='h-[50px] md:h-[80px] w-auto' />
            </InfiniteSlider>
          <InfiniteSlider className='bg-white' gap={30} reverse={false} >
                <img src='https://motion-primitives.com/apple_music_logo.svg' alt='Apple Music logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/chrome_logo.svg' alt='Chrome logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/strava_logo.svg' alt='Strava logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/nintendo_logo.svg' alt='Nintendo logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/jquery_logo.svg' alt='Jquery logo' className='h-[50px] md:h-[80px] w-auto' />
                <img src='https://motion-primitives.com/prada_logo.svg' alt='Prada logo' className='h-[50px] md:h-[80px] w-auto' />
            </InfiniteSlider>
        </div>
 
        <Code className='min-h-[250px] max-w-[500px] w-full' codeString={codeString}></Code>
      </div>
    </div>
  )
}

export default SectionOne