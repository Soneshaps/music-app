import React, {  useEffect } from 'react';
import "./App.css";
import Login from "./components/login";
import { getTokenFromUrl } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from './components/DataLayer'
import Main from './components/main'

const spotify = new SpotifyWebApi();


function App() {
 
  const [{  token  }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      
      spotify.getMyTopArtists().then((artists) => {
        dispatch({
          type: "SET_TOP_ARTIST",
          top_artist : artists,
        });
      });

       
      
      spotify.getMyRecentlyPlayedTracks().then((tracks)=>{
        dispatch({
          type:"SET_RECENT_TRACKS",
          recent_tracks:tracks,
        });
      });

      spotify.setAccessToken(_token);

      
      const interval = setInterval(() => {
        spotify.getMyCurrentPlayingTrack().then((track)=>{
        dispatch({
          type:"SET_CURRENT_PLAYING_TRACK",
          current_playing_track : track,
        });
      });
      spotify.getMyTopTracks().then((track)=>{
        dispatch({
          type:"SET_TOP_TRACK",
          top_track:track,
        });
      });
     

        
      }, 1000);
      return () => clearInterval(interval);

      
    }
  },[dispatch]);

  return (
    <div className="app">
            {token ? <Main spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;