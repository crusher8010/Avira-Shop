import { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import { Heading } from '@chakra-ui/react';

function PurchaseHistory() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('https://nem111-backend-data-2.onrender.com/cart', {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(res => setData(res.data.Details))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <>
            <AdminNavbar />
            <Heading mt={5} mb={2} ml={6} color={"#cc2293"}>Purchase History Of This Month</Heading>
            <div className="purchaseContainer">
                {data.map((item) => {
                    return (
                        <div className="purchaseBox">
                            <h1><b style={{ color: "#cc2293" }}>Object Id:</b> {item.userId}</h1>
                            <h2><b style={{ color: "#cc2293" }}>Customer Name:</b> {item.name}</h2>
                            <h2><b style={{ color: "#cc2293" }}>Mobile Number:</b> {item.mobile}</h2>
                            <h2><b style={{ color: "#cc2293" }}>Total Purchase:</b> {item.totalPurchase}</h2>
                            <h2><b style={{ color: "#cc2293" }}>Address:</b> {item.address}</h2>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PurchaseHistory;