import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Manoj/Login";
import Signup from "../Components/Manoj/Signup";
import AdminAddProducts from "../Components/Anirudha/AdminAddProducts";
import AdminDashboard from "../Components/Anirudha/AdminDashboard";
import Homepage from "../Components/Sudev/WholeHomepage/Homepage/Homepage";
import PurchaseHistory from '../Components/Anirudha/PurchaseHistory';
import PrivateRoutes from "../Context/Privateroute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/adminDashboard" element={<PrivateRoutes><AdminDashboard /></PrivateRoutes>}></Route>
        <Route path="/adminaddproduct" element={<PrivateRoutes><AdminAddProducts /></PrivateRoutes>}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/purchaseHistory" element={<PrivateRoutes><PurchaseHistory /></PrivateRoutes>}></Route>

      </Routes>
    </div>
  );
};

export default AllRoutes;
