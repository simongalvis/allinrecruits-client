import React from 'react';
import './ApplicantList.css'
import NavBar from '../NavBar/NavBar'
import ApiContext from '../ApiContext';
import config from '../config'

class ApplicantList extends React.Component{


static contextType = ApiContext;
state={
  //set submissions based on whether subissions exist in local storage
  filteredSubmissions: !localStorage.getItem('submissions') ? (!this.context.deleteTriggered
                       ? this.context.submissions.filter(submission => submission.interestedposition.includes(this.context.selectedSubject))
                       : this.context.submissions.filter(submission => submission.interestedposition.includes(this.context.selectedSubject)) )
                       : JSON.parse(localStorage.getItem('delete-triggered')) === 'true' ? JSON.parse(localStorage.getItem('submissions')).filter(submission => !this.context.selectedSubject ? submission.interestedposition.includes(JSON.parse(localStorage.getItem('selected-subject'))) : submission.interestedposition.includes(this.context.selectedSubject)) : JSON.parse(localStorage.getItem('submissions')).filter(submission => !this.context.selectedSubject ? submission.interestedposition.includes(JSON.parse(localStorage.getItem('selected-subject'))) : submission.interestedposition.includes(this.context.selectedSubject)),
}


handleClickDelete = id =>{
    const submissionId = id

    //delete submission with provided id
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
        this.setState({
          filteredSubmissions: this.state.filteredSubmissions.filter(submission => submission.id !== submissionId)
        }, () => {
          this.context.deleteSubmission(submissionId)
          localStorage.setItem('submissions', JSON.stringify(this.state.filteredSubmissions))
          localStorage.setItem('delete-triggered', JSON.stringify('true'))
        })
      })
      .then(this.setState({ deleteTriggered: true}))
      .then(localStorage.setItem('submissions', JSON.stringify(this.state.zig))
      )
      .catch(error => {
        console.error({ error })
      })   
}

    componentDidMount(){
       localStorage.setItem('submissions', JSON.stringify(this.context.submissions ? this.context.submissions : JSON.parse(localStorage.getItem('submissions'))))

       localStorage.setItem('selected-subject', JSON.stringify(this.context.selectedSubject ? this.context.selectedSubject : JSON.parse(localStorage.getItem('selected-subject'))))

       localStorage.setItem('delete-triggered', JSON.stringify("false"))
    
    }                                                                 
    render(){
      
        return(
            <div className="ApplicantList">
                <NavBar/>
                <h1>Submissions: {this.context.selectedSubject ? this.context.selectedSubject : JSON.parse(localStorage.getItem('selected-subject'))}</h1>
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