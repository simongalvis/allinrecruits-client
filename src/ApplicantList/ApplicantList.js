import React from 'react';
import './ApplicantList.css'
import NavBar from '../NavBar/NavBar'

class ApplicantList extends React.Component{

    render(){
        return(
            <div className="ApplicantList">
                <NavBar/>
                <h1>ApplicantList</h1>
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