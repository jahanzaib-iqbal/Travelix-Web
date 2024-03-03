import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/common/HomeScreen";
import HotelMain from "./Pages/Hotel/HotelMain";
import CarMain from "./Pages/Car/CarMain";
// import TravelClubMain from "./Pages/TraelClub/TravelClubMain";
import TravelClubMain from "./Pages/TravelClub/TravelClubMain";
// import "../src/styles/Home.css"
import Footer from "./components/common/Footer";
// import "App.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/hotel" element={<HotelMain />} />
          <Route path="/car" element={<CarMain />} />
          <Route path="/travel-club" element={<TravelClubMain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
