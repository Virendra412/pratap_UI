import React, { useEffect, useRef, useState } from 'react'
import imga from '../../assets/image2.jpg'
import {animate, easeOut, inView, motion, useInView, useScroll} from 'framer-motion'
import { span } from 'framer-motion/client'

const Grid = () => {
    const [imagePos,setImagePos]= useState([])
    const gridRef = useRef(null)
    const inview = useInView(gridRef, {
        amount:0,
        margin:'400% 0px -50% 0px'
        
    })

   
    console.log(inview);
    useEffect(()=>{
        const gridRect= gridRef.current.getBoundingClientRect()
        const gridItems = gridRef.current.querySelectorAll('.items')
      
        gridItems.forEach(child => {
         
            const left = child.getBoundingClientRect().left - gridRect.left
            const top = child.getBoundingClientRect().top - gridRect.top
            child.querySelector('img').style.objectPosition=`-${left}px -${top}px`
            
            
        })
       
    }, [])
    
    const arrow = { initial: { x:0, scale: 1 }, animate: { x: 90, scale: 1.5 } }

  return (
      <motion.div ref={gridRef} className='grid w-[400px] h-[600px] grid-cols-5 grid-flow-row  rounded-md my-24 ' initial="initial" animate="intial" whileInView='animate' viewport={{amount:0,margin:'400% 0px -90% 0px'}}>
          {new Array(50).fill(null).map((i,j) => {
              return ( 
                <motion.div key={j} className="items overflow-hidden pointer-events-none " variants={{ initial: { x: 0,y:0,filter:'blur(0) grayScale(0%)' }, animate: { x: randomGenrator(1200), y: randomGenrator(200),rotate:rRotation(),scale:0.5,filter:'blur(1px) grayScale(80%)',transition:{duration:1.5,ease:easeOut} } }}  ><img src={'https://images.pexels.com/photos/28366156/pexels-photo-28366156/free-photo-of-a-woman-in-a-brown-turtle-neck-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='w-[400px] h-[600px] object-cover' alt="" /></motion.div>
            )
          })}
       
      </motion.div>
  )
}




export default Grid

function randomGenrator(num) {
    return Math.floor(Math.random()*num*(Math.random()>0.3?-1:1))
}
function rRotation() {
    return Math.floor(Math.random()*700)
}