import React from 'react';
import { Link } from 'react-router-dom';

import RainVideo from '../images/RainVideo.mp4';

function ThankYou() {
    return (
        <div style={{ display:"flex",
                      justifyContent:"center",
                      textAlign:"center",
                      alignItems:"center",
                      flexDirection:"column" }}>
 
        <video classname="Rain-Video" autoPlay loop muted    
              style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "110%",
              objectFit: "cover",
              transform: "translate(-50%, -50%",
             zIndex: "-1"}}>
          <source src={RainVideo} type="video/mp4" />
         </video>   

        <h3 style={{  color:"aliceblue",
                      textShadow:"0 0 10px whitesmoke",
                      fontSize:"250%",
                      marginTop:"15%",
                      width:"65%"
                      }}>

            Thank you for reaching out to me I'll get back to you as soon as I can !
        </h3>

        <Link className="ThanksLink" style={{textDecoration:"none"}} to="/"> 
             <h3 style={{ textDecoration:"none",
                            color:"lightblue",
                            fontSize:"200%",
                            marginTop:"25%"
                            //Text shadow found on About.css
                        }}> Back Home </h3> 
        </Link>

        </div>
    )
}

export default ThankYou
