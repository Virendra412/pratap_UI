import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
      <div className='py-[5%] px-[4%] md:px-[10%] flex justify-between border-t mt-10 dark:border-neutral-950'>
          <div>
        <div className='text-base md:text-2xl font-medium flex items-center'> <img src={logo} className='w-4 sm:w-5 md:w-7 h-auto object-cover aspect-square mr-1' alt="" /> Pratap UI</div>
        <p className='text-xs md:text-base '>Build by @udaypratap</p>
      </div>
      <div>
      <ul className='text-xs md:text-base'>
        <a href="mailto:uday06122000@gmail.com"><li>Contact Us</li></a>
        <li>Twitter</li>
        <li>Github</li>
        <li>Instagram</li>
      </ul>
      </div>
      

    </div>
  )
}

export default Footer