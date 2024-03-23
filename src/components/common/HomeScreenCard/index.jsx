import React, { useState } from "react";
import "./styles.css";
import iconBg from "../../../assets/icons/icon-bg.svg";
import iconBgHover from "../../../assets/icons/icon-bg-hover.svg";

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="icon-wrapper">
        <img
          src={isHovered ?  iconBg : iconBgHover}
          alt="Background"
          className="icon-bg"
        />
      </div>
      {props.svg}
     
      <hotelIcon />
      {/* <img className="cardIconsImg" src={hotelIcon} /> */}
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
