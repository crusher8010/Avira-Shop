import axios from 'axios'
import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import "./individual.css"
import {
  Box,
  Image,
  Flex,
  Button,

} from "@chakra-ui/react";

import { CartContext } from "../../Context/CartContext/CartContext";
import { addToCart } from "../../Context/CartContext/action";
import { StarIcon } from "@chakra-ui/icons";
import UpperNavbar from '../Sudev/WholeNavbar/UpperNavbar/UpperNavbar'
import LowerNavbar from '../Sudev/WholeNavbar/LowerNavbar/LowerNavbar'

const itemalreadyexists = (id, cartitem) => {
  if (cartitem.find((item) => item.id === id)) {
    return true;
  } else {
    return false;
  }
};


export const Kidsindividual = () => {
  const [data, setData] = useState([])
  const [filterdata, setfilterdata] = useState({})
  const { state, dispatch } = useContext(CartContext);
  const { id } = useParams()
  const loderData = async () => {
    return await axios
      .get("https://nem111-backend-data-2.onrender.com/kids")
      .then((res) => setData(res.data.data.KidsWear))
      .catch((err) => console.log(err))
  }



  useEffect(() => {

    loderData()
    const store = data.filter((el) => {

      return (
        el["_id"] == id
      )

    }

    )

    setfilterdata(store[0])

  }, [timer])

  let idd = setInterval(() => {
    timer()
  }, 1000)
  function timer() {
    if (typeof (filterdata) == "object") {
      clearInterval(idd)
      return
    }
    //console.log(filterdata,idd)
  }


  // console.log(filterdata, "filter")

  return (
    <Box>
      <UpperNavbar />
      <LowerNavbar />
      <Box className='singlemain'


      >

        <Box className='outborder' >
          <Flex gap={10}>
            <Box className='intborder'>
              {filterdata && <Image id="photo" w={"450px"} h={"400px"} alt='Error' src={filterdata.url} />}
            </Box>
            <Box w={"30%"} >
              <Box border={"1px solid #cfcbca"} w={"97%"} m={"auto"} mt={5} borderRadius={5} h={120}>

                {filterdata && <h1 style={{
                  marginLeft: "2px", textAlign: "left", fontSize: "18px", fontWeight: 600, fontStyle: "normal", color:
                    "rgb(153, 153, 153)",
                  lineHeight: "24px", margin: " 0px", padding: "0px", marginLeft: "2px"
                }}><b>


                    {filterdata.brand}</b></h1>}

                {filterdata && <p style={{
                  textAlign: "left", color: "rgb(51, 51, 51)", fontFamily: "Mier bold",
                  fontSize: "32px", fontWeight: 700, margin: "0px", padding: "0px", marginLeft: "2px"



                }}>
                  ₹ {filterdata.price}</p>}
                {filterdata && <p style={{
                  textAlign: "center", borderRadius: " 20px",
                  width: "10%",
                  backgroundColor: "#038d63", color: "white", marginLeft: "2px"
                }}>{filterdata.rating}
                </p>}
              </Box>
              <Box border={"1px solid #cfcbca"} w={"97%"} m={"auto"} mt={5} borderRadius={5} h={100}>
                <p style={{
                  marginLeft: "2px", textAlign: "left", fontSize: "23px", fontWeight: 700, fontStyle: "normal", color:
                    "black",
                  lineHeight: "24px", margin: " 0px", padding: "0px", marginLeft: "5px"
                }}>Select Size</p>


                <p style={{
                  textAlign: "center", borderRadius: " 30px",
                  width: "25%", height: "25px", marginTop: "15px",
                  backgroundColor: "#f244b8", color: "white", marginLeft: "3px"
                }}>Free Size</p>
              </Box>
              <Box border={"1px solid #cfcbca"} w={"97%"} m={"auto"} mt={5} borderRadius={5} >
                <p style={{
                  marginLeft: "2px", textAlign: "left", fontSize: "23px", fontWeight: 700, fontStyle: "normal", color:
                    "black",
                  lineHeight: "24px", margin: " 0px", padding: "0px", marginLeft: "6px", marginTop: "5px"
                }}>
                  Product Details
                </p>


                {filterdata && <h3 style={{
                  marginLeft: "2px", textAlign: "left", fontSize: "18px", fontWeight: 600, fontStyle: "normal", color:
                    "grey",
                  lineHeight: "24px", margin: " 0px", padding: "0px", marginLeft: "2px", marginTop: "5px", marginLeft: "6px"
                }}>   Name:


                  {filterdata.brand}</h3>}

                {filterdata && <h3 style={{
                  marginLeft: "2px", textAlign: "left", fontSize: "18px", fontWeight: 600, fontStyle: "normal", color:
                    "grey",
                  lineHeight: "24px", margin: " 0px", padding: "0px", marginLeft: "5px", marginTop: "5px", marginLeft: "6px"
                }}>  color:


                  {filterdata.color}</h3>}
                <h3 style={{
                  marginLeft: "2px", textAlign: "left", fontSize: "18px", fontWeight: 600, fontStyle: "normal", color:
                    "grey",
                  lineHeight: "24px", margin: " 0px", padding: "0px", marginLeft: "5px", marginTop: "5px", marginLeft: "6px"
                }}>  Size:Free Size
                </h3>
                <h3 style={{
                  marginLeft: "2px", textAlign: "left", fontSize: "18px", fontWeight: 600, fontStyle: "normal", color:
                    "grey",
                  lineHeight: "24px", margin: " 0px", padding: "0px", marginLeft: "5px", marginTop: "5px", marginLeft: "6px"
                }}>  Net Quantity (N) : 1
                </h3>
                <h3 style={{
                  marginLeft: "2px", textAlign: "left", fontSize: "18px", fontWeight: 600, fontStyle: "normal", color:
                    "grey",
                  lineHeight: "24px", margin: " 0px", padding: "0px", marginLeft: "5px", marginTop: "5px", marginLeft: "6px"
                }}>

                  Country of Origin : India
                </h3>
                <h3 style={{
                  marginLeft: "2px", textAlign: "left", fontSize: "18px", fontWeight: 600, fontStyle: "normal", color:
                    "grey",
                  lineHeight: "24px", margin: " 0px", padding: "0px", marginLeft: "5px", marginTop: "5px", marginLeft: "6px"
                }}>  More Information
                </h3>

              </Box>
            </Box>

          </Flex>
          <button style={{ width: "450px", backgroundColor: "#f244b8", height: "40px", color: "white", marginLeft: "190px", borderRadius: "5px", fontSize: "18px" }} disabled={itemalreadyexists(filterdata && filterdata._id, state)}
            onClick={() => dispatch(addToCart(filterdata))}>ADD TO CART</button>
        </Box>
      </Box>
    </Box>
  )
}
export default Kidsindividual