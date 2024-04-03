import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/common/HomeScreen";
import HotelMain from "./Pages/Hotel/HotelMain";
import CarMain from "./Pages/Car/CarMain";
// import TravelClubMain from "./Pages/TraelClub/TravelClubMain";
import TravelClubMain from "./Pages/TravelClub/TravelClubMain";
// import "../src/styles/Home.css"
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import LoginPage from "./Pages/common/LoginPage/index";
import SignupPage from "./Pages/common/SignupPage/index";
import ProfilePage from "./Pages/common/ProfilePage/index"
import "./App.css";


function App() {
  return (
    <>
      <div className="MainApp">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/hotel" element={<HotelMain />} />
            <Route path="/car" element={<CarMain />} />
            <Route path="/travel-club" element={<TravelClubMain />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
