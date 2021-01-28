import React from 'react';
import './topGenres.css';
import {useDataLayerValue} from './DataLayer';


const TopGenres = () => {
    const [{top_genres}] = useDataLayerValue();
    return ( 
        <div className="d-flex flex-wrap pt-2 justify-content-around">
            {top_genres?.genres?.slice(0,3).map((genre,index)=>
                <div key={index} className="genres pl-2 mb-1 d-flex justify-content-center align-items-center">
                    {genre}
                </div>    
            )}
        </div>
     );
}
 
export default TopGenres;