import React from 'react';
import './track.css'
import {useDataLayerValue} from './DataLayer';



const Track = () => {
    const [{top_track}]= useDataLayerValue();
    console.log(top_track);


    return ( 
        <div className="album-main d-flex  mt-2">
            <div className="d-flex flex-wrap justify-content-around ">
            {top_track?.items?.map((track,index)=>
                <div key={index} className="track-main-wrapper d-flex flex-column align-items-center">
                    <div className="track-main-image d-flex justify-content-center mt-2">
                        <img src={track?.album?.images[0]?.url}/>
                    </div>    
                    <div className="d-flex mt-3 text-center">
                        {track?.name}
                    </div>    
                </div>   
            )}
            </div>

       
        </div>
     );
}
 
export default Track;