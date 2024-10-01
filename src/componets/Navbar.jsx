import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {

  function modeHandler(e) {
    e.preventDefault()
    document.body.classList.toggle("dark");
}

  return (
      <nav className='flex justify-between items-center px-[4%] sm:px-p[10%] py-4'>
      <div className='text-2xl  flex font-bold'>
        <img src={logo} className='w-8 h-8 object-cover aspect-square mr-1' alt="" />
        Pratap UI</div>
          <div className='flex gap-2 sm:gap-4 md:gap-7 font-medium '>
              <a className='text-sm sm:text-1xl' href="">Components</a>
              <a className='text-sm sm:text-1xl' href="">Twitter</a>
              <a className='text-sm sm:text-1xl' href="" onClick={modeHandler}>Mode</a>
          </div>
    </nav>
  )
}

export default Navbar