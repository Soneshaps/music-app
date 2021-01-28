import React from 'react';
import './recent.css'
import {useDataLayerValue} from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();



const Recent = () => {
    const [{recent_tracks}]= useDataLayerValue();

    
    const trackPlay=(id)=>{
        spotify.queue(id).then(()=>{
            spotify.skipToNext()
        })
      }
    return ( 
        <div className="album-main d-flex  mt-2">
            <div className="content-main d-flex flex-wrap justify-content-around ">
            {recent_tracks?.items?.map((track,index)=>
                <div key={index} className="recent-main-wrapper d-flex flex-column align-items-center">
                    <div className="recent-main-image d-flex justify-content-center mt-4">
                        <img alt={index} src={track?.track?.album?.images[0]?.url}/>
                    </div>    
                    <div onClick={()=>trackPlay(track?.track?.uri)} className="recent-main-name d-flex mt-3 text-center">
                        {track?.track?.name}
                    </div>  
                    <div className="recent-main-artist-name d-flex mt-1 text-center">
                        {track?.track?.artists[0]?.name}
                    </div>    
                </div>   
            )}
            </div>

       
        </div>
     );
}
 
export default Recent;