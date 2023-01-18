import React, { useState } from "react";
import "./LowerFooter.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const LowerFooter = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="lowerFooter">
        <div className="lowerFooter_arrow" onClick={() => setShow(!show)}>
          <div className="lowerFooter_arrow_up_down">
            <div className="lowerFooter_arrow_para">
              <p>More About Avira</p>
            </div>
            <div className="lowerFooter_arrow_para_arrow">
              {show ? (
                <RiArrowDropUpLine fontSize={25} />
              ) : (
                <RiArrowDropDownLine fontSize={25} />
              )}
            </div>
          </div>
        </div>
        <div className="lowerfooter_show">
          {show ? (
            <>
              <hr className="lowerfooter_hr" />
              <h1 className="lowerfooter_h1">Online Shopping</h1>
              <div className="lowerfootershow_divs">
                <h1>Home & Living</h1>
                <div className="lowerfootershow_divs_paras">
                  <p>Curtains & Sheers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Round Cushions</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Sofa Covers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Cotton Bedsheets</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Bedding Sets</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Pillow Covers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Decorative Items</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Duvet Covers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Blankets</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Home Temple</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Yoga</p>
                </div>

                <div className="lowerfootershow_divs_paras_1 margin_top">
                  <p>mats</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Bean Bags</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Single Bed Sheet</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Cushions</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Face Towels</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Cotton Towel</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Trays</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Coasters</p>
                </div>

                <h1>Men Ethnicwear</h1>
                <div className="lowerfootershow_divs_paras_1 margin_top">
                  <p>Men Dhoti Kurtas</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Men Indo Western Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Men Velvet Sherwanis</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Men Dhotis</p>
                </div>

                <h1>Women Western Wear</h1>
                <div className="lowerfootershow_divs_paras">
                  <p>Women Frocks</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Pencil Skirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Trousers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Flared Jeans</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Sweatshirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Shrugs</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Capris</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Jacket Dresses</p>
                </div>

                <div className="lowerfootershow_divs_paras margin_top">
                  <p>Women Frocks</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Pencil Skirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Trousers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Flared Jeans</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Sweatshirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Shrugs</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Capris</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Jacket Dresses</p>
                </div>

                <div className="lowerfootershow_divs_paras margin_top">
                  <p>Women Frocks</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Pencil Skirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Trousers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Flared Jeans</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Sweatshirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Shrugs</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Capris</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Jacket Dresses</p>
                </div>

                <div className="lowerfootershow_divs_paras_1 margin_top">
                  <p>Women Frocks</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                </div>

                <h1>Women Ethnicwear</h1>
                <div className="lowerfootershow_divs_paras">
                  <p>Women Frocks</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Pencil Skirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Trousers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Flared Jeans</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Sweatshirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Shrugs</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Capris</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Jacket Dresses</p>
                </div>

                <div className="lowerfootershow_divs_paras margin_top">
                  <p>Women Frocks</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Pencil Skirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Trousers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Flared Jeans</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Sweatshirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Shrugs</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Capris</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Jacket Dresses</p>
                </div>

                <div className="lowerfootershow_divs_paras_1 margin_top">
                  <p>Women Frocks</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                </div>

                <h1>Women Footwear</h1>
                <div className="lowerfootershow_divs_paras_2 margin_top">
                  <p>Women Slippers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Bellies</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Juttis & Mojaris</p>
                </div>

                <h1>Women Accessories</h1>
                <div className="lowerfootershow_divs_paras margin_top">
                  <p>Women Frocks</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Pencil Skirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Trousers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Flared Jeans</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Sweatshirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Shrugs</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Capris</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Jacket Dresses</p>
                </div>

                <div className="lowerfootershow_divs_paras margin_top">
                  <p>Women Frocks</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Pencil Skirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Trousers</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Flared Jeans</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Women Sweatshirts</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Shrugs</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Capris</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Jacket Dresses</p>
                </div>

                <div className="lowerfootershow_divs_paras_1 margin_top">
                  <p>Women Frocks</p>

                  <p>Long Tops Women</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Tshirt Dresses</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Designer Gown</p>
                </div>

                <h1>Electronics & Accessories</h1>
                <div className="lowerfootershow_divs_paras margin_top">
                  <p>Android Smart Watches</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>On Ear Headphones</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Bluetooth Speakers </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Bluetooth Earphones </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Sport Headphones </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>CCTV Cameras </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Spy Cameras</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Keyboard</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Laptop Bags</p>
                  <div className="lowerfootershow_divs_bars"></div>
                </div>

                <div className="lowerfootershow_divs_paras margin_top">
                  <p>Android Smart Watches</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>On Ear Headphones</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Bluetooth Speakers </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Bluetooth Earphones </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Sport Headphones </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>CCTV Cameras </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Spy Cameras</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Keyboard</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Laptop Bags</p>
                  <div className="lowerfootershow_divs_bars"></div>
                </div>
                <div className="lowerfootershow_divs_paras margin_top">
                  <p>Android Smart Watches</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>On Ear Headphones</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Bluetooth Speakers </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Bluetooth Earphones </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Sport Headphones </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>CCTV Cameras </p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Spy Cameras</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Keyboard</p>
                  <div className="lowerfootershow_divs_bars"></div>
                  <p>Laptop Bags</p>
                  <div className="lowerfootershow_divs_bars"></div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default LowerFooter;
