import React from 'react';
import './playlist.css'
import {useDataLayerValue} from './DataLayer';
import {AiFillFolderAdd} from 'react-icons/ai'



const Artist = () => {
    const [{playlists}]= useDataLayerValue();


    return ( 
        <div className="album-main d-flex flex-column mt-2">
            <div className="content-main d-flex flex-wrap justify-content-start ">
            <div className="playlist-main-wrapper d-flex  justify-content-center">
                    <div className="playlist-main-svg d-flex align-items-center justify-content-center">
                        <AiFillFolderAdd/>
                    </div>    
                </div>
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
 
export default Artist;