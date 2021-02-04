import React from 'react';
import './titleSearch.css'
import {FaSearch} from 'react-icons/fa'
const TitleSearch = () => {
    return ( 
        <div className="title-search p-1 d-flex">
            <span className="pl-1 d-flex align-items-center"><FaSearch/></span>
            <input type="text" name="search" className="pl-2" placeholder="Type here to search"/>

        </div>
     );
}
 
export default TitleSearch;