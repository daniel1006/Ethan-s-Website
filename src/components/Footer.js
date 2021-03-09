import React, { Component } from 'react'
import {FaInstagram, FaYoutube} from 'react-icons/fa';
import './Footer.css';

export default class componentName extends Component {
    render() {
        return (
            <div>

             <div className="footer"> Follow me at
            <a href="https://www.instagram.com/torrentialrainfilms/" 
               target="_blank" > <FaInstagram  className="insta-icon" />
           </a>

           <a href="https://www.youtube.com/channel/UCVZ2-fgGRXe6bI68XTwtJGA" 
              target="_blank" ><FaYoutube className="youtube-icon" />
          </a>
            </div>

            </div>
        )
    }
}
