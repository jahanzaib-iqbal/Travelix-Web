import React from "react";
import "./Home.css";
import HeroSection from "../../components/common/HeroSection";
import Navbar from "../../components/common/Navbar";
import CardComponent from "../../components/common/CardComponent";
const HomeScreen = () => {
  return (
    <>
   <HeroSection/>
   <div style={{margin:'2rem',display:'flex', justifyContent:'space-around', flexWrap:"wrap"}}>
   <CardComponent/>
   <CardComponent/>
   
   <CardComponent/>
   
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   {/* <CardComponent/> */}
   </div>
    </>
  );
};

export default HomeScreen;
