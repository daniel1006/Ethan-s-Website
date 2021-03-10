import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
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
                  position: "absolute",
                  width: "100%",
                  left: "50%",
                  top: "50%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%",
                  zIndex: "-1" }}>

              <source src={RainVideo} type="video/mp4" />
             </video>   
             <a className="cv-button" download href="/Resume/CV.pdf">
                  <p className="cv-button" > Download CV </p> </a> 

                     
    
            </div>   
         <Projects />
         <About />
         <Contact />
         </section>
    )
}}

export default Home
