import React, {Component} from 'react';
import './Contact.css';
import Emailapi from '../components/Emailapi';

export class Projects extends Component {
    render() {
    return (
        <section id="Contact" >
        <div className="contact-style">
            <h1 className="contact-h1" > Contact Me </h1>
            <Emailapi />
            
        </div>

        
        </section>
    )
}}

export default Projects