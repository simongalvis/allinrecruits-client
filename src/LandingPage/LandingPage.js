import React from 'react'
import NavBar from '../NavBar/NavBar';
import './LandingPage.css'


class LandingPage extends React.Component{



    render(){
        return(
            <div class="LandingPage">
                <NavBar/>
                <h1>Landing Page</h1>
                
            </div>
        )
    }
}

export default LandingPage;