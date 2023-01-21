import { HiStar } from "react-icons/hi"
import "./western.css"
const Posts=({list,loading})=>{
return(
<div className="productHomePage_product_side">
            {loading === true ? (
              <div className="productHomePage_product_side_loading">
                <img
                  src="https://img.pikbest.com/png-images/20191028/push-shopping-cart-to-woman-gif_2515298.png!bw700"
                  alt=""
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
          </div>
)
}
export default Posts