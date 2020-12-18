import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './LandingPage.css'
import Typical from 'react-typical';

class LandingPage extends React.Component{



    render(){
        return(
            <div className="LandingPage">
                <NavBar/>
                <h1>Landing Page</h1>
                <div className="typingHero">
                <p>Find a position as a: {' '}  <br/>
                <Typical
                    steps={[`spanish teacher`, 1000,`french teacher`, 1000, " robotics instructor", 1000, `chess instructor`, 1000,]}
                    loop={Infinity}
                    wrapper="b"/>
                </p>
                
                </div>
                <br/>
                
                
                <Link to="/application-page">
                    <button>Apply Now</button>
                </Link>
                
                <Link to="/admin-login">
                    <button>Admin Login</button>
                </Link>
                
            </div>
        )
    }
}

export default LandingPage;