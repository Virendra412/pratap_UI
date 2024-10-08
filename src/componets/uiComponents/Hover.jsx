import { hoverMask } from '../../../test';
import React, { useRef } from 'react'
import { fullMaskBottom } from '../../../test';
import image from '../../assets/image2.jpg'
import { animate, useMotionValue, useSpring } from 'framer-motion';

const Hover = () => {
  const ref = useRef(null)
  const progress=useSpring(0,{stiffness:1000,damping:100})
  

  progress.on('change', lat =>
    ref.current.style.mask=fullMaskBottom[Math.round(lat)]
 )


  // function handleMouseMove(e) {
      
  //       const x=e.clientX -e.target.getBoundingClientRect().left;
  //       const width = e.target.getBoundingClientRect().width
  //     const perc = x / width * 100;

  //       ref.current.style.mask=fullMaskBottom[20]
  // }


  return (
    <div className='h-[100vh] relative'>
      <div className='overflow-hidden bg-slate-700 w-fit rounded-md relative'>
        <img ref={ref}  src={image} alt="" className='w-[600px] rounded-md relative z-40' onMouseEnter={()=>{progress.set(20)}} onMouseLeave={()=>{progress.set(0)}} />
        <div className='rounded-md top-0 absolute h-full '>
          <img src={image} alt="" className='w-[600px] blur-md ' />
          <p className='bottom-0 absolute text-5xl' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quae?</p>
        </div>
      </div>
      
    </div>
  )
}

export default Hover