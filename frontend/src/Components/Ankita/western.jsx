import React, { useEffect, useState } from "react";
import "./western.css";
import axios from "axios";
import {Menu, Box, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import {RiArrowDropDownLine } from "react-icons/ri"
import {RiArrowDropUpLine } from "react-icons/ri";
import {useDispatch } from "react-redux";
import {CiSearch } from "react-icons/ci";
import {
  getBeverageRequest,
  getBeverageSuccess,
} from "./Redux/western/action";
import UpperNavbar from "../Sudev/WholeNavbar/UpperNavbar/UpperNavbar";
import LowerNavbar from "../Sudev/WholeNavbar/LowerNavbar/LowerNavbar";
import Post from "./datamap";
import Pagination from "./Pagination/pagination";

// ALL IMPORTS ARE ABOVE
//ALL SORTING FUNCTIONALITY ARE HERE API CALL ARE HERE
const sortDataByAsc = () => {
  return axios.get(
    "https://shy-puce-cod-hose.cyclic.app/mens?sort=price"
  );
};

const sortDataByDesc = () => {
  return axios.get(
    "https://shy-puce-cod-hose.cyclic.app/mens?sort=-price"
  );
};

const filterByCategory = (param) => {
  return axios.get(
    `https://shy-puce-cod-hose.cyclic.app/mens?category=${param}`
  );
};
// ALL FUNCTIONALITY ARE API CALL ENDED
const Western = () => {
  const [menu, setMenu] = useState("Relevance");
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState(false);
  const [genders, setGenders] = useState(false);
  const [fabbric, setFabric] = useState(false);
  const [color, setColor] = useState(false);
  const [price, setPrice] = useState(false);
  const [ocassion, setOcassion] = useState(false);
  const [combo, setCombo] = useState(false);
  const [material, setMaterial] = useState(false);
  const [value, setValue] = useState("");
  const [printOrPatternType, setPrintOrPatternType] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);
  const [data, setData] = useState([])
  const dispatch = useDispatch();
  
  // ALL USE STATE
  //ALL SORTING AND FILTERING API FUNCTIONS
  const handleSortByAsc = () => {
    setIsLoading(true);
    dispatch(getBeverageRequest());
    sortDataByAsc().then((res) => {
      setIsLoading(false);
      // console.log(res.data.data.MensWear)
      setData(res.data);
      dispatch(getBeverageSuccess(res.data));
    });
  };

  const handlesortByDesc = () => {
    setIsLoading(true);
    dispatch(getBeverageRequest());
    sortDataByDesc().then((res) => {
      setIsLoading(false);
      dispatch(getBeverageSuccess(res.data));
      setData(res.data);
    });
  };

 //DATA COMMENTED FOR CART PAGE

  // const resetFilters = () => {
  //   handleGetData();
  // };

  //const PostToCart = (item) => {
  // AddToCart(item).then((res) => {
  //   <Alert status="success">
  //     <AlertIcon />
  //     Item Added Successfully to the cart
  //   </Alert>;
  // alert("Item Added Successfully to the cart");
  //     toast({
  //       title: "Verification Reminder",
  //       description: `"Item Added To Cart Successfully."`,
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "top",
  //     });
  //   });
  // };

  // const handleCurrentData = (item) => {
  //   // console.log(item)
  //   CurrentIndivisualData(item).then((res) =>
  //     // console.log(res.data)
  //     navigate("/indivisualPage")
  //   );
  // };


  useEffect(() => {
    loderData();
  }, []);

  // FUNCTION TO GET THE DATA
  const loderData = async () => {
    return await axios
      .get("https://shy-puce-cod-hose.cyclic.app/mens")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }
// FUNCTION TO RESET THE FILTER
  const handleReset = () => {
    loderData()
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios.get(`https://shy-puce-cod-hose.cyclic.app/mens?brand=${value}`)
      .then((res) => {
        setData(res.data)
        setValue("")
      })
      .catch((err) => console.log(err))
  }
  if (data.length == 0) {
    return (
      <div className="productHomePage_product_side_loading">
        <img id="gif"
          src="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
          alt="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
        />
      </div>
    )
  }


  //  pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log(data, "After Sorting");
  const currentPosts = data.data.MensWear.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);



// FILTER BY COLOR
const filterbycolor=async(clr)=>{
 await loderData()
 const store= data.data.MensWear.filter((el)=>{
    return (
      el.color.toLowerCase()== clr
    )

  })
 let temp={data:{MensWear:store}}
 setData(temp)
 console.log(temp.data.MensWear)
}



  return (
    <>
      <div>
        <UpperNavbar />
        <LowerNavbar />
      </div>
      <div className="productHomePage2" >
        <div  className="cover">
          <div className="productHomePage_sidebar_h12" >
            <h1 id="topic">Mens T-shirts</h1>
            <h3 >Showing 1-20 out of 1000 products</h3>
          </div>
          <form style={{
            // margin:"auto",
            padding: "15px",
            Width: "60%",
            alignContent: "center",

          }}
            className="d-flex"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              className="form-content"
              placeholder=" Avira Products..."
              value={value}
              onChange={(e) => setValue(e.target.value)} />
            <Button id="mx-2m" type="submit" >Search</Button>
            <Button id="mx-2" onClick={() => handleReset()}>Reset</Button>

          </form>
        </div>
        {/* part2 */}
        <div className="side_product_divs2">
          <div className="productHomePage_sidebar2" >
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
                        <p style={{ fontSize: "18px" }}>Relevance</p>
                      </MenuItem>
                      <MenuItem onClick={() => setMenu("New Arrivals")}>
                        <p>New Arrivals</p>
                      </MenuItem>
                      <MenuItem onClick={() => setMenu("Price (High to Low)")}>
                        <p
                         onClick={() => {
                          // setList(list.sort((a, b) => b.price - a.price));
                          handlesortByDesc();
                        }}>Price (High to Low)</p>
                      </MenuItem>

                      <MenuItem onClick={() => setMenu("Price (Low to High)")}>
                        <p style={{ textAlign: "center" }}
                          onClick={() => {
                            // setList(list.sort((a, b) => a.price - b.price));
                            handleSortByAsc();
                          }}>Price (Low to High)

                        </p>
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
                    <div className="all_gender"onClick={()=>filterbycolor("blue")}>Blue</div>
                    <div className="all_gender" onClick={()=>filterbycolor("black")}>Black</div>
                    <div className="all_gender" onClick={()=>filterbycolor("white")}>White</div>
                    <div className="all_gender" onClick={()=>filterbycolor("Red")}>Red</div>
                    <div className="all_gender" onClick={()=>filterbycolor("Silver")}>Silver</div>
                    <div className="all_gender"onClick={()=>filterbycolor("Golden")}>Golden</div>
                    <div className="all_gender" onClick={()=>filterbycolor("Maroon")}>Maroon</div>
                    <div className="all_gender"onClick={()=>filterbycolor("Pink")}>Pink</div>
                    <div className="all_gender"onClick={()=>filterbycolor("Yellow")}>Yellow</div>
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

                      <p>Anklets & Toe Rings</p>
                    </div>
                    <div className="check_box_cate">

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

                    </div>

                    <div className="check_box_cate mar-top">

                      <p>Accupressure Rollers</p>
                    </div>
                    <div className="check_box_cate">

                      <p>Accupressure support</p>
                    </div>
                    <div className="check_box_cate">

                      <p>Analog Watches</p>
                    </div>
                    <div className="check_box_cate">

                      <p>Anklets & Toe Rings</p>
                    </div>
                    <div className="check_box_cate">

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
          {/* <div className="productHomePage_product_side">
            {list.length===0? (
              <div className="productHomePage_product_side_loading">
                <img id="gif"
                  src="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
                  alt="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
                />
              </div>
            ) : (
              list &&
              list?.data?.MensWear.map((ele,index) => (
                <div className="products_div">
                  <img src={ele.url} alt="" />
                  <div className="all_details_products">
                    {ele.brand.length > 20 ? (
                      <p className="all_details_products_para">
                        {ele.brand.substr(0, 20) + "..."}
                      </p>
                    ) : (
                      <p className="all_details_products_para">{ele.brand}</p>
                    )}
                    <div className="price_product">
                      <p className="all_details_products_price">
                        $ {ele.price}
                      </p>
                      <p>onwards</p>
                    </div>

                    <div className="free_not_de">
                      <p>Free Delivery</p>
                    </div>

                    <div className="rating_products">
                      <div className="rating_green">
                        <div className="rating_star">
                          {ele.rating}
                          <HiStar className="x" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div> */}

          <Post
            data={currentPosts}
            loading={loading}
            singlepage="productindividual" />

        </div>
        {/* data call */}
        <div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.data.MensWear.length}
            paginate={paginate}
          />
        </div>
      </div>

    </>
  );
};


export default Western