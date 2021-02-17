import React from 'react';
import './addPlaylist.css'
const AddPlaylist = () => {
    return ( 
        <div className="add-playlist-wrapper justify-content-center d-flex flex-column ">
            <input type="text" placeholder="Enter Playlist Name"/>
            <textarea className="mt-2" placeholder="Enter Despcription"></textarea>    
            <button className="add-playlist-button float-right mt-2">SAVE</button>
        </div>
     );
}

export default AddPlaylist;