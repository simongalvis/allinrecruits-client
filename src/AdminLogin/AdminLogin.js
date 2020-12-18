import React from 'react';
import { Link } from 'react-router-dom'
import './AdminLogin.css'
import NavBar from '../NavBar/NavBar'

class AdminLogin extends React.Component{

    render(){
        return(
            <div className="AdminLogin">
                <NavBar/>
                <h1>AdminLogin</h1>
                <form>
                    <label htmlFor="admin-login-username"><b>Username:</b> </label>
                    <input type="text" id="admin-login-username" name="admin-login-username" autoCorrect="off" autoCapitalize="none" required/>
                    <label htmlFor="admin-login-password"><b>Password:</b> </label>
                    <input type="password" id="admin-login-password" name="admin-login-password" autoCorrect="off" autoCapitalize="none" required/>
                    <Link to="admin-dashboard">
                    <button type="submit">Log In</button>
                    </Link>
                </form>
            </div>
        )
    }
}
export default AdminLogin;