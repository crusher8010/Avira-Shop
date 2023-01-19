import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Manoj/Login'
import Signup from '../Components/Manoj/Signup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<Signup/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes