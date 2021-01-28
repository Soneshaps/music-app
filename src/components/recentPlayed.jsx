import React from 'react';
import './recentPlayed.css'
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js'


const spotify = new SpotifyWebApi();

const RecentPlayed = () => {
    const [{recent_tracks}] = useDataLayerValue();

    const playTrack=(id)=>{
        spotify.queue(id).then(()=>{
            spotify.skipToNext()
        })
    }


    return ( 
        <div className="recent-tracks-wrapper d-flex flex-row justify-content-around">
        
        {recent_tracks?.items?.slice(0,6).map((tracks,index)=>
            <div key={index} onClick={()=>playTrack(tracks?.track?.uri)} className="recent-tracks d-flex flex-column justify-content-center">
                <img alt={tracks?.track?.name} src={tracks?.track?.album?.images[0].url}/>
                <div className="recent-track-name d-flex text-center align-items-center justify-content-center">{tracks?.track?.name}</div>
            </div>    
        )}
    </div>
     );
}
 
export default RecentPlayed;