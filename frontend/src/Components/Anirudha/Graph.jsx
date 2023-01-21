import React from 'react';
import { useEffect, useState } from "react";
import { Heading } from '@chakra-ui/react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "2010",
        offline_sales: 4000,
        online_sales: 2400,
        amt: 2400
    },
    {
        name: "2011",
        offline_sales: 3000,
        online_sales: 1398,
        amt: 2210
    },
    {
        name: "2012",
        offline_sales: 2000,
        online_sales: 9800,
        amt: 2290
    },
    {
        name: "2013",
        offline_sales: 2780,
        online_sales: 3908,
        amt: 2000
    },
    {
        name: "2014",
        offline_sales: 1890,
        online_sales: 4800,
        amt: 2181
    },
    {
        name: "2015",
        offline_sales: 2390,
        online_sales: 3800,
        amt: 2500
    },
    {
        name: "2016",
        offline_sales: 3490,
        online_sales: 4300,
        amt: 2100
    },
    {
        name: "2017",
        offline_sales: 1245,
        online_sales: 4300,
        amt: 200
    },
    {
        name: "2018",
        offline_sales: 1765,
        online_sales: 3217,
        amt: 1500
    },
    {
        name: "2019",
        offline_sales: 2689,
        online_sales: 4890,
        amt: 2500
    },
    {
        name: "2020",
        offline_sales: 4800,
        online_sales: 7600,
        amt: 1200
    },
    {
        name: "2021",
        offline_sales: 3200,
        online_sales: 8900,
        amt: 3500
    },
    {
        name: "2022",
        offline_sales: 5000,
        online_sales: 7800,
        amt: 3500
    }
];

function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };

        window.addEventListener("resize", handleResize)
    }, []);
    return size;
}

function Graph() {
    const [height, width] = useWindowSize();

    return (
        <div className='graphContainer' >
            <Heading color={"#cc2293"} ml={5} mb={6}>Avira's Sales Chart</Heading>
            <ResponsiveContainer width={"100%"} aspect={width > 801 ? 3 : width > 401 ? 2 : 1.7}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="online_sales" fill="#8884d8" />
                    <Bar dataKey="offline_sales" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph;