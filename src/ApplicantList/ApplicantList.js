import React from 'react';
import './ApplicantList.css'
import NavBar from '../NavBar/NavBar'
import ApiContext from '../ApiContext';
import config from '../config'

class ApplicantList extends React.Component{


static contextType = ApiContext;


filteredSubmissions = this.context.submissions[0].filter(submission => submission.interestedposition.includes(this.context.selectedSubject))

handleClickDelete = id =>{
    //id.preventDefault()
    const submissionId = id

    //console.log(submissionId)

    fetch(`${config.API_ENDPOINT}/submissions/${submissionId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        
      })
      .then(() => {
        this.context.deleteSubmission(submissionId)

       
      })
      
     
      .catch(error => {
        console.error({ error })
      })

      
      
}


                                                                            
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
                         <button id="delete-btn" onClick={e => this.handleClickDelete(submission.id)}>Remove🗑️ </button>

                    </li>  
           ))}
                </ul>
            </div>
        )
    }
}
export default ApplicantList;