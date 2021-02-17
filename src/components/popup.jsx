import React from 'react';
import './popup.css';
const Popup = () => {
    return ( 
            <div className="popup-wrapper d-flex justify-content-center align-items-center">
                    <div className="popup-main p-2">
                        <div className="popup-warining-top text-center mt-3">Warning!</div>
                        <div className="popup-warining-main text-center mt-4">Inorder to experience the full function of the application.<br/> <span>You must play any song in Sopitify App first</span></div>
                    </div>
            </div>
     );
}
 
export default Popup;
