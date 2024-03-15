import React from "react";
import "./Home.css";
import HeroSection from "../../components/common/HeroSection";
import Navbar from "../../components/common/Navbar";
import CardComponent from "../../components/common/CardComponent";
import Card from "../../components/common/HomeScreenCard/index";

const HomeScreen = () => {
  return (
    <>
      <HeroSection />
      <div
        style={{
          margin: "2rem",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <CardComponent reviewsNum={23} title="dsfdsfd" />
        {/* <CardComponent/> */}

        <Card />
      </div>
    </>
  );
};

export default HomeScreen;
