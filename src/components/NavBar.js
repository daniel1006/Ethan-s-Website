import React, { Component } from 'react';
import './NavBar.css';
import Logo from './Logo';
import Nav from './Nav';

export class NavBar extends Component {
    render() {
return ( 
        
         <header className="holds" >

              <Logo/>
             <Nav/>

        </header>
          
    )
}}

export default NavBar
