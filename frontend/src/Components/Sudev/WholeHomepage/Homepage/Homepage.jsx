import React from "react";
import "./Homepage.css";
import Navbar from "../../WholeNavbar/MainNavbar/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage_main">
        <img
          src="https://images.meesho.com/images/marketing/1631722939962.webp"
          alt=""
        />
      </div>
    </>
  );
};

export default Homepage;
