
import './App.css'
import Navbar from './componets/Navbar'
import Header from './componets/Header'
import bluf2 from './assets/Operations_puff.webp'
import bluf from './assets/Conversion_puff.webp'
import SectionTwo from './componets/SectionTwo.jsx'
import ScrollShow from './componets/uiComponents/ScrollShow.jsx'
import SectionThree from './componets/SectionThree.jsx'
import SectionOne from './componets/SectionOne.jsx'
import SectionFour from './componets/SectionFour.jsx'
import Footer from './componets/Footer.jsx'
import { AnimatedPara } from './componets/uiComponents/AnimatedPara.jsx'

import AnimatedCounter from './componets/uiComponents/AnimatedCounter.tsx'
import Features from './componets/Features.jsx'





function App() {
  



  return (
   
   
        <>
      <Navbar></Navbar>
      <Header></Header>
      <div className='uiComp' style={{background:`url(${bluf2}),url(${bluf})`}}>
      <SectionThree/>
      <SectionTwo></SectionTwo>
      <SectionOne> </SectionOne>
      </div>
      <SectionFour></SectionFour>
      <ScrollShow></ScrollShow>
      <Features></Features>
      <Footer></Footer>
      
      </>
      
 
    
  
   
  )
}

export default App


{/* <AnimatedCounter from={0.1} to={1.6} suffix={" Million+"} toFixedDecimal={1} className='text-green-600 font-semibold' />
<AnimatedCounter from={0} to={2634290} suffix={" Million+"} toFixedDecimal={0} className='text-green-600 font-semibold' /> */}