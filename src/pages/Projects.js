import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

export class Projects extends Component {
     render() {   
    return (
        <section id="Projects" >

        <div className="projects-style"> 

        <h1 className="projects-h1"> Projects </h1>
                <div className="projects-stories" > 
                <div className="project-stories2" >
               <Link to="/Films" style={{textDecoration:"none"}}> <h3 className="stories-text"> Films </h3> </Link>
               </div>
                  </div>
            
            <div className="projects-ideas" >
            <Link to="/WrittenWork" style={{textDecoration:"none"}}> <h3 className="ideas-text"> Written Work </h3> </Link>
                  </div>

            <div className="projects-photography" >
            <Link to="/BehindScenes" style={{textDecoration:"none"}}> <h3 className="photography-text" > Behind the Scenes </h3> </Link>
                  </div>

        </div>
   
        </section>
    )
}}

export default Projects