import React, { useState, useEffect } from "react";
import "./styles.css";
import CardComponent from "../../components/common/CardComponent";
import { ReactComponent as BlueUnderline } from "../../assets/icons/underlineBlue.svg";
import carData from "../../assets/JSON/CarData.json";

const CarMain = () => {
  const [carType, setCarType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [city, setCity] = useState("All Cities");
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState(carData);
  const [filteredCars, setFilteredCars] = useState(carData);

  useEffect(() => {
    // Filter cars based on selected city, car type, and price range
    const filtered = cars.filter((car) => {
      return (
        (city === "All Cities" || car.location === city) && // Filter by selected city
        (carType === "" || car.carType === carType) && // Filter by selected car type
        (priceRange === "" || checkPriceRange(car.price)) && // Filter by selected price range
        (searchTerm === "" ||
          car.carModel.toLowerCase().includes(searchTerm.toLowerCase())) // Filter by search term
      );
    });
    setFilteredCars(filtered);
  }, [city, carType, priceRange, searchTerm, cars]); // Update whenever city, carType, priceRange, searchTerm, or cars change

  // Function to check if car price falls within the selected price range
  const checkPriceRange = (price) => {
    switch (priceRange) {
      case "low":
        return price >= 0 && price <= 10000;
      case "medium":
        return price > 10000 && price <= 20000;
      case "high":
        return price > 20000;
      default:
        return false;
    }
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle reset button click
  const handleReset = () => {
    setCarType("");
    setPriceRange("");
    setCity("All Cities");
    setSearchTerm("");
  };

  return (
    <>
      <div className="search-bar-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Car Name..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
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
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Bus">Bus</option>
        </select>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="car-search-select"
        >
          <option value="">Price Range</option>
          <option value="low">0-10000</option>
          <option value="medium">10000-20000</option>
          <option value="high">&gt;20000</option>
        </select>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="car-search-select"
        >
          <option value="All Cities">All Cities</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Multan">Multan</option>
          <option value="Karachi">Karachi</option>
          <option value="Muzaffargarh">Muzaffargarh</option>
        </select>
        <button className="car-reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>

      <section id="trending-cars-section">
        <div className="heading-Ucontainer" id="trending-car-heading">
          <h1 className="section-heading">Cars</h1>
          <BlueUnderline />
        </div>

        <div id="trending-cars">
          {filteredCars.map((car) => (
            <CardComponent
              key={car.id} // Assuming each car has a unique id
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
