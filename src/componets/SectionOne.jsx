import React from 'react'
import { motion } from 'framer-motion'
import Code from './uiComponents/Code'
import { InfiniteSlider } from 'uday-ui'
const para=['I create stunning and functional designs that', 'captivate users and enhance their online experience.', 'By blending creativity with technical skill, I craft', 'visually appealing and responsive websites tailored','to meet each client’s needs, ensuring a seamless', 'and engaging user experience.']

const codeString =`import { InfiniteSlider } from 'pratap-ui'
<InfiniteSlider className='bg-white ' gap={50} reverse={true} >
  <img src='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' alt='React' className='h-[40px] md:h-[50px] w-auto my-3' />
  <img src='https://img.icons8.com/?size=100&id=egQrEphjrirz&format=png&color=000000' alt='Redux' className='h-[40px] md:h-[50px] w-auto my-3' />
  <img src='https://img.icons8.com/?size=100&id=108784&format=png&color=000000' alt='Javascript' className='h-[40px] md:h-[50px] w-auto my-3' />
  <img src='https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' alt='Nodejs' className='h-[40px] md:h-[50px] w-auto my-3' />
  <img src='https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' alt='ExpressJs' className='h-[40px] md:h-[50px] w-auto my-3' />
  <img src='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000' alt='mongodb' className='h-[40px] md:h-[50px] w-auto my-3' />
  <img src='https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000' alt='typescript' className='h-[40px] md:h-[50px] w-auto my-3' />
</InfiniteSlider>>

<InfiniteSlider className='bg-white' gap={50} reverse={false} >
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
      <div className='flex mt-10 justify-evenly gap-5 items-center flex-col lg:flex-row'>
       

        <div className='basis-1/2 max-w-[600px] w-full flex flex-col gap-2 md:gap-5 lg:gap-10 border' style={{ maskImage:'linear-gradient( to right,transparent,black 10%,black 90%,transparent)'}}>
        <InfiniteSlider className='bg-white' gap={50} reverse={true} >
                <img src='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' alt='React' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=egQrEphjrirz&format=png&color=000000' alt='Redux' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=108784&format=png&color=000000' alt='Javascript' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' alt='Nodejs' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' alt='ExpressJs' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000' alt='mongodb' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000' alt='typescript' className='h-[40px] md:h-[50px] w-auto my-3' />
            </InfiniteSlider>
        <InfiniteSlider className='bg-white' gap={50} reverse={false} >
                <img src='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' alt='React' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=egQrEphjrirz&format=png&color=000000' alt='Redux' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=108784&format=png&color=000000' alt='Javascript' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' alt='Nodejs' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' alt='ExpressJs' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000' alt='mongodb' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000' alt='typescript' className='h-[40px] md:h-[50px] w-auto my-3' />
            </InfiniteSlider>
         
        </div>
 
       <Code className='min-h-[250px] max-w-[500px] w-full' codeString={codeString}></Code>
      </div>
    </div>
  )
}

export default SectionOne