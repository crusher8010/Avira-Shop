import React from "react";
import "./BannerHomePage.css";
import logo1 from "../../../..//assets/logo1.png";
import logo2 from "../../../..//assets/logo2.png";
import logo3 from "../../../..//assets/logo3.png";
import logo4 from "../../../..//assets/logo4.png";

const BannerHomePage = () => {
  return (
    <>
      <div className="hero_banner_one">
        <div className="hero_banner_one_left">
          <div className="hero_banner_one_left_div">
            <div className="hero_banner_one_left_div_text">
              <h1>Lowest Prices</h1>
              <h1>Best Quality Shopping</h1>
            </div>

            <div className="hero_banner_one_left_div_free_cash_easy">
              <div className="hero_banner_one_left_div_free_cash_easys">
                <div className="hero_banner_one_left_div_free_cash_easys_img">
                  <img
                    src="https://images.meesho.com/images/pow/freeDelivery.svg"
                    alt=""
                  />
                </div>
                <div className="hero_banner_one_left_div_free_cash_easys_text">
                  <p>Free</p>
                  <p>Delivery</p>
                </div>
              </div>

              <div className="hor_var"></div>

              <div className="hero_banner_one_left_div_free_cash_easys">
                <div className="hero_banner_one_left_div_free_cash_easys_img">
                  <img
                    src="https://images.meesho.com/images/pow/cod.svg"
                    alt=""
                  />
                </div>
                <div className="hero_banner_one_left_div_free_cash_easys_text">
                  <p>Cash on</p>
                  <p>Delivery</p>
                </div>
              </div>

              <div className="hor_var"></div>

              <div className="hero_banner_one_left_div_free_cash_easys">
                <div className="hero_banner_one_left_div_free_cash_easys_img">
                  <img
                    src="https://images.meesho.com/images/pow/easyReturns.svg"
                    alt=""
                  />
                </div>
                <div className="hero_banner_one_left_div_free_cash_easys_text">
                  <p>Easy</p>
                  <p>Returns</p>
                </div>
              </div>
            </div>
            <div className="hero_banner_one_left_download">
              <div className="hero_banner_one_left_download_btn">
                <img
                  src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp"
                  alt=""
                />
                <p>Download the Meesho App</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_banner_one_right">
          <img
            src="https://images.meesho.com/images/marketing/1631722939962.webp"
            alt=""
          />
        </div>
      </div>

      <div className="home_middle_text">
        <div className="home_middle_text_one" />

        <p>Top Categories to choose from</p>

        <div className="home_middle_text_one" />
      </div>

      <div className="hero_banner_twos">
        <img src={logo1} alt="" />
      </div>

      <div className="hero_banner_twos">
        <img src={logo2} alt="" />
      </div>

      <div className="hero_banner_twos">
        <img src={logo3} alt="" />
      </div>

      <div className="hero_banner_twos">
        <img src={logo4} alt="" />
      </div>
    </>
  );
};

export default BannerHomePage;
