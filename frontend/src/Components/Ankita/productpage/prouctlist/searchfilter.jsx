import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
const Searchfilter = ({value,changeInput}) => {
  return (
    <div className='searchBar-filter'>
        <SearchIcon className='searchBar-Icon' style={{color:"lightgray"}}/>
        <input type="text" placeholder='Avira Products...' vlaue={value} onChange={changeInput} />

    </div>
  )
}

export default Searchfilter