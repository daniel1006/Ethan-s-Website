import React from 'react';

import './Home.css';
import RainVideo from '../images/RainVideo.mp4';

export class Home extends React.Component {
          
    render() {
        
    return (
      

        <section id="Home" > 
            <div className="home-style" >

              <h1 className="home-title" > Ethan Levy </h1> 
              <h3 className="home-p" > Director. DOP. Actor </h3>

              <video classname="Rain-Video" autoPlay loop muted 
              
                  style={{
                  position: "fixed",
                  width: "100%",
                  left: "0",
                  top: "0",
                  height: "120vh",
                  objectFit: "cover",
                  zIndex: "-1" }}>

              <source src={RainVideo} type="video/mp4" />
             </video>   
             <a className="cv-button" download href="/Resume/CV.pdf">
                  <p className="cv-button" > Download CV </p> </a> 

                     
    
            </div>   
        
         </section>
    )
}}

export default Home
