import React, {Component} from 'react'
import './About.css'
import ethanProfile from '../images/ethanProfile.jpg'

export class About extends Component {
    render() {
    return (
        
        <container id="About" >
        <div className="about-style">
        <h1 className="about-h1" > Ethan's Corner </h1>
            <h3 className="about-h3" > A no nonsense nonesensical story teller with a curly flare and a sense for the obscene. </h3>
            <img src={ethanProfile} alt="ethan-pic" className="ethan-pic" /> 
        </div>
        </container>
    )
}}

export default About