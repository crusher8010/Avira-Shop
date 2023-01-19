import React, { useEffect, useState } from "react";
import "./ProductHomePage.css";
import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { HiStar } from "react-icons/hi";

const ProductHomePage = () => {
  const [menu, setMenu] = useState("Relevance");
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://shy-puce-cod-hose.cyclic.app/mens")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.MensWear);
        // console.log(res.data.MensWear.brand.lenght);
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
                    <MenuList maxHeight={"120px"} overflow="scroll">
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
            <div className="product_filter_by"></div>
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
