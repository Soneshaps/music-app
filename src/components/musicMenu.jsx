import React, { Component } from 'react';
import {MdQueueMusic} from 'react-icons/md';
import './musicMenu.css';
import {MdExplore,MdVolumeDown,MdRadioButtonChecked,MdMic,MdRadio} from 'react-icons/md'
const MusicMenu =()=> {
    
   
        const menuItems = ["Explore","Genres","Album","Artist","Radio"] 
        const menuItemsIcon = [<MdExplore/>,<MdVolumeDown/>,<MdRadioButtonChecked/>,<MdMic/>,<MdRadio/>]
        return ( 
            <div className="music-menu-area mt-5 pl-2">
                <div className="menu-title mt-4 mb-4">
                      MENU  
                </div>
                <ul className="p-0">
                {menuItems.map((items,index)=>
                    <li className="menu-list mb-3" key={index}>
                        {menuItemsIcon.slice(index,1+index).map(icons=>
                      <span className="pr-3">{icons}</span>
                      )}{items} 
                    </li> 
                    
                     
                 
                     )
                     
                    }
                </ul>
            </div>  
         );
    }

 
export default MusicMenu;