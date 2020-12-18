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
                    <label htmlFor="application-resume" className="required"><b>Resume</b>(pdf)</label>
                    <input type="file" id="application-resume" name="application-resume" autoCorrect="off" autoCapitalize="none" required/>
                    <button id="application-submit-btn" type="submit"><b>Apply</b></button>
                </form>
                
                
            </div>
        )
    }
}

export default ApplicationForm;