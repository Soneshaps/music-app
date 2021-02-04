import React from 'react';
import './miniPlayer.css';
import {useDataLayerValue} from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'
import {BiSkipPrevious,BiSkipNext,BiPlay,BiPause} from 'react-icons/bi'

const spotify = new SpotifyWebApi();


const MiniPlayer = () => {
    const [{current_playing_track}]= useDataLayerValue();
    
    const playerPause=()=>{
        spotify.pause()
    }
    const playerPlay=()=>{
        spotify.play()
    }
    const playerPrevious=()=>{
        spotify.skipToPrevious()
    }
    const playerNext=()=>{
        spotify.skipToNext()
    }
    return ( 
        <div className="miniplayer-wrapper">
            <div className="miniplayer-main d-flex flex-row pl-4 align-items-center">
                <div className="miniplayer-image">
                    <img alt={current_playing_track?.item?.name} src={current_playing_track?.item?.album?.images[0]?.url} />
                </div>
                <div className="miniplayer-detail d-flex flex-column ml-3">
                    <div className="miniplayer-name">
                        {current_playing_track?.item?.name}
                    </div>
                    <div className="miniplayer-artist mt-2">
                        {current_playing_track?.item?.artists[0]?.name}
                    </div>
                </div>
                <div className="miniplayer-buttons d-flex flex-row justify-content-end align-items-center ">
                    <div onClick={playerPrevious} className="miniplayer-button miniplayer-previous pr-2"><BiSkipPrevious/></div>
                    <div onClick={(current_playing_track?.is_playing)?playerPause:playerPlay} className="miniplayer-button miniplayer-play pr-2">{(current_playing_track?.is_playing)?<BiPause/>:<BiPlay/>}</div>
                    <div onClick={playerNext} className="miniplayer-button miniplayer-next"><BiSkipNext/></div>
                </div>
            </div>
        </div>
     );
}
 
export default MiniPlayer;