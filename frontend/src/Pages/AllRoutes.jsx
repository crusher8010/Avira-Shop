
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Manoj/Login";
import Signup from "../Components/Manoj/Signup";
import AdminAddProducts from "../Components/Anirudha/AdminAddProducts";
import AdminDashboard from "../Components/Anirudha/AdminDashboard";
import Homepage from "../Components/Sudev/WholeHomepage/Homepage/Homepage";

// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Login from '../Components/Manoj/Login'
// import Signup from '../Components/Manoj/Signup'
// import AdminAddProducts from '../Components/Anirudha/AdminAddProducts';
// import AdminDashboard from '../Components/Anirudha/AdminDashboard';
import PurchaseHistory from '../Components/Anirudha/PurchaseHistory';
import { IndividualPage } from "../Components/Ankita/IndividualPage";
import Western from "../Components/Ankita/western";
import Tops from "../Components/Ankita/Tops";
import Watches from "../Components/Ankita/watches";
import Saree from "../Components/Ankita/saree";
import Kids from "../Components/Ankita/kids";
import Topsindividual from "../Components/Ankita/Topsindividual";
import Kidsindividual from "../Components/Ankita/Kidsindividual";
import Sareeindividual from "../Components/Ankita/Sareeindividual";
import WatchesIndividual from "../Components/Ankita/WatchesIndividual";


const AllRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
        <Route path="/adminaddproduct" element={<AdminAddProducts />}></Route>
        <Route path="/" element={<Homepage />}></Route>

        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/adminDashboard' element={<AdminDashboard />}></Route>
        <Route path='/adminaddproduct' element={<AdminAddProducts />}></Route>
        <Route path="/purchaseHistory" element={<PurchaseHistory />}></Route>
        <Route path="/productindividual/" element={<Western />}></Route>
        <Route path="/producttops/" element={<Tops />}></Route>
        <Route path="/productwatches/" element={<Watches />}></Route>
        <Route path="/productsaree/" element={<Saree />}></Route>
        <Route path="/productkids/" element={<Kids />}></Route>
        <Route path="/producttops/:id" element={<Topsindividual/>}></Route>
        <Route path="/productwatches/:id" element={<WatchesIndividual/>}></Route>
        <Route path="/productsaree/:id" element={<Sareeindividual />}></Route>
        <Route path="/productkids/:id" element={<Kidsindividual />}></Route>
        <Route path="/productindividual/:id" element={<IndividualPage />}></Route>





      </Routes>
    </div>
  );
};

export default AllRoutes;
