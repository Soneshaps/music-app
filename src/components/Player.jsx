import React, { useEffect, useState } from 'react';
import './Player.css'
import {useDataLayerValue} from './DataLayer'
import {GrPlayFill} from 'react-icons/gr'
import SpotifyWebApi from 'spotify-web-api-js'
import {BiSkipPrevious,BiSkipNext,BiPlay,BiPause} from 'react-icons/bi'

const spotify = new SpotifyWebApi();

const Player = () => {
    
    const [{current_playing_track},dispatch]= useDataLayerValue();
    
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
        <div className="d-flex flex-column ">
                            <div>
                    Playing Now
                </div>
                {(current_playing_track!="")?
                <div>
                    <div className="player-image d-flex justify-content-center mt-4">
                    <img src={current_playing_track?.item?.album?.images[0]?.url} />
                </div>
                <div className="player-name text-center mt-3 overflow-hidden">
                    {current_playing_track?.item?.name}
                </div>
                <div className="player-artist text-center mt-1">
                    {current_playing_track?.item?.artists[0]?.name}
                </div>
                <div className="player-slider">

                </div>
                </div>:''
                }
                <div className="d-flex align-items-center">
                <div className="player-buttons d-flex flex-row justify-content-center pt-4">
                    <div onClick={playerPrevious} className="player-button player-previous pr-2"><BiSkipPrevious/></div>
                    <div onClick={(current_playing_track?.is_playing)?playerPause:playerPlay} className="player-button player-play pr-2">{(current_playing_track?.is_playing)?<BiPause/>:<BiPlay/>}</div>
                    <div onClick={playerNext} className="player-button player-next"><BiSkipNext/></div>
                </div>
                </div>
        </div>

     );
}
 
export default Player;