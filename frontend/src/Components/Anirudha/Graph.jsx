import React from 'react';
import { useEffect, useState } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "2010",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "2011",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "2012",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "2013",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "2014",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "2015",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "2016",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "2017",
        uv: 1245,
        pv: 4300,
        amt: 200
    },
    {
        name: "2018",
        uv: 1765,
        pv: 3217,
        amt: 1500
    },
    {
        name: "2019",
        uv: 2689,
        pv: 4890,
        amt: 2500
    },
    {
        name: "2020",
        uv: 4800,
        pv: 7600,
        amt: 1200
    },
    {
        name: "2021",
        uv: 3200,
        pv: 8900,
        amt: 3500
    },
    {
        name: "2022",
        uv: 5000,
        pv: 7800,
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
            <h1 className='barchartHeading'>Avira's Sales Chart</h1>
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
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph;