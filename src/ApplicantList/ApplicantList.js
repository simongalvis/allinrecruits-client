import React from 'react';
import './ApplicantList.css'
import config from '../config';
import NavBar from '../NavBar/NavBar'

class ApplicantList extends React.Component{
state ={
    submissions: []
}

componentDidMount(){

    fetch(`${config.API_ENDPOINT}/submissions`)
      .then(res => res.json())
      .then(resJson => this.setState({
          submissions: [...this.state.submissions, resJson]
      }))
    
    
  }


    render(){
        return(
            <div className="ApplicantList">
                <NavBar/>
                <h1>ApplicantList</h1>
                { 
                this.state.submissions.map
                }
                <ul id="applicant-tiles">
                    <li className="applicant-tile"><b>Bob</b></li>
                    <li className="applicant-tile"><b>Mary</b></li>
                    <li className="applicant-tile"><b>John</b></li>
                    <li className="applicant-tile"><b>Martha</b></li>
                    <li className="applicant-tile"><b>Sandra</b></li>
                    <li className="applicant-tile"><b>Francois</b></li>


                </ul>
            </div>
        )
    }
}
export default ApplicantList;