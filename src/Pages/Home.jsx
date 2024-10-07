import React from "react";
import Header from "../componets/Header";
import SectionThree from "../componets/SectionThree";
import SectionTwo from "../componets/SectionTwo";
import SectionOne from "../componets/SectionOne";
import SectionFour from "../componets/SectionFour";
import Features  from '../componets/Features'
import bluf2 from '../assets/Operations_puff.webp'
import bluf from '../assets/Conversion_puff.webp'


const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="uiComp"
        // style={{ background: `url(${bluf2}),url(${bluf})` }}
      >
        <SectionThree />
        <SectionTwo />
        <SectionOne />
      </div>
      <SectionFour />
      <Features></Features>
    </>
  );
};

export default Home;
