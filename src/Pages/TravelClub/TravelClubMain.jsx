import React, { useEffect, useState } from "react";
import "./styles.css";
import { ReactComponent as BlueUnderline } from "../../assets/icons/underlineBlue.svg";

import CardComponent from "../../components/common/CardComponent";
import TravelData from "../../assets/JSON/TravelData.json";

const TravelClubMain = () => {
  const [fromCity, setFromCity] = useState();
  const [toCity, setToCity] = useState();
  const [priceRange, setPriceRange] = useState();
  const [travelClubs, setTravelClubs] = useState(TravelData);

  useEffect(() => {
    setTravelClubs(TravelData);
  }, [TravelData]);

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
          {travelClubs.map((club) => (
            <CardComponent
              images={club.img}
              title={club.title}
              city={club.place}
              reviews={club.rating}
              price={club.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TravelClubMain;
