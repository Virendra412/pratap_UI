import React from "react";
import Header from "../componets/Header";
import SectionThree from "../componets/SectionThree";
import SectionTwo from "../componets/SectionTwo";
import SectionOne from "../componets/SectionOne";
import SectionFour from "../componets/SectionFour";
import Features  from '../componets/Features'





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
      {/* <ScrambleText className="text-green-600 text-3xl" encyptType='alphanumeric'>UDay pratap singh chauhan</ScrambleText> */}
     
      
    </>
  );
};

export default Home;
