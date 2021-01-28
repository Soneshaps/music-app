import React from 'react';
import TitleNav from './titleNav'
import TitleSearch from './titleSearch'
import TitleAccount from './titleAccount' //Title account is not available at the moment


const TitleBarMain=()=> {
    return(
        <div className="title-bar d-flex flex-row justify-content-between mt-2 ">
            <TitleNav/>
            <TitleSearch/>
            <TitleAccount/>
        </div>
    )
}
export default TitleBarMain;