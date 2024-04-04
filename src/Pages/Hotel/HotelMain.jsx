import React, { useState, useEffect } from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as BlueUnderline } from "../../assets/icons/underlineBlue.svg";
import HotelData from "../../assets/JSON/HotelData.json";
import CardComponent from "../../components/common/CardComponent";

const HotelMain = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [showDropdown, setShowDropdown] = useState(false);
  const [hotels, setHotels] = useState(HotelData);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const filtered = hotels.filter(
      (hotel) =>
        (selectedCity === "All Cities" || hotel.location === selectedCity) &&
        hotel.maxGuestsAllowed >= adults + children &&
        hotel.hotelName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredHotels(filtered);
  }, [selectedCity, adults, children, hotels, searchInput]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAdultsChange = (value) => {
    if (adults + value >= 0) setAdults(adults + value);
  };

  const handleChildrenChange = (value) => {
    if (children + value >= 0) setChildren(children + value);
  };

  const handleRoomsChange = (value) => {
    if (rooms + value >= 0) setRooms(rooms + value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="hotel-search-bar-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Hotel Name..."
            onChange={handleSearchInputChange}
            value={searchInput}
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
          className="hotel-search-select"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="All Cities">All Cities</option>
          <option value="Lahore">Lahore</option>
          <option value="Karachi">Karachi</option>
          <option value="Muzaffargarh">Muzaffargarh</option>
          <option value="Multan">Multan</option>
          <option value="Islamabad">Islamabad</option>
        </select>

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="hotel-search-select"
          placeholderText="Check-in Date"
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="hotel-search-select"
          placeholderText="Check-out Date"
        />

        <div className="booking-menu">
          <div id="hotel-menu-header" onClick={toggleDropdown}>
            {rooms} Rooms, {adults} Persons, {children} Child
            <i
              className={`fas ${
                showDropdown ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </div>
          {showDropdown && (
            <div id="persons-dropdown">
              <div id="persons-option">
                <span>Rooms:</span>
                <div id="counter">
                  <button
                    className="personbtn"
                    onClick={() => handleRoomsChange(-1)}
                  >
                    -
                  </button>
                  <span>{rooms}</span>
                  <button
                    className="personbtn"
                    onClick={() => handleRoomsChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div id="persons-option">
                <span>Adults:</span>
                <div id="counter">
                  <button
                    className="personbtn"
                    onClick={() => handleAdultsChange(-1)}
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button
                    className="personbtn"
                    onClick={() => handleAdultsChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div id="persons-option">
                <span>Children:</span>
                <div id="counter">
                  <button
                    className="personbtn"
                    onClick={() => handleChildrenChange(-1)}
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button
                    className="personbtn"
                    onClick={() => handleChildrenChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="heading-Ucontainer" id="trending-hotel-heading">
        <h1 className="section-heading">Hotel </h1>
        <BlueUnderline />
      </div>

      <div id="trending-cars">
        {filteredHotels.map((hotel) => (
          <CardComponent
            key={hotel._id}
            images={hotel.images}
            title={hotel.hotelName}
            city={hotel.location}
            price={hotel.price}
            reviews={hotel.rating}
          />
        ))}
      </div>
    </>
  );
};

export default HotelMain;
