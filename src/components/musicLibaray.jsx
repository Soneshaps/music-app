import React from 'react';
import './musicLibaray.css'
import {AiFillFolder,AiFillHeart} from 'react-icons/ai'

const MusicLibaray = () => {
    const libarayItems = ["Favrourites","Playlist"] 
    const libarayItemsIcon = [<AiFillHeart/>,<AiFillFolder/>]
    return ( 
        <div className="music-libaray-area mt-5 pl-2">
                <div className="libaray-title mt-4 mb-4">
                      LIBARAY  
                </div>
                <ul className="p-0">
                {libarayItems.map((items,index)=>
                    <li className="libaray-list mb-3" key={index}>
                        {libarayItemsIcon.slice(index,1+index).map(icons=>
                      <span key={index} className="pr-3">{icons}</span>
                      )}{items} 
                    </li> 
                    
                     
                 
                     )
                     
                    }
                </ul>
            </div>  
     );
}
 
export default MusicLibaray;