import React from "react";
import "./Homepage.css";
import Navbar from "../../WholeNavbar/MainNavbar/Navbar";
import BannerHomePage from "../BannerHomePage/BannerHomePage";
import ProductHomePage from "../ProductHomePage/ProductHomePage";
import Footer from "../../WholeFooter/Footer/Footer";

const Homepage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="homepage_main">
        <BannerHomePage />
        <ProductHomePage />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
