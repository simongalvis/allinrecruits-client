import React from 'react';
import './ApplicantList.css'
import NavBar from '../NavBar/NavBar'
import ApiContext from '../ApiContext';

class ApplicantList extends React.Component{


static contextType = ApiContext;

filteredSubmissions = this.context.submissions[0].filter(submission => submission.interestedposition.includes(this.context.selectedSubject))


  

                                                                            
    render(){

        return(
            <div className="ApplicantList">
                <NavBar/>
                <h1>Submissions: {this.context.selectedSubject}</h1>
                <ul id="applicant-tiles">
           {this.filteredSubmissions.map(submission =>(
                    <li className="applicantTile" key={submission.id}>
                        <b>{submission.fullname}</b>
                        Number: {submission.phonenumber}<br/>
                        Email: {submission.email}<br/>
                         <a href={submission.resumelink} rel="noreferrer" target="_blank"  >Resume: {submission.resumelink}</a>

                    </li>  
           ))}
                </ul>
            </div>
        )
    }
}
export default ApplicantList;