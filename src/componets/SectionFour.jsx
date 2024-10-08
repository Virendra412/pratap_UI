import React from 'react'
import {ScrollShow,TopLayer,BottomLayer,MiddleLayer} from 'uday-ui'


const SectionFour = () => {
  return (<>
      <div className='px-[4%] md:px-[10%] mt-16'>
          <h2 className='text-3xl sm:text-5xl md:text-6xl font-[600]'>
            The Hero<br />
        <div className='italic font-[700] bg-gradient-to-b from-[#1ce1ff] to-[#4992f8] bg-clip-text text-transparent inline-block overflow-visible'>
            Scroll Effect</div>  <br />
      </h2>
    </div>
    <ScrollShow>
    <TopLayer className='bg-[#E7EEF2]'>
                  <div className='w-full h-full relative flex items-end '>
                      <div className="textContent w-fit ml-[2%] mb-[2%] max-w-[90%] sm:max-w-[400px] z-10 bg-neutral-100/50 p-3 rounded-lg backdrop-blur-lg">
                          <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-5 text-transparent bg-gradient-to-bl from-purple-600 to-cyan-500 bg-clip-text'>Taj Mahal</h2>
                          <p className='text-1xl md:text-xl text-transparent bg-gradient-to-bl from-purple-600 to-cyan-800 bg-clip-text font-medium'>
                          The Taj Mahal is a dazzling white marble masterpiece in Agra, India, celebrated for its intricate artistry, lush gardens, and romantic allure—a timeless tribute to love and beauty.
                          </p>
                      </div>    
                <img className='absolute w-full h-full object-cover object-center right-0' src="https://images.pexels.com/photos/28257148/pexels-photo-28257148/free-photo-of-double-taj.jpeg" alt="" />
                  </div>

              </TopLayer>
              <MiddleLayer className='bg-black text-white'>
              <div className='w-full h-full relative flex items-end '>
                    <div className="textContent w-fit ml-[2%] mb-[2%] max-w-[90%] sm:max-w-[400px] z-10 bg-neutral-950/50 p-3 rounded-lg backdrop-blur-lg ">
                          <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-5 text-transparent bg-gradient-to-bl from-orange-600 to-red-500 bg-clip-text'>Hawa Mahal</h2>
                          <p className='text-1xl md:text-xl text-transparent bg-gradient-to-bl from-orange-600 to-red-500 bg-clip-text font-medium'>
                          The enchanting "Palace of Winds" in Jaipur, dazzles with its stunning pink facade and intricate latticework. This architectural gem offers a glimpse into royal life and vibrant culture.
                          </p>
                      </div>    
                <img className='absolute w-full h-full object-cover object-center right-0' src="https://images.pexels.com/photos/14940427/pexels-photo-14940427.jpeg" alt="" />
                  </div>
                  
                  
                 {/* https://images.pexels.com/photos/17762635/pexels-photo-17762635/free-photo-of-jal-mahal-palace.jpeg*/}
                
              </MiddleLayer>
              <BottomLayer className='bg-green-200 flex justify-center'>
              <div className='w-full h-full relative flex items-end'>
                    <div className="textContent w-fit ml-[2%] mb-[2%] max-w-[90%] sm:max-w-[400px] z-10 bg-neutral-900/50 p-3 rounded-lg backdrop-blur-lg ">
                          <h2 className='text-2xl sm:text-3xl  md:text-5xl font-bold mb-2 md:mb-5 text-transparent bg-gradient-to-b from-yellow-400 to-orange-700 bg-clip-text'>Jal Mahal</h2>
                          <p className='text-1xl md:text-xl text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600 bg-clip-text font-medium'>
                          Jal Mahal, the mesmerizing "Water Palace" in Jaipur, enchants with its stunning blend of Rajput and Mughal design, gracefully floating on Man Sagar Lake—an idyllic gem of serenity and beauty!
                          </p>
                      </div>    
                <img className='absolute w-full h-full object-cover object-center right-0' src="https://images.pexels.com/photos/13427001/pexels-photo-13427001.jpeg" alt="" />
                  </div>
              </BottomLayer>
    </ScrollShow>
    </>
  )
}

export default SectionFour