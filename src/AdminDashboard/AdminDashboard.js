import React from 'react';
import './AdminDashboard.css'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

class AdminDashboard extends React.Component{
static contextType = ApiContext;




componentDidMount(){
    localStorage.setItem('delete-triggered', JSON.stringify("false"))
}
    render(){

        const subjects = ['Spanish','French','Robotics','Art']


        return(
            <div className="AdminDashboard">
                <NavBar/>
                
                <h1>Subjects:</h1>
                <div className="tiles-container">
                <ul id="job-position-tiles">
                {  //Render list of subjects included in subjects array
                    subjects.map(subject =>(
                    <Link to="applicant-list" key={subject}>
                        <li className="job-tile"   onClick={ e => this.context.selectSubject(subject)}><b id="subject-btn-title">{subject}</b></li>
                    </Link>
                    ))     
                }
                </ul>
                </div>
                
            </div>
        )
    }
}
export default AdminDashboard;
