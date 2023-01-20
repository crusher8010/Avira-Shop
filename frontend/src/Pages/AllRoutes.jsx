import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Manoj/Login";
import Signup from "../Components/Manoj/Signup";
import AdminAddProducts from "../Components/Anirudha/AdminAddProducts";
import AdminDashboard from "../Components/Anirudha/AdminDashboard";
import Homepage from "../Components/Sudev/WholeHomepage/Homepage/Homepage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
        <Route path="/adminaddproduct" element={<AdminAddProducts />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
