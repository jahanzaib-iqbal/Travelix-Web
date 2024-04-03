import React, {useState} from "react";
import "./styles.css";



const HotelMain = () => {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleRoomsChange = (type) => {
    if (type === "rooms") {
      setRooms(rooms + 1);
    } else if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "children") {
      setChildren(children + 1);
    }
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="search-bar-container">
      <div className="city-dropdown">
        <input
          type="text"
          placeholder="Select City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <FontAwesomeIcon icon={faChevronDown} onClick={handleDropdownToggle} /> */}
        {showDropdown && (
          <div className="dropdown-content">
            {/* Dropdown options for cities */}
            <div>New York</div>
            <div>London</div>
            <div>Tokyo</div>
            {/* Add more cities as needed */}
          </div>
        )}
      </div>
      <div className="date-picker">
        {/* <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          placeholderText="Check-In Date"
        />
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          placeholderText="Check-Out Date"
        /> */}
      </div>
      <div className="dropdown">
        <button onClick={() => handleRoomsChange("rooms")}>
          Rooms <span>{rooms}</span>
          {/* <FontAwesomeIcon icon={faChevronUp} /> */}
        </button>
        <button onClick={() => handleRoomsChange("adults")}>
          Adults <span>{adults}</span>
          {/* <FontAwesomeIcon icon={faChevronUp} /> */}
        </button>
        <button onClick={() => handleRoomsChange("children")}>
          Children <span>{children}</span>
          {/* <FontAwesomeIcon icon={faChevronUp} /> */}
        </button>
      </div>
      <button className="search-button">
        {/* <FontAwesomeIcon icon={faSearch} /> */}
        Search
      </button>
    </div>
  );
};

export default HotelMain;
