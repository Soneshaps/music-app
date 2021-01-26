export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      
      case "SET_TOP_ARTIST":
        return {
          ...state,
          top_artist : action.top_artist,
        };
      
      case "SET_TOP_GENRES":
        return {
          ...state,
          top_genres : action.top_genres,
        };      
      
      case "SET_RECENT_TRACKS":
        return {
          ...state,
          recent_tracks : action.recent_tracks,
        };  

      case "SET_CURRENT_PLAYING_TRACK":
        return {
          ...state,
          current_playing_track : action.current_playing_track,
        };      
      case "SET_TOP_TRACK":
        return {
          ...state,
          top_track : action.top_track,
        };      
      default:
        return state;
    }
  };
  
  export default reducer;
