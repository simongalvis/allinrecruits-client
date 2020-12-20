import React from 'react'
import './ApplicationForm.css'


class ApplicationForm extends React.Component{



    render(){
        return(
            <div className="ApplicationForm">
                <form>
                    <label htmlFor="application-fullname"  className="required"><b>Full name:</b></label>
                    <input type="text" id="application-fullname" name="application-fullname" placeholder="John Smith" autoCorrect="off" autoCapitalize="none" required/>
                    <label htmlFor="application-phonenumber"><b>Phone number:</b></label>
                    <input type="tel" id="application-phonenumber" name="application-phonenumber" placeholder="123-456-7890" autoCorrect="off" autoCapitalize="none" />
                    <label htmlFor="application-email"><b>Email:</b></label>
                    <input type="email" id="application-email" name="application-email" placeholder="johnsmith123@email.com" autoCorrect="off" autoCapitalize="none" />
                    <label htmlFor="interestedPositionCheckboxList"><b>Interested Position(s):</b></label>
                    {/* Interested position checkbox list */}
                    <div id="interestedPositionCheckboxList">
                        <div className="checkboxLabelAndInput">
                            <input type="checkbox" id="subject1" className="checkboxInput" name="subject1" value="Spanish teacher"/>
                            <label htmlFor="subject1" className="checkboxLabel">Spanish teacher</label>
                        </div>
                        
                        <div className="checkboxLabelAndInput">
                            <input type="checkbox" id="subject2" className="checkboxInput" name="subject2" value="French teacher"/>
                            <label htmlFor="subject2" className="checkboxLabel">French teacher</label>
                        </div>
                        <div className="checkboxLabelAndInput">
                            <input type="checkbox" id="subject3" className="checkboxInput" name="subject3" value="Robotics instructor"/>
                            <label htmlFor="subject3" className="checkboxLabel">Robotics instructor</label>
                        </div>
                        <div className="checkboxLabelAndInput">
                            <input type="checkbox" id="subject4" className="checkboxInput" name="subject4" value="Art instructor"/>
                            <label htmlFor="subject4" className="checkboxLabel">Art instructor</label>
                        </div>
                        
                    </div>
                    <label htmlFor="application-resume" className="required"><b>Resume</b>(Link)</label>
                    <input type="url" id="application-resume" name="application-resume" placeholder="https://drive.google.com/file/d/examplelink3648384748/view" autoCorrect="off" autoCapitalize="none" required/>
                    {/* <label htmlFor="application-resume" className="required"><b>Resume</b>(pdf)</label>
                    <input type="file" id="application-resume" name="application-resume" autoCorrect="off" autoCapitalize="none" required/> */}
                    <button id="application-submit-btn" type="submit"><b>Apply</b></button>
                </form>
                
                
            </div>
        )
    }
}

export default ApplicationForm;