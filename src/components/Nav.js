import React, {Component} from 'react';
import {Link} from 'react-scroll';

export class Nav extends Component {
    
      state = {
          toggle: false
      }

      menuToggle = () =>{
          this.setState({toggle: ! this.state.toggle})
      }


    render() {
        const {toggle} = this.state;
        
    return (
        <>
            <ul className={toggle ? "toggle" : ""} >

               <li><Link smooth={true}
                         duration={1000} 
                         offset={0}
                         to="Home"
                        > Home </Link></li>

               <li><Link
                         smooth={true}
                         spy={true}
                         offset={0}
                         duration={1000} 
                         to="Projects" 
                         > Projects </Link></li>

               <li><Link
                         smooth={true}
                         spy={true}
                         offset={0}
                         duration={1000} 
                         to="About" > 
                         About </Link></li>

               <li><Link      
                         smooth={true}
                         spy={true}
                         offset={0}
                         duration={1000} 
                         to="Contact" > 
                         Contact </Link></li>
  

               <li className="close" onClick={this.menuToggle}> X </li>
             </ul>
           <div className="menu" onClick={this.menuToggle}> Menu </div>

        </>
    )
}}

export default Nav
