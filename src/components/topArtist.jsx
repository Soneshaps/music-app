import React from 'react';
import {useDataLayerValue} from './DataLayer'
import './topArtist.css'
const TopArtist = () => {
    const [{top_artist}] = useDataLayerValue();
    return ( 
        <div className="d-flex flex-row justify-content-around">
           
            {top_artist?.items?.slice(0,5).map((items,index)=>
             <div key={index} className="top-artist-wrapper">
                 <div className="top-artist-image d-flex justify-content-center">
                     <img alt={items?.name} src={items?.images[0]?.url}/>
                 </div>
                 <div className="artist-name d-flex justify-content-center text-center mt-2">
                     {items?.name}
                 </div>
                 <div className="artist-plays text-center mt-1 pb-2">
                     {(items?.followers?.total>1000000)?
                     Math.floor((items?.followers?.total/1000000))+'M': Math.floor((items?.followers?.total/1000))+'K'} Follow
                 </div>
             </div>

            )}
            
        </div>
     );
}
 
export default TopArtist;