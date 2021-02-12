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
                <h1>Welcome to All-In Recruits!</h1>
                <p id="hero-text">Find a position as a: {' '}  <br/>
                <div className="typingHero">
                    {/* Create typing effect using 'Typical' npm library */}
                    <Typical
                        id="type-effect-text"
                        steps={['spanish teacher', 2000,'french teacher', 2000, 'robotics instructor', 2000, 'art instructor', 2000,]}
                        loop={Infinity}
                        wrapper="b"/>
                </div><br/>
                <div id="app-description">Apply now to be considered for our upcoming available positions.</div>
                </p><br/>
                <Link to="/application-page">
                    <button id="apply-button">Apply Now</button>
                </Link>
                
                
            </div>
        )
    }
}

export default LandingPage;