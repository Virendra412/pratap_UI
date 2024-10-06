import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



function Layout() {
  // console.log(useLocation().pathname)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[useLocation().pathname])
 
  return (
    <div className="main_wrapper position-relative">
      <Navbar/>
        <Outlet/>
      <Footer />
    </div>
  );
}

export default Layout;
