import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './LandingPage.css'


class LandingPage extends React.Component{



    render(){
        return(
            <div className="LandingPage">
                <NavBar/>
                <h1>Landing Page</h1>
                <Link to="/application-page">
                    <button>Get a Job</button>
                </Link>
                
                <Link to="/admin-login">
                    <button>Admin Login</button>
                </Link>
                
            </div>
        )
    }
}

export default LandingPage;