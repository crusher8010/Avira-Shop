import React from "react";
import LowerNavbar from "../LowerNavbar/LowerNavbar";
import UpperNavBar from "../UpperNavbar/UpperNavbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <UpperNavBar />
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
