import React from 'react';
import './titleNav.css';

const TitleNav = () => {
    let titleNav = ["MUSIC" , "PODCAST", "LIVE"]
    return ( 
        <div className="d-flex flex-row">
            {titleNav.map((nav,index)=>
                <div key={index} className={`nav-item mr-5 d-flex align-items-center ${nav}`}>
                    {nav}
                </div>
            )}
        </div>
     );
}
 
export default TitleNav;

