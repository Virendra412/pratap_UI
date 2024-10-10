import React from 'react'

import Code from './UtilsComponent/Code'
import { InfiniteSlider } from 'pratap-ui'

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
    <div className='max-w-7xl mx-auto mt-16 relative px-6 '>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-[600] z-10 relative'>
        Effortless UI<br />with&nbsp; 
        <span className='text-3xl sm:text-4xl md:text-5xl font-[700] leading-[1.25] p-1 bg-clip-text text-transparent  bg-gradient-to-b from-[#1cff95] to-[#55f849] inline-block'>Ready-to-Use&nbsp;</span>  
           Component!
       
         
      </h2>
    <p className='sm:text-xl text-zinc-500 max-w-[700px] mt-2'>Easily integrate stylish, interactive components that make your interface shine with minimal effort.</p>
      <div className='flex mt-10 justify-between gap-8 items-center flex-col lg:flex-row'>
       

        <div className='max-w-[650px] w-full flex flex-col gap-2 md:gap-5 lg:gap-10 ' style={{ maskImage:'linear-gradient( to right,transparent,black 10%,black 90%,transparent)'}}>
        <InfiniteSlider className='bg-zinc-100' gap={50} reverse={true} duration={10} >
                <img src='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' alt='React' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=egQrEphjrirz&format=png&color=000000' alt='Redux' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=108784&format=png&color=000000' alt='Javascript' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' alt='Nodejs' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' alt='ExpressJs' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000' alt='mongodb' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000' alt='typescript' className='h-[40px] md:h-[50px] w-auto my-3' />
            </InfiniteSlider>
        <InfiniteSlider className='bg-zinc-100' gap={50} reverse={false} duration={10} >
                <img src='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' alt='React' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=egQrEphjrirz&format=png&color=000000' alt='Redux' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=108784&format=png&color=000000' alt='Javascript' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' alt='Nodejs' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' alt='ExpressJs' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000' alt='mongodb' className='h-[40px] md:h-[50px] w-auto my-3' />
                <img src='https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000' alt='typescript' className='h-[40px] md:h-[50px] w-auto my-3' />
            </InfiniteSlider>
         
        </div>
 
       <Code className='min-h-[250px] max-w-[550px] w-full' codeString={codeString}></Code>
      </div>
    </div>
  )
}

export default SectionOne

