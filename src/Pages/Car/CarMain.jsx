import React, { useState } from "react";
import "./styles.css";
import image1 from "../../assets/images/Cars/civic (1).jpg";
import image2 from "../../assets/images/Cars/civic (2).jpg";
import image3 from "../../assets/images/Cars/civic (3).jpg";
import image4 from "../../assets/images/Cars/civic (4).jpg";
import image5 from "../../assets/images/Cars/civic (5).jpg";
import image6 from "../../assets/images/Cars/civic (6).jpg";
import CardComponent from "../../components/common/CardComponent";

const CarMain = () => {
  const [carType, setCarType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Handle search functionality here
    console.log("Search button clicked!");
  };

  return (
    <>
      <div className="search-bar-container">
        <div className="search-input-wrapper">
          <input type="text" placeholder="Search..." />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            onClick={handleSearch}
          >
            <path
              fill="none"
              stroke="#111"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
            ></path>
          </svg>
        </div>
        <select
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          className="car-search-select"
        >
          <option value="">Car Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="bus">Bus</option>
        </select>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="car-search-select"
        >
          <option value="">Price Range</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="car-search-select"
        >
          <option value="">Location</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
          <option value="city3">City 3</option>
        </select>
        <button className="car-search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <section id="trending-cars-section">
        <h1 className="section-heading">Top Cars</h1>
        <div id="trending-cars">
          <CardComponent
            images={[image1, image2, image3, image4, image5, image6]}
            title="Honda Civic"
            city="Lahore"
            description="Description Lorem ipsum dolor sit"
            price="231"
            reviews={4.8}
          />
          <CardComponent
            images={[image2, image1, image3, image4, image5, image6]}
            title="Honda Civic"
            city="Lahore"
            description="Description Lorem ipsum dolor sit"
            price="231"
            reviews={4.8}
          />
          <CardComponent
            images={[image4, image1, image2, image4, image5, image6]}
            title="Honda Civic"
            city="Lahore"
            description="Description Lorem ipsum dolor sit"
            price="231"
            reviews={4.8}
          />
          <CardComponent
            images={[image5, image2, image3, image1, image5, image6]}
            title="Honda Civic"
            city="Lahore"
            description="Description Lorem ipsum dolor sit"
            price="231"
            reviews={4.8}
          />
          <CardComponent
            images={[image6, image2, image3, image4, image5, image6]}
            title="Honda Civic"
            city="Lahore"
            description="Description Lorem ipsum dolor sit"
            price="231"
            reviews={4.8}
          />
          <CardComponent
            images={[image1, image2, image3, image4, image5, image6]}
            title="Honda Civic"
            city="Lahore"
            description="Description Lorem ipsum dolor sit"
            price="231"
            reviews={4.8}
          />
        </div>
      </section>
    </>
  );
};

export default CarMain;
