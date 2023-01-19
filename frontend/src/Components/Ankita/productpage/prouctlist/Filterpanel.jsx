import React from 'react'
import Searchfilter from './searchfilter'
import Checkboxdata from './checkboxd'
import "./prodstyles.css"
const Filterpanel = ({brands,changeChecked}) => {
  return (
    <div>
        <div>
           <Searchfilter/>
            </div>
            <div className='input-group'>
              <p className='label'>Brands</p>
               {brands && brands.map(e=><Checkboxdata key={e.id} brands={brands} changeChecked={changeChecked}/>)}
              {/* brand */}
              {/* color */}
              {/* price */}
              {/* rating */}
            </div>
    </div>
  )
}

export default Filterpanel