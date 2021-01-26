import React from 'react';
import './musicLibaray.css'
import {MdReplay} from 'react-icons/md'
import {AiFillFolder,AiFillHeart} from 'react-icons/ai'
import {RiFolder5Fill} from 'react-icons/ri'

const MusicLibaray = () => {
    const libarayItems = ["Recent","Albums","Favrourites","Local"] 
    const libarayItemsIcon = [<MdReplay/>,<RiFolder5Fill/>,<AiFillHeart/>,<AiFillFolder/>]
    return ( 
        <div className="music-libaray-area mt-5 pl-2">
                <div className="libaray-title mt-4 mb-4">
                      LIBARAY  
                </div>
                <ul className="p-0">
                {libarayItems.map((items,index)=>
                    <li className="libaray-list mb-3" key={index}>
                        {libarayItemsIcon.slice(index,1+index).map(icons=>
                      <span className="pr-3">{icons}</span>
                      )}{items} 
                    </li> 
                    
                     
                 
                     )
                     
                    }
                </ul>
            </div>  
     );
}
 
export default MusicLibaray;