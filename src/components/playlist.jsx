import React from 'react';
import './playlist.css'
import {useDataLayerValue} from './DataLayer';

const Playlist = () => {
    const [{playlists}]= useDataLayerValue();   



    return (
        <div className="album-main d-flex  flex-column mt-2">

        <div className="content-main d-flex flex-wrap justify-content-start ">
        {playlists?.items?.map((track,index)=>
            <div key={index} className="playlist-main-wrapper d-flex flex-column align-items-center">
                <div className="playlist-main-image d-flex justify-content-center mt-4">
                    <img alt={index} src={track?.images[0]?.url}/>
                </div>    
                <div className="playlist-main-name d-flex mt-3 text-center">
                    {track?.name}
                </div>    
            </div>   
        )}
        </div>
          

   
    </div>
 
      );
}
 
export default Playlist;
