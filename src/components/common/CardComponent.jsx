// CardComponent.jsx

import React, { useState } from "react";
import "./CardComponent.css";
import image1 from "../../assets/images/image (1).jpg";
import image2 from "../../assets/images/image (2).jpg";
import image3 from "../../assets/images/image (3).jpg";
import image4 from "../../assets/images/image (4).jpg";
import image5 from "../../assets/images/image (5).jpg";
import image6 from "../../assets/images/image (6).jpg";
import { FiHeart, FiStar } from "react-icons/fi"; // Import heart and star icons
import { FaHeart, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const CardComponent = (props) => {
  const images = [image1, image2, image3, image4, image5, image6];

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
              fill="currentColor"
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
              fill="currentColor"
              d="m11.29 12l3.54-3.54a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42L13.41 17a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41Z"
            />
          </svg>
        </div>
      </div>
      <div className="details-container">
        <div className="title">{props.title}</div>
        <div className="ratings">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FiStar />
          <span className="reviews">({props.reviewsNum} reviews)</span>
        </div>
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
