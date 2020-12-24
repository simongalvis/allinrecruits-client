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


/* 
li{
    list-style-type: none;
    padding: 0;
    font-size: 33px;
    height: 95px;
    border: 1px solid black;
    margin: 3%;
    border-radius: 3px;
    max-width: 500px;
}
ul{
    display: flex;
    flex-direction: column;
    padding: 0;
}
a{
    color:black;
    text-decoration: none;
}
.AdminDashboard{
    height:100%;
}
.job-tile:hover{
background-color: rgb(241, 90, 41, .5);
}
.job-tile{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
}
#subject-btn-title{
    font-size: 27px;
    
}
#job-tiles-container{
    display: flex;
    justify-content: center;
    align-items: center;
} */