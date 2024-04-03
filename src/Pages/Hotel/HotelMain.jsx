import React, { useState } from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HotelMain = () => {
  // const [city, setCity] = useState("");
  // const [checkInDate, setCheckInDate] = useState(null);
  // const [checkOutDate, setCheckOutDate] = useState(null);
  // const [rooms, setRooms] = useState(1);
  // const [adults, setAdults] = useState(1);
  // const [children, setChildren] = useState(0);
  // const [showDropdown, setShowDropdown] = useState(false);

  // const handleRoomsChange = (type) => {
  //   if (type === "rooms") {
  //     setRooms(rooms + 1);
  //   } else if (type === "adults") {
  //     setAdults(adults + 1);
  //   } else if (type === "children") {
  //     setChildren(children + 1);
  //   }
  // };

  // const handleDropdownToggle = () => {
  //   setShowDropdown(!showDropdown);
  // };
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

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

  return (
    <>
      <div className="hotel-search-bar-container">
        <select className="hotel-search-select">
          <option value="">City</option>
          <option value="city1">Lahore</option>
          <option value="city2">Karachi</option>
          <option value="city3">Muzaffargarh</option>
          <option value="city3">Multan</option>
          <option value="city3">Pattoki</option>
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

        {/* ==== PERSONS Drop DOwn===== */}

        <div className="booking-menu">
          <div id="hotel-menu-header" onClick={toggleDropdown}>
            {rooms} Rooms, {adults} Persons, {children} Child{" "}
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

        <button className="hotel-search-btn">Search</button>
      </div>
      {/* =========== */}

      {/* ========== */}
    </>
  );
};

export default HotelMain;
