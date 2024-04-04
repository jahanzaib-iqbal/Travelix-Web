import React, { useState } from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as BlueUnderline } from "../../assets/icons/underlineBlue.svg";
import image1 from "../../assets/images/Hotels/image (1).jpg";
import image2 from "../../assets/images/Hotels/image (2).jpg";
import image3 from "../../assets/images/Hotels/image (3).jpg";
import image4 from "../../assets/images/Hotels/image (4).jpg";
import image5 from "../../assets/images/Hotels/image (5).jpg";
import image6 from "../../assets/images/Hotels/image (6).jpg";

import CardComponent from "../../components/common/CardComponent";

const HotelMain = () => {
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
          <option value="city4">Multan</option>
          <option value="city5">Pattoki</option>
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

      <div className="heading-Ucontainer" id="trending-hotel-heading">
        <h1 className="section-heading">Trending Hotel </h1>
        <BlueUnderline />
      </div>

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

      
    </>
  );
};

export default HotelMain;
