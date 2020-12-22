import React from 'react'
import './NavBar.css'
import logo from '../images/all-in-logo.png'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{



    render(){
        return(
            <div className="NavBar">
                <header>
                    <Link to="/">
                        <img src={logo} alt="all-in-education-logo" id="main-logo"/>
                    </Link>
                    <a href="/admin-login">
                        <button  id="admin-login-button">Admin Login</button>
                    </a>
                </header>
                
                
            </div>
        )
    }
}

export default NavBar;