
import { div } from 'framer-motion/client'
import React from 'react'


const PropDetails = ({propDetails}) => {
    return (
        <>
            <h3 className='mt-10 mb-2'>Componet API</h3>
    <div className='grid grid-cols-[repeat(4,auto)] gap-[1px] bg-zinc-400 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-800'>
          {propDetails?.map((item,index) => {
            return (<React.Fragment key={index} >
              <span className='bg-white dark:bg-black p-1 sm:p-2 text-xs sm:text-sm'>{item.prop}</span>
              <span className='bg-white dark:bg-black p-1 sm:p-2 text-xs sm:text-sm'>{item.type}</span>
              <span className='bg-white dark:bg-black p-1 sm:p-2 text-xs sm:text-sm'>{item.default}</span>
              <span className='bg-white dark:bg-black p-1 sm:p-2 text-xs sm:text-sm'>{item.description}</span>
            </React.Fragment>)
          })}
            </div>
            </>
  )
}

export default PropDetails