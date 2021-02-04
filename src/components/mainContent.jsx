import React from 'react';
import './mainContent.css'
import TopArtist from './topArtist';
import TopTrack from "./topTrack";
import Player from "./Player";
import RecentPlayed from './recentPlayed'
const MainContent = () => {
    const windowWidth = window.innerWidth;
    return ( 
    <div className="main-content d-flex flex-column mt-2">
        <div className="top-main-content mb-3">
            <div className="main-content-title pt-2 pl-4 mb-3">Recently Played</div>
            <RecentPlayed/>
        </div>
        <div className="bottom-main-content d-flex flex-row">
            <div className="main-content d-flex flex-column ">
                <div className="main-top-artist">
                <div className="main-content-title pt-2 pl-4 mb-3">Top Artist</div>
                        <TopArtist/>
                </div>
                <div className="main-top-track d-flex flex-row mt-3">
                    <div className="main-top-charts">
                        <div className="main-content-title pt-2 pl-4 mb-3">Top Tracks</div>
                        <TopTrack/>
                    </div>
                </div>
            </div>
          
           {(windowWidth>1000? 
           <div className="main-music-player d-flex flex-column ml-3">
            <Player/>
            </div>:''
            )}
        </div>
    </div>
     );
}
 
export default MainContent;