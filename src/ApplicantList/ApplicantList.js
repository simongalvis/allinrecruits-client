import React from 'react';
import './ApplicantList.css'
import NavBar from '../NavBar/NavBar'
import ApiContext from '../ApiContext';
import config from '../config'

class ApplicantList extends React.Component{


static contextType = ApiContext;
state={
  filteredSubmissions: !this.context.deleteTriggered
                       ? this.context.submissions[0].filter(submission => submission.interestedposition.includes(this.context.selectedSubject))
                       : this.context.submissions.filter(submission => submission.interestedposition.includes(this.context.selectedSubject)) 
}

handleClickDelete = id =>{
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
       // console.log(this.state.filteredSubmissions)
        this.setState({
          filteredSubmissions: this.state.filteredSubmissions.filter(submission => submission.id !== submissionId)
        }, () => {
          //console.log(this.state.filteredSubmissions)
          this.context.deleteSubmission(submissionId)
        })
        
      })
      .then(this.setState({ deleteTriggered: true}))
      .catch(error => {
        console.error({ error })
      })   
}
                                                                          
    render(){
      //console.log("Filtered list here: " + this.state.filteredSubmissions)
        return(
            <div className="ApplicantList">
                <NavBar/>
                <h1>Submissions: {this.context.selectedSubject}</h1>
                <div className="tiles-container">
                <ul id="applicant-tiles">
                    {this.state.filteredSubmissions.map(submission =>(
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
                
            </div>
        )
    }
}
export default ApplicantList;