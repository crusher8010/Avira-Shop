import React from "react";
import "./UpperFooter.css";

const UpperFooter = () => {
  return (
    <>
      <div className="upperFooter">
        <div className="upperFooter_div1">
          <h1>Shop Non-Stop on Avira</h1>
          <p style={{ marginTop: "10px" }}>
            Trusted by more than 1 Crore Indians
          </p>
          <p>Cash on Delivery | Free Delivery</p>
          <div className="upperFooter_div1_btn">
            <img
              src="https://images.meesho.com/images/pow/playstore-icon-big.png"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/pow/appstore-icon-big.png"
              alt=""
            />
          </div>
        </div>
        <div className="upperFooter_div2">
          <p>Careers</p>
          <p>Become a supplier</p>
          <p>Hall of Fame</p>
        </div>
        <div className="upperFooter_div3">
          <p>Legal and Policies</p>
          <p>Avira Tech Blog</p>
          <p>Notices and Returns</p>
        </div>
        <div className="upperFooter_div4">
          <h1>Reach out to us</h1>
          <div className="upperFooter_div4_logo_img">
            <img
              src="https://images.meesho.com/images/pow/facebook.png"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/pow/instagram.png"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/pow/youtube.png"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/pow/linkedin.png"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/pow/twitter.png"
              alt=""
            />
          </div>
        </div>
        <div className="upperFooter_div5">
          <h1>Contact Us</h1>
          <p>Fashnear Technologies Private</p>
          <p>Limited,</p>
          <p>CIN: U74900KA2015PTC082263</p>
          <p>06-105-B, 06-102, (138 Wu)</p>
          <p>Vaishnavi Signature, No. 78/9,</p>
          <p>Outer Ring Road, Bellandur,</p>
          <p>Varthur Hobli, Bengaluru-560103,</p>
          <p>Karnataka, India</p>
          <p>E-mail address:</p>
          <p>query@avira.com</p>
          <p>© 2015-2022 Avira.com</p>
        </div>
      </div>
    </>
  );
};

export default UpperFooter;
