import React from "react";
import "./Home.css";
import HeroSection from "../../components/common/HeroSection";
import Navbar from "../../components/common/Navbar";
import CardComponent from "../../components/common/CardComponent";
import Card from "../../components/common/HomeScreenCard/index";
import { ReactComponent as PaymentIcon } from "../../assets/icons/payment.svg";
import { ReactComponent as CarIcon } from "../../assets/icons/car.svg";
import { ReactComponent as DestinationIcon } from "../../assets/icons/destination.svg";
import tripSectionImage from "../../assets/images/tripSection (1).jpg";
import newsLtterImage from "../../assets/images/tripSection (2).jpg";
import image1 from "../../assets/images/image (1).jpg";
import image2 from "../../assets/images/image (2).jpg";
import image3 from "../../assets/images/image (3).jpg";
import image4 from "../../assets/images/image (4).jpg";
import image5 from "../../assets/images/image (5).jpg";
import image6 from "../../assets/images/image (6).jpg";
import TestimonialCarousel from "../../components/common/TestimonialsSection";
import { ReactComponent as BlueUnderline } from "../../assets/icons/underlineBlue.svg";
import { ReactComponent as GradientUnderline } from "../../assets/icons/underlineGradient.svg";

const HomeScreen = () => {
  const hotelIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 32 32"
    >
      <path
        fill="#3c698b"
        d="M9.5 15A1.5 1.5 0 1 1 8 16.5A1.5 1.5 0 0 1 9.5 15m0-2a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 9.5 13"
      ></path>
      <path
        fill="#3c698b"
        d="M25 14h-8a2 2 0 0 0-2 2v6H4V10.6l12-6.46l12.53 6.74l.94-1.76l-13-7a1 1 0 0 0-.94 0l-13 7A1 1 0 0 0 2 10v20h2v-6h24v6h2V19a5 5 0 0 0-5-5m-8 8v-6h8a3 3 0 0 1 3 3v3Z"
      ></path>
    </svg>
  );

  const carIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 256 256"
    >
      <g fill="#3c698b">
        <path
          d="M184 184h40v24a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8ZM32 208a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8v-24H32ZM194.11 52.75A8 8 0 0 0 186.8 48H69.2a8 8 0 0 0-7.31 4.75L32 120h192Z"
          opacity={0.2}
        ></path>
        <path d="M240 112h-10.8l-27.78-62.5A16 16 0 0 0 186.8 40H69.2a16 16 0 0 0-14.62 9.5L26.8 112H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M69.2 56h117.6l24.89 56H44.31ZM64 208H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 152a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></path>
      </g>
    </svg>
  );

  const travelClubIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 48 48"
    >
      <g fill="#3c698b">
        <path d="M24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648c2.017.143 5.434.323 9.929.323c2.206 0 4.152-.043 5.8-.104h-.017a6 6 0 1 1-11.567 0c-.74-.027-1.42-.058-2.036-.09a8 8 0 1 0 15.64 0a112.94 112.94 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6"></path>
        <path
          fillRule="evenodd"
          d="m24.288 28.042l6.542 1.947l5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797l6.46-1.923A.979.979 0 0 1 24 28c.083 0 .166.01.247.031l.008.002a.892.892 0 0 1 .033.01M25 30.341l5 1.488V40h-5zm-7 1.488l5-1.488V40h-5z"
          clipRule="evenodd"
        ></path>
        <path d="M37 34a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5v-5a3 3 0 0 0-3-3zM9 34a3 3 0 0 0-3 3v5h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z"></path>
      </g>
    </svg>
  );

  return (
    <>
      <HeroSection />

      <h1 className="Main-Tagline">We Offer Best Services</h1>
      <div className="main-card-contanier">
        <Card
          title="Hotel Booking"
          desc="Boook Hotels Seamlessly using our platform, Embark on your new Journey"
          svg={hotelIcon}
        />
        <Card
          title="Car Booking"
          desc="Boook Hotels Seamlessly using our platform, Embark on your new Journey"
          svg={carIcon}
        />
        <Card
          title="Travel Clubs"
          desc="Boook Hotels Seamlessly using our platform, Embark on your new Journey"
          svg={travelClubIcon}
        />
      </div>

      <section className="trip-steps-section">
        <div className="trip-headings">
          <div className="trip-step-title">
            <h1>
              Book Your Next <span>Trip</span> In 3 Easy Steps
            </h1>
          </div>
          <div className="trip-steps-container">
            <div className="steps">
              <DestinationIcon />
              <div className="steps-subheadings">
                <h3>Choose Destination</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="steps">
              <PaymentIcon />
              <div className="steps-subheadings">
                <h3>Make Payment</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="steps">
              <CarIcon />
              <div className="steps-subheadings">
                <h3>Reach on Time</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="steps-image">
          <img src={tripSectionImage} />
        </div>
      </section>

      <section className="trending-container">
        <div className="heading-Ucontainer">
          <h1 className="section-heading">Trending Hotel </h1>
          <BlueUnderline />
        </div>
        <div className="trending">
          <CardComponent
            images={[image1, image2, image3, image4, image5, image6]}
            title="Lexus Hotel"
            city="Hunza"
            description="Lorem ipsum dolor sit"
            price="231"
            reviews={4.8}
          />
          <CardComponent
            images={[image2, image1, image4, image6]}
            reviews={4.8}
            title="Red and White"
            city="Islamabad"
            description="Lore sdd das dolor sit"
            price="100"
          />
          <CardComponent
            images={[image3, image2, image4, image5, image6]}
            reviews={4.83}
            title="Pearl Continental"
            city="Lahore"
            description="Lorem fisiofus dsf sit"
            price="872"
          />
          <CardComponent
            images={[image4, image2, image3, image5, image6]}
            reviews={4.8}
            title="Stay Inn"
            city="Lahore"
            description="jdshfkjb Lorem ipsum dolor sit"
            price="120"
          />
          <CardComponent
            images={[image5, image2, image3, image4, image6]}
            reviews={4.8}
            title="Ouff Hasds"
            city="Sakardu"
            description="Lsakas orem ipsum dolor sit"
            price="31"
          />
          <CardComponent
            images={[image6, image2, image3, image4, image5]}
            reviews={4.8}
            title="Hullululul"
            city="Karachi"
            description="jsadhuash jhasdjbsah  dolor sit"
            price="231"
          />
        </div>
      </section>
      <section className="testimonial-section">
        <div className="heading-Ucontainer">
          <h1 className="section-heading">Testimonials </h1>
          <BlueUnderline />
        </div>
        <TestimonialCarousel />
      </section>

      <div className="heading-Ucontainer newsLetterHeading">
          <h1 className="section-heading ">Subscribe To News Letter </h1>
          <BlueUnderline />
        </div>
      <section className="newsLetter-section">
        <div className="NLettersection-container">
          <div className="NLetterimage-container">
            <img src={newsLtterImage} alt="House and pool" />
          </div>
          <div className="form-container">
            <h2>Get special offers, and more from travelworld</h2>
            <p>Rreceive exclusive deals on travel, vacations, and more.</p>
            <form className="newsForm">
              <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
