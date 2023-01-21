import React, { useEffect, useState } from "react";
import "./western.css";
import axios from "axios";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Spinner, Alert, AlertIcon, useToast, Menu, Box, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Sudev/WholeNavbar/MainNavbar/Navbar";
import { CiSearch } from "react-icons/ci";


import {
  getBeverageError,
  getBeverageRequest,
  getBeverageSuccess,
} from "./Redux/western/action";
import { HiStar } from "react-icons/hi";
import UpperNavbar from "../Sudev/WholeNavbar/UpperNavbar/UpperNavbar";
import LowerNavbar from "../Sudev/WholeNavbar/LowerNavbar/LowerNavbar";
import Pagination from "./Pagination/pagination";
import Posts from "./datamap";

const CurrentIndivisualData = (payload) => {
  return axios.put(
    "https://shy-puce-cod-hose.cyclic.app/mens/indivisualPageData",
    payload
  );
};

const getData = () => {
  return axios.get("https://shy-puce-cod-hose.cyclic.app/mens");
};

const sortDataByAsc = () => {
  return axios.get(
    "https://shy-puce-cod-hose.cyclic.app/mens?_sort=price&_order=asc"
  );
};

const sortDataByDesc = () => {
  return axios.get(
    "https://shy-puce-cod-hose.cyclic.app/mens?_sort=price&_order=desc"
  );
};

const AddToCart = (payload) => {
  return axios.post("https://kiwi-discovered-pyjama.glitch.me/cart", payload);
};

const filterByCategory = (param) => {
  return axios.get(
    `https://shy-puce-cod-hose.cyclic.app/mens?category=${param}`
  );
};

const Western = () => {
    const [menu, setMenu] = useState("Relevance");
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState("");
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState(false);
    const [genders, setGenders] = useState(false);
    const [fabbric, setFabric] = useState(false);
    const [color, setColor] = useState(false);
    const [price, setPrice] = useState(false);
    const [ocassion, setOcassion] = useState(false);
    const [combo, setCombo] = useState(false);
    const [material, setMaterial] = useState(false);
    const [printOrPatternType, setPrintOrPatternType] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


  
  let list = useSelector((store) => store.BeverageReducer.list);
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = useSelector((store) => store.BeverageReducer.isLoading);
  const filterData = useSelector((store) => store.BeverageReducer.filterData);
  // const [filterData, setFilterData] = useState(["Phone", "Watch"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleGetData = () => {
    // setIsLoading(true);
    dispatch(getBeverageRequest());
    getData()
      .then((res) => {
        // setIsLoading(false);
        // setList(res.data);
        dispatch(getBeverageSuccess(res.data));
      })
      .catch((err) => dispatch(getBeverageError()));
  };

  const handleSortByAsc = () => {
    // setIsLoading(true);
    dispatch(getBeverageRequest());
    sortDataByAsc().then((res) => {
      // setIsLoading(false);
      // setList(res.data);
      dispatch(getBeverageSuccess(res.data));
    });
  };

  const handlesortByDesc = () => {
    // setIsLoading(true);
    dispatch(getBeverageRequest());
    sortDataByDesc().then((res) => {
      // setIsLoading(false);
      dispatch(getBeverageSuccess(res.data));
      // setList(res.data);
    });
  };

  const handleFilterData = (item) => {
    dispatch(getBeverageRequest());
    filterByCategory(item).then((res) =>
      dispatch(getBeverageSuccess(res.data))
    );
  };

  const resetFilters = () => {
    handleGetData();
  };

  const PostToCart = (item) => {
    AddToCart(item).then((res) => {
      //   <Alert status="success">
      //     <AlertIcon />
      //     Item Added Successfully to the cart
      //   </Alert>;
      // alert("Item Added Successfully to the cart");
      toast({
        title: "Verification Reminder",
        description: `"Item Added To Cart Successfully."`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    });
  };

  const handleCurrentData = (item) => {
    // console.log(item)
    CurrentIndivisualData(item).then((res) =>
      // console.log(res.data)
      navigate("/indivisualPage")
    );
  };
  useEffect(() => {
    handleGetData();
  }, []);
  // console.log("filter", filterCategory);
 // Get current posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 
//  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
//  list=currentPosts

 // Change page
 const paginate = pageNumber => setCurrentPage(pageNumber);

  
  return (
    <>
    <div>
    <UpperNavbar/>
      <LowerNavbar/>
    </div>
      <div className="productHomePage" style={{width:"92%"}}>
        <div className="productHomePage_sidebar_h1">
          <h1 id="topic">Mens T-shirts</h1>
          <h3 style={{fontSize:"18px",color:"rgb(244, 51, 151)"}}>Showing 1-20 out of 1000 products</h3>
        </div>
        <div className="side_product_divs">
          <div className="productHomePage_sidebar" style={{width:"20%"}}>
            <div className="product_Sort_by" onClick={() => setShow(!show)}>
              <Box w={"100%"}>
                <Menu isOpen={show}>
                  <div className="alliswell">
                    <div className="menu_btn" >
                      <MenuButton>
                        <p className="sort_by_product" >
                          <span >Sorted By:</span> {menu}
                        </p>
                      </MenuButton>
                    </div>
                    <div className="iconinc">
                      {show ? (
                        <RiArrowDropUpLine fontSize={30} />
                      ) : (
                        <RiArrowDropDownLine fontSize={30} />
                      )}
                    </div>
                  </div>
                  {show && (
                    <MenuList maxHeight={"140px"} overflow="scroll">
                      <MenuItem onClick={() => setMenu("Relevance")}>
                        <p style={{fontSize:"18px"}}>Relevance</p>
                      </MenuItem>
                      <MenuItem onClick={() => setMenu("New Arrivals")}>
                        <p>New Arrivals</p>
                      </MenuItem>
                      <MenuItem onClick={() => setMenu("Price (High to Low)")}>
                        <p>Price (High to Low)</p>
                      </MenuItem>

                      <MenuItem onClick={() => setMenu("Price (Low to High)")}>
                        <p>Price (Low to High)</p>
                      </MenuItem>

                      <MenuItem onClick={() => setMenu("Ratings")}>
                        <p>Ratings</p>
                      </MenuItem>

                      <MenuItem onClick={() => setMenu("Discount")}>
                        <p>Discount</p>
                      </MenuItem>
                    </MenuList>
                  )}
                </Menu>
              </Box>
            </div>
            <div className="product_filter_by">
              <div className="filters_product_div_text">
                <p>FILTERS</p>
                <p>1000+ Products</p>
              </div>
              <div className="category_product">
                <div
                  className="category_text_product"
                  onClick={() => setCategory(!category)}
                >
                  <p>Category</p>
                  {category ? (
                    <RiArrowDropUpLine size={25} />
                  ) : (
                    <RiArrowDropDownLine size={25} />
                  )}
                </div>

                {category && (
                  <div className="rest_category_text_product">
                    <div className="input_categ">
                      <CiSearch />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search..."
                      />
                    </div>

                    <div className="check_box_cate mar-top">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure support</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Analog Watches</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Anklets & Toe Rings</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Bangles & Bracelets</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="category_product">
                <div
                  className="category_text_product"
                  onClick={() => setGenders(!genders)}
                >
                  <p>Gender</p>
                  {genders ? (
                    <RiArrowDropUpLine size={25} />
                  ) : (
                    <RiArrowDropDownLine size={25} />
                  )}
                </div>
                {genders && (
                  <div className="category_text_product_gender">
                    <div className="all_gender">
                      <p>Men</p>
                    </div>
                    <div className="all_gender">Women</div>
                    <div className="all_gender">Kids</div>
                    <div className="all_gender">
                      <p>Girls</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Below this */}
              <div className="category_product">
                <div
                  className="category_text_product"
                  onClick={() => setFabric(!fabbric)}
                >
                  <p>Fabbric</p>
                  {fabbric ? (
                    <RiArrowDropUpLine size={25} />
                  ) : (
                    <RiArrowDropDownLine size={25} />
                  )}
                </div>
                {fabbric && (
                  <div className="category_text_product_fabbric">
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Below this */}
              <div className="category_product">
                <div
                  className="category_text_product"
                  onClick={() => setColor(!color)}
                >
                  <p>Color</p>
                  {color ? (
                    <RiArrowDropUpLine size={25} />
                  ) : (
                    <RiArrowDropDownLine size={25} />
                  )}
                </div>
                {color && (
                  <div className="category_text_product_gender">
                    <div className="all_gender">Blue</div>
                    <div className="all_gender">Black</div>
                    <div className="all_gender">White</div>
                    <div className="all_gender">Red</div>
                  </div>
                )}
              </div>
              {/* Below this */}

              <div className="category_product">
                <div
                  className="category_text_product"
                  onClick={() => setPrice(!price)}
                >
                  <p>Price</p>
                  {price ? (
                    <RiArrowDropUpLine size={25} />
                  ) : (
                    <RiArrowDropDownLine size={25} />
                  )}
                </div>
                {price && (
                  <div className="category_text_product_price">
                    <div className="all_price">$ Under 149</div>
                    <div className="all_price">$ Under 199</div>
                    <div className="all_price">$ Under 249</div>
                    <div className="all_price">$ Under 299</div>
                    <div className="all_price">$ Under 349</div>
                  </div>
                )}
              </div>
              {/* Below this */}
              <div className="category_product">
                <div
                  className="category_text_product"
                  onClick={() => setOcassion(!ocassion)}
                >
                  <p>Ocassion</p>
                  {ocassion ? (
                    <RiArrowDropUpLine size={25} />
                  ) : (
                    <RiArrowDropDownLine size={25} />
                  )}
                </div>

                {ocassion && (
                  <div className="rest_category_text_product">
                    <div className="input_categ">
                      <CiSearch />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search..."
                      />
                    </div>

                    <div className="check_box_cate mar-top">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure support</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Analog Watches</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Anklets & Toe Rings</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Bangles & Bracelets</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Bellow This */}
              <div className="category_product">
                <div
                  className="category_text_product"
                  onClick={() => setCombo(!combo)}
                >
                  <p>Combo</p>
                  {combo ? (
                    <RiArrowDropUpLine size={25} />
                  ) : (
                    <RiArrowDropDownLine size={25} />
                  )}
                </div>

                {combo && (
                  <div className="rest_category_text_product">
                    <div className="input_categ">
                      <CiSearch />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search..."
                      />
                    </div>

                    <div className="check_box_cate mar-top">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure support</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Analog Watches</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Anklets & Toe Rings</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Bangles & Bracelets</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Bellow This */}
              <div className="category_product">
                <div
                  className="category_text_product"
                  onClick={() => setMaterial(!material)}
                >
                  <p>Material</p>
                  {material ? (
                    <RiArrowDropUpLine size={25} />
                  ) : (
                    <RiArrowDropDownLine size={25} />
                  )}
                </div>

                {material && (
                  <div className="rest_category_text_product">
                    <div className="input_categ">
                      <CiSearch />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search..."
                      />
                    </div>

                    <div className="check_box_cate mar-top">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure support</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Analog Watches</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Anklets & Toe Rings</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Bangles & Bracelets</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Bellow This */}

              <div className="category_product">
                <div
                  className="category_text_product"
                  onClick={() => setPrintOrPatternType(!printOrPatternType)}
                >
                  <p>Print Or Pattern Type</p>
                  {printOrPatternType ? (
                    <RiArrowDropUpLine size={25} />
                  ) : (
                    <RiArrowDropDownLine size={25} />
                  )}
                </div>

                {printOrPatternType && (
                  <div className="rest_category_text_product">
                    <div className="input_categ">
                      <CiSearch />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search..."
                      />
                    </div>

                    <div className="check_box_cate mar-top">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Accupressure support</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Analog Watches</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Anklets & Toe Rings</p>
                    </div>
                    <div className="check_box_cate">
                      <input type="checkbox" name="" id="" />
                      <p>Bangles & Bracelets</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div> 
          {/* sidebar */}
           {/* <Posts list={currentPosts} loading={loading}/> */}
           <Pagination
        postsPerPage={postsPerPage}
        totalPosts={list.length}
        paginate={paginate}
      />
        </div>
      </div>
    </>
  );
};
   
  
     export default Western