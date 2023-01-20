import { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar"
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading } from '@chakra-ui/react'

function PurchaseHistory() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('https://shy-puce-cod-hose.cyclic.app/cart', {
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
            <div>
                <Heading ml={5} mt={8}>Purchase History Of This Month</Heading>
                <TableContainer mt={8}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>User ID</Th>
                                <Th>Name</Th>
                                <Th>Mobile Number</Th>
                                <Th>Total Purchase</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((item) => {
                                return (
                                    <Tr key={item._id}>
                                        <Td>{item.userId}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.mobile}</Td>
                                        <Td>{item.totalPurchase}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default PurchaseHistory;