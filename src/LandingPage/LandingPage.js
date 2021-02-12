import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './LandingPage.css'
import Typewriter from 'typewriter-effect';

class LandingPage extends React.Component{



    render(){
        return(
            <div className="LandingPage">
                <NavBar/>
                <h1>Welcome to All-In Recruits!</h1>
                <p id="hero-text">Find a position as a: {' '}  <br/>
                <div className="typingHero">
                    {/* Create typewriter effect */}
                    <Typewriter id="type-effect-text" 
                                options={{
                                            strings: ['spanish teacher', 'french teacher', 'robotics instructor', 'art instructor'],
                                            autoStart: true,
                                            loop: true,
                                            skipAddStyles: true
                                        }}
                        />
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