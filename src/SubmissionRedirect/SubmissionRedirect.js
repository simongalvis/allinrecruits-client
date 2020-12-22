import React from 'react';
import './SubmissionRedirect.css'
import NavBar from '../NavBar/NavBar'
import ApiContext from '../ApiContext';

class SubmissionRedirect extends React.Component{


    render(){
        return(
            <div className="SubmissionRedirect">
                <NavBar/>
                <h2>Thank you for your submission!</h2>
                <p>We'll process your application and let you know when we have available positions that suit your profile</p><br/>
               
    
            </div>
        )
    }
}
export default SubmissionRedirect;