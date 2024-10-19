import React from 'react'
import Code from '../componets/UtilsComponent/Code'

const Installation = () => {
  return (
      <div className='max-w-7xl m-auto px-4 py-10 min-h-[70vh]'>
          <h3 className='text-3xl mb-8'>Installation</h3>
          {/* <p className='mb-10'>Pratap UI offers a collection of reusable animated components built with Framer Motion and Tailwind CSS. Add smooth, engaging animations to your web projects, making them more interactive and enjoyable.</p> */}

          <div className='flex justify-between gap-5 mb-10 flex-col sm:flex-row'>
              <div>
                  <h5 className='text-xl mb-2'>Install 'pratap-ui'</h5>
                  <p className='text-zinc-500 '>Install 'pratap-ui' and its peer dependencies via npm</p>
              </div>
              
              <Code className={'w-full max-w-[700px]'} fontSize='15px' codeString={'>npm install pratap-ui'}></Code>
          </div>
          <div >
              <div >
                  <h5 className='text-xl mb-2'>Setup TailwindCSS with you React App</h5>
                  <p><a href="https://tailwindcss.com/docs/guides/vite" className='text-blue-500'>Install Tailwind CSS with Vite (recommended)</a></p>
                  <p><a href="https://tailwindcss.com/docs/guides/vite" className='text-blue-500'>Install Tailwind CSS with Create React App</a></p>
                    
                    
              </div>
              
              
          </div>
    </div>
  )
}

export default Installation