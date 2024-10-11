import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Moon, SunDim } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDark,setIsDark]= useState(true)

  function modeHandler(e) {
    e.preventDefault()
    setIsDark(prev=>!prev)
    document.body.classList.toggle("dark");
}

  return (
      <nav className='flex h-[60px] border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 backdrop-blur-lg'>
      <div className='max-w-[1350px] px-6 mx-auto flex justify-between items-center w-full'>
      <Link to='/'>
       <div className='text-base md:text-lg flex font-semibold items-center'>
        <img src={logo} className='w-4 sm:w-5 md:w-6 h-fit object-cover aspect-square mr-1' alt="" />
        Pratap UI</div></Link>
          <div className='flex gap-2 items-center sm:gap-4 md:gap-7 font-medium '>
              <Link className='text-xs sm:text-sm font-semibold' to='/components'>Components</Link>
              <Link className='text-xs sm:text-sm font-semibold' to='/components'>Twitter</Link>
              
        <span className='text-sm sm:text-1xl' href="" onClick={modeHandler}>{isDark ? <Moon size={16} strokeWidth={2} /> : <SunDim size={16}  strokeWidth={2}/> }</span>
          </div>
      </div>
    </nav>
  )
}

export default Navbar