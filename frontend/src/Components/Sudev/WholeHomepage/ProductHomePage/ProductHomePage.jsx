import React, { useEffect, useState } from "react";
import "./ProductHomePage.css";
import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { HiStar } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";

const ProductHomePage = () => {
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

  const windowWidth = useRef(window.innerWidth);

  console.log("width: ", windowWidth.current);

  useEffect(() => {
    setLoading(true);
    fetch("https://shy-puce-cod-hose.cyclic.app/mens")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.MensWear);
        setProducts(res.data.MensWear);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="productHomePage">
        <div className="productHomePage_sidebar_h1">
          <h1>Products For You</h1>
        </div>
        <div className="side_product_divs">
          <div className="productHomePage_sidebar">
            <div className="product_Sort_by" onClick={() => setShow(!show)}>
              <Box w={"100%"}>
                <Menu isOpen={show}>
                  <div className="alliswell">
                    <div className="menu_btn">
                      <MenuButton>
                        <p className="sort_by_product">
                          <span>Sorted By:</span> {menu}
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
                        <p>Relevance</p>
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
          <div className="productHomePage_product_side">
            {loading === true ? (
              <div className="productHomePage_product_side_loading">
                <img
                  src="https://cdn.svgator.com/images/2022/07/cute-animated-cat-tutorial.gif"
                  alt=""
                />
              </div>
            ) : (
              products &&
              products.map((ele) => (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHomePage;
