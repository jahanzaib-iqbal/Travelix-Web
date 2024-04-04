// CardComponent.jsx

import React, { useState } from "react";
import "./CardComponent.css";
import { FiHeart, FiStar } from "react-icons/fi"; // Import heart and star icons
import { FaHeart, FaStar } from "react-icons/fa";

const CardComponent = (props) => {
  const { images, title, reviewsNum } = props; // Destructure images, title, and reviewsNum from props

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleFavoriteClick = () => {
    setIsFavorited((prevValue) => !prevValue);
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const starSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000"
        d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
      />
    </svg>
  );

  return (
    <div className="card-container">
      <div className="img-btns-container">
        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
          <div className="overlay">
            <div
              className={`favorite-icon ${isFavorited ? "favorited" : ""}`}
              onClick={handleFavoriteClick}
            >
              {isFavorited ? <FaHeart /> : <FiHeart />}
            </div>
          </div>
        </div>
        <div className="arrow left" onClick={handlePrevClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="#555"
              d="m11.29 12l3.54-3.54a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42L13.41 17a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41Z"
            />
          </svg>
        </div>
        <div className="arrow right" onClick={handleNextClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#555"
              d="m11.29 12l3.54-3.54a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42L13.41 17a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41Z"
            />
          </svg>
        </div>
      </div>
      <div className="details-container">
        <div className="title">
          {title}
          <span className="reviews">
            {props.reviews}
            {starSvg}
          </span>
        </div>
        <div>{props.city}</div>
        <div> {props.description}</div>

        <h4 className="price"> {props.price} $ </h4>
      </div>

      <div className="dot-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
