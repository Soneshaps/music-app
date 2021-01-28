import React from 'react';
import {useDataLayerValue} from './DataLayer'
import './topArtist.css'
const TopArtist = () => {
    const [{top_artist}] = useDataLayerValue();
    return ( 
        <div className="d-flex flex-row mt-1 justify-content-around">
           
            {top_artist?.items?.slice(0,6).map((items,index)=>
             <div key={index} className="top-artist-wrapper ml-5">
                 <div className="top-artist-image mt-2 d-flex justify-content-center">
                     <img alt={items?.name} src={items?.images[0]?.url}/>
                 </div>
                 <div className="artist-name  mt-1 d-flex align-items-center justify-content-center text-center">
                     {items?.name}
                 </div>
                 <div className="artist-plays text-center mt-1">
                     {Math.floor((items?.followers?.total/1000))}K Follow
                 </div>
             </div>

            )}
            
        </div>
     );
}
 
export default TopArtist;