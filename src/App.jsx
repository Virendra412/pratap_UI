import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Header from './componets/Header'
import AnimatedCounter from './componets/uiComponents/AnimatedCounter'
import SectionTwo from './componets/SectionTwo.jsx'
import ScrollShow from './componets/uiComponents/ScrollShow.jsx'
import SectionThree from './componets/SectionThree.jsx'
import SectionOne from './componets/SectionOne.jsx'
import SectionFour from './componets/SectionFour.jsx'
import SmoothScroll from './componets/UtilsComponent/SmothScroll.jsx'
import SmothScroll from './componets/UtilsComponent/SmothScroll.jsx'

function App() {
  



  return (
   
    <SmothScroll>
        <div>
      <Navbar></Navbar>
      <Header></Header>
      <SectionThree/>
      <SectionTwo></SectionTwo>
      <SectionOne> </SectionOne>
      <SectionFour></SectionFour>
      <ScrollShow></ScrollShow>
      </div>
      </SmothScroll>
 
    
  
   
  )
}

export default App


{/* <AnimatedCounter from={0.1} to={1.6} suffix={" Million+"} toFixedDecimal={1} className='text-green-600 font-semibold' />
<AnimatedCounter from={0} to={2634290} suffix={" Million+"} toFixedDecimal={0} className='text-green-600 font-semibold' /> */}