import React from "react";
import "./UpperNavbar.css";
import logo from "..//..//..//..//assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
} from "@chakra-ui/react";

const UpperNavbar = () => {
  return (
    <>
      <div className="upper_nav_bar">
        <div className="upper_nav_bar_left">
          {/* Logo */}
          <div className="upper_nav_bar_left_logo">
            <img src={logo} alt="" className="upper_nav_bar_left_logo_img" />
          </div>
          {/* Search Bar */}
          <div className="upper_nav_bar_left_serch_bar">
            <BsSearch size={20} color={"gray"} className="icon-react-search" />
            <input
              type="text"
              name=""
              id=""
              className="upper_nav_bar_left_serch_bar_inp"
              placeholder="Try Saree,Kurti or Search by Product Code"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="upper_nav_bar_right">
          <div className="upper_nav_bar_right_download_app">
            <MdPhoneAndroid />
            <Menu isLazy>
              <MenuButton>
                <h3 className="nav-bar-h3-tag">Download App</h3>
              </MenuButton>
              <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuOptionGroup>
                  <h1 className="nav-bar-h1-tag">Download From</h1>
                </MenuOptionGroup>
                <MenuItem>
                  <img
                    src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
                    alt=""
                    className="upper_nav_bar_right_download_app_img"
                  />
                </MenuItem>
                <MenuItem>
                  <img
                    src="https://images.meesho.com/images/pow/appstore-icon-big.webp"
                    alt=""
                    className="upper_nav_bar_right_download_app_img"
                  />
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="nav_bar_ver_bar"></div>
          <div className="upper_nav_bar_right_suplier">
            <h3 className="nav-bar-h3-tag">Become a Supplier</h3>
          </div>
          <div className="nav_bar_ver_bar"></div>
          <div className="upper_nav_bar_right_prof">
            <Menu isLazy>
              <MenuButton>
                <CgProfile className="upper_nav_bar_right_prof_icon" />
                <h3 className="nav-bar-h3-tag">Profile</h3>
              </MenuButton>
              <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuOptionGroup>
                  <p className="upper_nav_bar_right_big_para">Hello Users</p>
                </MenuOptionGroup>
                <MenuOptionGroup>
                  <p className="upper_nav_bar_right_small_para">
                    Access To your Avira Account
                  </p>
                </MenuOptionGroup>
                <MenuOptionGroup>
                  <button className="upper_nav_bar_right_btn">Sign Up</button>
                </MenuOptionGroup>
                <hr className="nav_bar_hr" />

                <MenuOptionGroup>
                  <div className="nav_bar_my_order">
                    <BsBagCheck />
                    <h3 className="nav_bar_my_order_h3">My Orders</h3>
                  </div>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </div>
          <div className="nav_bar_ver_bar"></div>
          <div className="upper_nav_bar_right_cart">
            <AiOutlineShoppingCart />
            <h3 className="nav-bar-h3-tag">Cart</h3>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default UpperNavbar;

// upper-nav-bar
