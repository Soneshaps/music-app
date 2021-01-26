import React from 'react';
import './titleAccount.css'
import {FaUserAlt} from 'react-icons/fa'
import { useDataLayerValue } from "./DataLayer";

const TitleAccount = () => {
    const [{ user }, dispatch] = useDataLayerValue();

    const logout=()=>{
        dispatch({
            type: "SET_TOKEN",
            token: null,
        })
    }

    return ( 
        <div className ="title-account d-flex flex-row">
            <div className="account-img d-flex justify-content-center align-items-center">
            <img src={user?.images[0]?.url} alt={user?.display_name} />
            </div>
            <div className="account-name d-flex pl-2 align-items-center">
                {user?.display_name} <span onClick={logout}> Logout</span>
            </div>
        </div>
     );
}
 
export default TitleAccount;