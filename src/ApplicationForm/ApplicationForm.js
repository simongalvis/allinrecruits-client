import React from 'react'
import ApiContext from '../ApiContext';
import './ApplicationForm.css'
import { Link } from 'react-router-dom'


class ApplicationForm extends React.Component{
static contextType = ApiContext;

    handleSubmit = e =>{
        e.preventDefault();
        console.log('I am working')
        const { applicationFullname, applicationPhonenumber, applicationEmail, applicationPosition, applicationResume } = e.target;
        
        
        const submission = {
            fullname: applicationFullname.value,
            phonenumber: applicationPhonenumber.value,
            email: applicationEmail.value,
            interestedposition: applicationPosition.value,
            resumelink: applicationResume.value
        }

        this.context.addSubmission(submission);

        
        
        
    
        console.log(submission)
    }
     openPositions =['French teacher','Spanish teacher', 'Robotics instructor', 'Art instructor']
     state ={
         counter: 0
     }


    render(){
        return(
            <div className="ApplicationForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="applicationFullname"  className="required"><b>Full name:</b></label>
                    <input type="text" id="applicationFullname" name="applicationFullname" placeholder="John Smith" autoCorrect="off" autoCapitalize="none" required/>
                    <label htmlFor="applicationPhonenumber"><b>Phone number:</b></label>
                    <input type="tel" id="applicationPhonenumber" name="applicationPhonenumber" placeholder="123-456-7890" autoCorrect="off" autoCapitalize="none" />
                    <label htmlFor="application-email"><b>Email:</b></label>
                    <input type="email" id="applicationEmail" name="applicationEmail" placeholder="johnsmith123@email.com" autoCorrect="off" autoCapitalize="none" />
                    
                    <label htmlFor="applicationPosition"><b>Interested Position(s):</b></label>

                    <select name="applicationPosition" id="applicationPosition">
                        <option value="Spanish teacher">Spanish teacher</option>
                        <option value="French teacher">French teacher</option>
                        <option value="Robotics instructor">Robotics instructor</option>
                        <option value="Art instructor">Art instructor</option>
                    </select>
                    <label htmlFor="applicationResume" className="required"><b>Resume</b>(Link)</label>
                    <input type="url" id="applicationResume" name="applicationResume" placeholder="https://drive.google.com/file/d/examplelink3648384748/view" autoCorrect="off" autoCapitalize="none" required/>
                    {/* <label htmlFor="application-resume" className="required"><b>Resume</b>(pdf)</label>
                    <input type="file" id="application-resume" name="application-resume" autoCorrect="off" autoCapitalize="none" required/> */}
                    <button id="application-submit-btn" type="submit"><b>Apply</b></button>
                </form>
                
                
            </div>
        )
    }
}

export default ApplicationForm;