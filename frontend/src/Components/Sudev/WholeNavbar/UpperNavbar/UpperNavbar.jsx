import React, { useEffect, useState } from "react";
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
  const [click, setClick] = useState(false);
  const [products, setProducts] = useState("");

  // const [change, setChange] = useState("");
  const [searchData, setSearchData] = useState("");

  const DataFectch = (chang) => {
    useEffect(() => {
      fetch("https://shy-puce-cod-hose.cyclic.app/mens")
        .then((res) => res.json())
        .then((res) => {
          console.log("nmbm", res.data.MensWear);
          setProducts(res.data.MensWear);
        })
        .catch((err) => console.log(err));
    }, []);
  };

  DataFectch();

  const GetData = (change) => {
    let changes = "";
    for (let i = 0; i < change.length; i++) {
      if (i === 0) {
        changes += change[i].toUpperCase();
      } else {
        changes += change[i];
      }
    }

    console.log("change", changes);
    const data = products.filter((ele) => ele.color.includes(changes));
    setSearchData(data);
    console.log("searchData", data);
  };

  const HandleChange = (event) => {
    GetData(event.target.value);
  };
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
              onClick={() => setClick(!click)}
              onChange={HandleChange}
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

      <hr />
      {click && (
        <div className="search_item_nav_bar">
          <div className="search_item_nav_bar_item">
            <div className="search_item_nav_bar_item_div">
              <p className="popular_searches">Popular Searches</p>
              <div className="search_item_nav_bar_item_div_1">
                <div className="search_item_nav_bar_item_div_1s">Saree</div>
                <div className="search_item_nav_bar_item_div_1s">Shoes</div>
                <div className="search_item_nav_bar_item_div_1s">
                  Samrt Watch
                </div>
                <div className="search_item_nav_bar_item_div_1s">Kurti</div>
                <div className="search_item_nav_bar_item_div_1s">Watch</div>
                <div className="search_item_nav_bar_item_div_1s">tShirt</div>
                <div className="search_item_nav_bar_item_div_1s">
                  Top Of Women
                </div>
                <div className="search_item_nav_bar_item_div_1s">Jacket</div>
                <div className="search_item_nav_bar_item_div_1s">Lehenga</div>
              </div>
              {searchData.length === 0 ? (
                "No searchitem found"
              ) : (
                <div className="search_data_append">
                  {searchData.map((ele) => (
                    <div>
                      <BsSearch color="gray" />
                      <p>{ele.brand.substr(0, 40) + "..."}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpperNavbar;

// upper-nav-bar
