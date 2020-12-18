import React from 'react';
import './AdminDashboard.css'
import NavBar from '../NavBar/NavBar'

class AdminDashboard extends React.Component{

    render(){
        return(
            <div className="AdminDashboard">
                <NavBar/>
                <h1>AdminDashboard</h1>
            </div>
        )
    }
}
export default AdminDashboard;