import React from 'react';
import {RiPlayMiniFill} from 'react-icons/ri';
import {HiFolderAdd} from 'react-icons/hi';
import {FiBarChart2} from 'react-icons/fi'
import './topTrack.css'
import {useDataLayerValue} from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js'


const spotify = new SpotifyWebApi();

const TopTrack = () => {
    const [{top_track,current_playing_track}] = useDataLayerValue();
    

    
 const millisToMinutesAndSeconds=(millis)=> {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  const trackPlay=(id)=>{
    spotify.queue(id).then(()=>{
        spotify.skipToNext()
    })
  }

  


    return ( 
        <div className="top-track d-flex flex-column pb-3">
            {top_track?.items?.slice(0,9).map((track,index)=>
            <div key={index} className="d-flex flex-row justify-content-around align-items-center pb-1 ">
                    <div className="track-count d-flex align-items-center">
                0{index+1}
            </div>
            <div className="track-image">
                <img alt={track?.name} src={track?.album?.images[0]?.url}/>
            </div>
            <div className="track-detail d-flex flex-column align-items-center">
                <div className="track-name ">
                    {track?.name}
                </div>
                <div className="track-artist">
                    {track?.artists[0]?.name}
                </div>
            </div>
            <div className="track-time d-flex align-items-center">
                {millisToMinutesAndSeconds(track?.duration_ms)}
            </div>
            <div className="track-play d-flex align-items-center">
                {(current_playing_track?.item?.id===track?.id)?<FiBarChart2/>:<RiPlayMiniFill onClick={()=>trackPlay(track?.uri)}/>}
                   
            </div>
            <div className="track-add d-flex align-items-center ">
                <HiFolderAdd/>
            </div>
                </div>    
            )}
        </div>
     );
}
 
export default TopTrack;