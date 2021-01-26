import React from 'react';
import './recentPlayed.css'
import { useDataLayerValue } from './DataLayer';

const RecentPlayed = () => {
    const [{recent_tracks},dispatch] = useDataLayerValue();
    return ( 
        <div className="recent-tracks-wrapper d-flex flex-row justify-content-around">
        
        {recent_tracks?.items?.slice(0,6).map((tracks,index)=>
            <div key={index} className="recent-tracks d-flex flex-column justify-content-center">
                <img src={tracks?.track?.album?.images[0].url}/>
                <div className="recent-track-name d-flex align-items-center justify-content-center">{tracks?.track?.name}</div>
            </div>    
        )}
    </div>
     );
}
 
export default RecentPlayed;