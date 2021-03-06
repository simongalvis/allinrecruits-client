import React from 'react'
import ApiContext from '../ApiContext';
import './ApplicationForm.css'



class ApplicationForm extends React.Component{
static contextType = ApiContext;

    handleSubmit = e =>{
        e.preventDefault();
    
        const { applicationFullname, applicationPhonenumber, applicationEmail, applicationPosition, applicationResume } = e.target;
        
        const submission = {
            fullname: applicationFullname.value,
            phonenumber: applicationPhonenumber.value,
            email: applicationEmail.value,
            interestedposition: applicationPosition.value,
            resumelink: applicationResume.value
        }

        this.context.addSubmission(submission);

        e.target.reset();

        setTimeout( () => this.props.history.push('/submission-redirect'), 1000)
    }

     state ={
         counter: 0
     }

    render(){
        return(
            <div className="ApplicationForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="applicationFullname"  className="required">Full name:</label><br/>
                    <input type="text" id="applicationFullname" name="applicationFullname" placeholder="John Smith" autoCorrect="off" autoCapitalize="none" required/><br/>
                    <label htmlFor="applicationPhonenumber">Phone number:</label><br/>
                    <input type="tel" id="applicationPhonenumber" name="applicationPhonenumber" placeholder="123-456-7890" autoCorrect="off" autoCapitalize="none" /><br/>
                    <label htmlFor="application-email">Email:</label><br/>
                    <input type="email" id="applicationEmail" name="applicationEmail" placeholder="johnsmith123@email.com" autoCorrect="off" autoCapitalize="none" /><br/>
                    
                    <label htmlFor="applicationPosition">Interested Position:</label><br/>

                    <select name="applicationPosition" id="applicationPosition">
                        <option value="Spanish teacher">Spanish teacher</option>
                        <option value="French teacher">French teacher</option>
                        <option value="Robotics instructor">Robotics instructor</option>
                        <option value="Art instructor">Art instructor</option>
                    </select><br/>
                    <label htmlFor="applicationResume" className="required">Resume(Link)</label><br/>
                    <input type="url" id="applicationResume" name="applicationResume" placeholder="https://drive.google.com/file/d/examplelink3648384748/view" autoCorrect="off" autoCapitalize="none" required/><br/>
                    <button id="application-submit-btn" type="submit" ><b>Apply</b></button>
                </form>
            </div>
        )
    }
}

export default ApplicationForm;