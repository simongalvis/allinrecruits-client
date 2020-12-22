import React from 'react';
import './AdminDashboard.css'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

class AdminDashboard extends React.Component{
static contextType = ApiContext;





    render(){

        const subjects = ['Spanish','French','Robotics','Art']


        return(
            <div className="AdminDashboard">
                <NavBar/>
                <h1>AdminDashboard</h1>
                <ul id="job-position-tiles">
                {
                    subjects.map(subject =>(
                
                    <Link to="applicant-list" key={subject}>
                        <li className="job-tile"   onClick={ e => this.context.selectSubject(subject)}><b>{subject}</b></li>
                    </Link>
                
                    ))     
                }
                </ul>
            </div>
        )
    }
}
export default AdminDashboard;