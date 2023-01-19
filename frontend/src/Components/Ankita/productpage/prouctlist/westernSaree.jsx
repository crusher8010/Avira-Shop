import React, { useState } from 'react'
import Filterpanel from './Filterpanel'

// import Navbar from '../../Sudev/WholeNavbar/MainNavbar/Navbar'
import "./prodstyles.css"


const WesternSaree = () => {
  const {brands,setBrands}=useState([
   {
    id:1,
    checked:false,
    label:"Akshara Fashionable Sarees",
   },
   {
    id:2,
    checked:false,
    label:"Charvi Attractive Sarees",
   },
   {
    id:3,
    checked:false,
    label:"Abhisarika Graceful Sarees",
   },
   {
    id:4,
    checked:false,
    label:"Aishani Pretty Sarees",
   },
   {
    id:5,
    checked:false,
    label:"Trendy Retro Women Top",
   },
   {
    id:6,
    checked:false,
    label:"Trendy Femine Western",
   },
   {
    id:7,
    checked:false,
    label:"Modern Women Watches",
   },
   {
    id:8,
    checked:false,
    label:"Modern Women Watches",
   }

  ])
const handleChangeChecked=id=>{
  const brandlist=brands;
  const changeCheckedbrands=brandlist.map(items=>items.id===id?{...items,checked:!items.checked}:items
)
setBrands(changeCheckedbrands)
}

  return (
    <div className='product_page'>
        <div style={{height:"120px",border:"1px solid pink",background:"pink"}}>
        {/* searchbar */}

        </div>
        <div className='product_panelist-wrap'>
          <div className='product-filter'>
            <Filterpanel
           brands={brands}
           changeChecked={handleChangeChecked} />
           
        </div>
        <div className='product_list-wrap'>
          <h1>data</h1>
        </div>
        </div>
    </div>
  )
}

export default WesternSaree