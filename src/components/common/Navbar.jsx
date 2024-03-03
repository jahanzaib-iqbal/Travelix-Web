import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HeaderLinks from "./HeaderLinks";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo ">
        <Link to="/">
          <h1 className="logoText"><span className="logoStart">T</span>ravelix</h1>
        </Link>
      </div>

      <div className="links">
        <HeaderLinks address="/hotel" title="Hotels" />
        <HeaderLinks address="/car" title="Car" />
        <HeaderLinks address="/travel-club" title="TravelClub" />
        <HeaderLinks address="/login" title="Login" />
        <HeaderLinks address="/signup" title="Signup" />
      </div>
    </div>
  );
};

export default Navbar;
