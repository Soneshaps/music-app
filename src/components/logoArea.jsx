import React, { Component } from 'react';
import {MdQueueMusic} from 'react-icons/md';
import {SiBeatport} from 'react-icons/si';

import './logoArea.css';
class LogoArea extends Component {
    
    render() { 
        return ( 
            <div className="logo-area mt-3">
                <MdQueueMusic/><span className="pl-2 d-inline-block">Groovvy</span>
            </div>  
         );
    }
}
 
export default LogoArea;