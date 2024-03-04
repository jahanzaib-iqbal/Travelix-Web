import React from 'react'
import heroImage from '../../assets/images/travelMain.png'
import "./Hero.css"
import Navbar from './Navbar'
const HeroSection = () => {
  return (
    <>
    <div className="MainSection">
    <div class="custom-shape-divider-bottom-1709491773">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
      </svg>
    </div>
    <div className="HeroSection">
      <div className="TitleContainer">
        <h1 className="mainTitle">
          Travel, <span className="underlineEnjoy">enjoy</span> and live a new
          and full life
        </h1>
      </div>
      <div className="HeroImageContainer">
        <img src={heroImage} alt="Travelling Image" className="HeroImage" />
      </div>
    </div>
  </div>
  </>
  )
}

export default HeroSection
