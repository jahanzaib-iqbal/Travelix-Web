import React from "react";
import "./styles.css";
import { ReactComponent as BlueUnderline } from "../../assets/icons/underlineBlue.svg";
import image1 from "../../assets/images/Travel/travel (1).jpg";
import image2 from "../../assets/images/Travel/travel (2).jpg";
import image3 from "../../assets/images/Travel/travel (3).jpg";
import image4 from "../../assets/images/Travel/travel (4).jpg";
import image5 from "../../assets/images/Travel/travel (5).jpg";
import image6 from "../../assets/images/Travel/travel (6).jpg";
import CardComponent from "../../components/common/CardComponent";

const TravelClubMain = () => {
  return (
    <>
      <div className="travel-search-bar-container">
        <select className="travel-search-select">
          <option value="">From City</option>
          <option value="city1">Lahore</option>
          <option value="city2">Karachi</option>
          <option value="city3">Muzaffargarh</option>
          <option value="city4">Multan</option>
          <option value="city5">Pattoki</option>
        </select>

        <select className="travel-search-select">
          <option value="">To City</option>
          <option value="city1">Lahore</option>
          <option value="city2">Karachi</option>
          <option value="city3">Muzaffargarh</option>
          <option value="city4">Multan</option>
          <option value="city5">Pattoki</option>
        </select>

        <select className="travel-search-select">
          <option value="">Price Range</option>
          <option value="city2">&lt;5000</option>
          <option value="city1">5000-10000</option>
          <option value="city3">10000-15000</option>
          <option value="city4">15000-20000</option>
          <option value="city5">&gt;20000</option>
        </select>

        <button className="travel-search-btn">Search</button>
      </div>

      <section>
        <div className="heading-Ucontainer" id="trending-hotel-heading">
          <h1 className="section-heading">Top Travel Clubs</h1>
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
      </section>
    </>
  );
};

export default TravelClubMain;
