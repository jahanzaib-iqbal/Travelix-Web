import React, { useState } from "react";
import "./styles.css";
import userImage from "../../../assets/images/user (5).jpg";
const index = () => {
  //   const [name, setName] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [dateOfBirth, setDateOfBirth] = useState("");

  return (
    <div className="profile-container">
      <div id="profile-left-container">
        <div id="profile-picture">
          <img src={userImage} alt="User Image" />
        </div>
        <h1> Profile Title</h1>
        <p>Location</p>
        <p>Date of</p>
      </div>

      <div id="profile-right-container">
        <h1>Profile Information</h1>
        <form id="profile-information-form">
          <label>Name</label>
          <input id="name" type="text" placeholder="" />

          <label>Date of Birth</label>
          <input id="dateOfBirth" type="date" />
          <label>Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phone"
            pattern="03[0-9]{2}-[0-9]{7}"
            placeholder="03XX-XXXXXXX"
          />
          <label>Address</label>
          <input id="address" type="text" />
          <label>Email</label>
          <input id="email" type="email" />
          <div className="profile-btn-container">
            <button type="submit" className="profile-btn-save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
