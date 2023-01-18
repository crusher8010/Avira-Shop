import React from "react";
import LowerFooter from "../LowerFooter/LowerFooter";
import UpperFooter from "../UpperFooter/UpperFooter";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <UpperFooter />
        <LowerFooter />
      </div>
    </>
  );
};

export default Footer;
