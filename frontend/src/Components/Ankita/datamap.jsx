import { toCSSVar } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

import "./western.css"
const Post = ({ data, loading, singlepage }) => {

  const navigate = useNavigate()

  console.log(data)
  if (loading) {
    return <h2>LOADING...</h2>
  }
  return (
    <div className="productHomePagelist" >
      {data.length === 0 ? (
        <div className="productHomePage_product_side_loading">
          <img id="gif"
            src="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
            alt="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
          />
        </div>
      ) : (
        data &&
        data.map((ele, index) => (
          <div className="products_div2" onClick={() => navigate(`/${singlepage}/${ele["_id"]}`)}>

            <img src={ele.url} alt="" />
            <div className="all_details_products">
              {ele.brand.length > 20 ? (
                <p className="all_details_products_para">
                  {ele.brand.substr(0, 20) + "..."}
                </p>
              ) : (
                <p className="all_details_products_para" >{ele.brand}</p>
              )}
              <div className="price_product">
                <p className="all_details_products_price" >
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
export default Post