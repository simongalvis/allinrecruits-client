import React from 'react'
import './ApplicationForm.css'


class ApplicationForm extends React.Component{



    render(){
        return(
            <div className="ApplicationForm">
                <form>
                    <label htmlFor="application-fullname"><b>Full name:</b></label>
                    <input type="text" id="application-fullname" name="application-fullname" placeholder="John Smith" autoCorrect="off" autoCapitalize="none" required/>
                    <label htmlFor="application-phonenumber"><b>Phone number:</b></label>
                    <input type="number" id="application-phonenumber" name="application-phonenumber" placeholder="123-456-7890" autoCorrect="off" autoCapitalize="none" required/>
                </form>
                
                
            </div>
        )
    }
}

export default ApplicationForm;