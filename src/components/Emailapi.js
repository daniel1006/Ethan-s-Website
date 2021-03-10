import React from 'react';
import './Email.css';

class Emailapi extends React.Component {

   render() {
    return(
   
         <form className="form"   
               action="https://getsimpleform.com/messages?form_api_token=cdd9d49d41bfa26d0752f17333ddc448" 
               method="post">
          
          <input type='hidden' name='redirect_to' value='https://awesome-hermann-a54778.netlify.app/thankyou' />

          <div className="name-box" >
          <group >
             <label>
                <div className="name">Full Name </div>
                <input className="full-name" type="text" name="name"  /> 
             </label> 
          </group>
          </div>
          
         
          <div className="email-box" > 
          <group >
             <label>
                <div className="name"> Email </div> 
                <input className="Email" type="email" name="email"  /> 
             </label>
          </group>
          </div>
          

          <div className="message-box" >
          <group >
             <label >
             <div className="message-text">  Message </div>
                <textarea className="Message" type="message" name="message" /> 
             </label> 
          </group>
          </div>
        
            
                     <button className="send-btn" type="submit"  > Send </button>            
          </form>
    
    );
   }
}

export default Emailapi;