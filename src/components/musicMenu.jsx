import React from 'react';
import './musicMenu.css';
import {Link} from 'react-router-dom'
import {MdExplore,MdRadioButtonChecked,MdMic,MdReplay} from 'react-icons/md'
const MusicMenu =()=> {
    
   
        const menuItems = [
           <Link to="/">Explore</Link> ,
           <Link to="/track">Album</Link> ,
           <Link to="/artist">Artist</Link> ,
           <Link to="/recent">Recent</Link> ] 
        const menuItemsIcon = [<MdExplore/>,<MdRadioButtonChecked/>,<MdMic/>,<MdReplay/>]
        return ( 
            <div className="music-menu-area mt-5 pl-2">
                <div className="menu-title mt-4 mb-4">
                      MENU  
                </div>
                <ul className="p-0">
                {menuItems.map((items,index)=>
                    <li className="menu-list mb-3" key={index}>

                        {menuItemsIcon.slice(index,1+index).map(icons=>
                      <span key={index} className="pr-3">{icons}</span>
                      )}{items}

                    </li> 
                    
                     
                 
                     )
                     
                    }
                </ul>
            </div>  
         );
    }

 
export default MusicMenu;