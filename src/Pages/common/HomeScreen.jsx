import React from "react";
import "./Home.css";
import Navbar from "../../components/common/Navbar";
const HomeScreen = () => {
  return (
    <div className="MainSection">
      <div class="custom-shape-divider-bottom-1709480227">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <Navbar />
      <div className="HeroSection">
        <div className="TitleContainer">
          <h1 className="mainTitle">
            Travel, <span className="underlineEnjoy">enjoy</span> and live a new
            and full life
          </h1>
        </div>
        <div className="HeroImageContainer">
          <image href="../../assets/images/background.jpg" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
