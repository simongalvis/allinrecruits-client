import React from 'react';
import './AdminDashboard.css'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';

class AdminDashboard extends React.Component{

    render(){
        return(
            <div className="AdminDashboard">
                <NavBar/>
                <h1>AdminDashboard</h1>
                <ul id="job-position-tiles">
                    <Link to="applicant-list">
                        <li className="job-tile"><b>French</b></li>
                    </Link>
                    <Link to="applicant-list">
                        <li className="job-tile"><b>Spanish</b></li>
                    </Link>
                    <Link to="applicant-list">
                        <li className="job-tile"><b>Technology</b></li>
                    </Link>
                    <Link to="applicant-list">
                        <li className="job-tile"><b>P.E.</b></li>
                    </Link>
                    <Link to="applicant-list">
                        <li className="job-tile"><b>Art</b></li>
                    </Link>
                </ul>
            </div>
        )
    }
}
export default AdminDashboard;