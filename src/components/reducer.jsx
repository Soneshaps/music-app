export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
    add_track: null,
  };
  
  const reducer = (state, action) => {
  
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
      
      case "SET_MY_ALBMUS":
        return {
          ...state,
          my_albums: action.my_albums,
        };  
      
      case "SET_TOP_ARTIST":
        return {
          ...state,
          top_artist : action.top_artist,
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
        
        case "SET_SAVED_TRACK":
        return {
          ...state,
          saved_tracks : action.saved_tracks,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
