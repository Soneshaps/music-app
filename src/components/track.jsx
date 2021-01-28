import React from 'react';
import './track.css'
import {useDataLayerValue} from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();


const Track = () => {
    const [{top_track}]= useDataLayerValue();

    const trackPlay=(id)=>{
        spotify.queue(id).then(()=>{
            spotify.skipToNext()
        })
      }

    return ( 
        <div className="album-main d-flex  mt-2">
            <div className="content-main d-flex flex-wrap justify-content-around ">
            {top_track?.items?.map((track,index)=>
                <div key={index} className="track-main-wrapper d-flex flex-column align-items-center">
                    <div className="track-main-image d-flex justify-content-center mt-4">
                        <img alt={index} src={track?.album?.images[0]?.url}/>
                    </div>    
                    <div onClick={()=>trackPlay(track?.uri)} className="track-main-name d-flex mt-3 text-center">
                        {track?.name}
                    </div>    
                    <div className="recent-main-artist-name d-flex mt-1 text-center">
                        {track?.artists[0]?.name}
                    </div>    
                </div>   
            )}
            </div>

       
        </div>
     );
}
 
export default Track;