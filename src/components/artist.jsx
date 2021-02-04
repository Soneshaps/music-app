import React from 'react';
import './artist.css'
import {useDataLayerValue} from './DataLayer';


const Artist = () => {
    const [{top_artist}]= useDataLayerValue();


    return ( 
        <div className="album-main d-flex flex-column mt-2">
            <div className="content-main d-flex flex-wrap justify-content-around ">
            {top_artist?.items?.map((track,index)=>
                <div key={index} className="artist-main-wrapper d-flex flex-column align-items-center">
                    <div className="artist-main-image d-flex justify-content-center mt-4">
                        <img alt={index} src={track?.images[0]?.url}/>
                    </div>    
                    <div className="artist-main-name d-flex mt-3 text-center">
                        {track?.name}
                    </div>    
                </div>   
            )}
            </div>
              

       
        </div>
     );
}
 
export default Artist;