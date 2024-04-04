import React, { useState } from "react";
import "./styles.css";
import CardComponent from "../../components/common/CardComponent";
import { ReactComponent as BlueUnderline } from "../../assets/icons/underlineBlue.svg";
import carData from "../../assets/JSON/CarData.json";
import { useEffect } from "react";

const CarMain = () => {
  const [carType, setCarType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [location, setLocation] = useState("");
  const [cars, setCars] = useState(carData);

  useEffect(() => {
    setCars(carData);
  }, [carData]);

  const handleSearch = () => {
    // Handle search functionality here
    console.log("Search button clicked!");
  };

  return (
    <>
      <div className="search-bar-container">
        <div className="search-input-wrapper">
          <input type="text" placeholder="Car Name..." />

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
          <option value="Lahore">City 1</option>
          <option value="Islamabad">City 2</option>
          <option value="Multan">City 3</option>
        </select>
        <button className="car-search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <section id="trending-cars-section">
        <div className="heading-Ucontainer" id="trending-car-heading">
          <h1 className="section-heading">Trending Cars</h1>
          <BlueUnderline />
        </div>

        <div id="trending-cars">
          {cars.map((car) => (
            <CardComponent
              images={car.images}
              title={car.carModel}
              city={car.location}
              price={car.price}
              reviews={car.rating}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CarMain;
