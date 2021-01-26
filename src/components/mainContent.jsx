import React from 'react';
import './mainContent.css'
import TopArtist from './topArtist';
import TopGenres from "./topGenres";
import TopTrack from "./topTrack";
import Player from "./Player";

import RecentPlayed from './recentPlayed'
const MainContent = () => {
    
    return ( 
    <div className="main-content d-flex flex-column mt-2">
        <div className="top-main-content mb-3">
            <div className="recent-played-title pt-2 pl-4 mb-3">Recently Played</div>
            <RecentPlayed/>
        </div>
        <div className="d-flex flex-row">
            <div className="main-content">
                <div className="main-top-artist p-2">
                <div className="pl-3">Top Artist</div>
                        <TopArtist/>
                </div>
                <div className="main-top d-flex flex-row mt-3 ">
                    <div className="main-top-charts pl-3">
                        <div className="pl-2 pt-2">Top Tracks</div>
                        <TopTrack/>
                    </div>
                </div>
            </div>
                <div className="main-music-player d-flex flex-column ml-3 p-3">
                <Player/>
                </div>
        </div>
        </div>
     );
}
 
export default MainContent;