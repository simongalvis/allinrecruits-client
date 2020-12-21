import React from 'react';
import './AdminDashboard.css'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';

class AdminDashboard extends React.Component{



    render(){

        const subjects = ['Spanish','French','Robotics','Art']


        return(
            <div className="AdminDashboard">
                <NavBar/>
                <h1>AdminDashboard</h1>
                {
                    subjects.map(subject =>(
                        <ul id="job-position-tiles">
                    <Link to="applicant-list">
                        <li className="job-tile"><b>{subject}</b></li>
                    </Link>
                </ul>
                    ))
                }
                
            </div>
        )
    }
}
export default AdminDashboard;