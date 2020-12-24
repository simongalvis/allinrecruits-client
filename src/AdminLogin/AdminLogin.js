import React from 'react';
import './AdminLogin.css'
import NavBar from '../NavBar/NavBar'
import ApiContext from '../ApiContext';

class AdminLogin extends React.Component{
    static contextType = ApiContext;

    handleSubmit = e =>{
        e.preventDefault();
       
    
    const  { loginUsername, loginPassword } = e.target;

    this.context.loginAdmin(loginUsername.value, loginPassword.value)
       
    //if there's a logged admin, redirect to admin dashboard
    setTimeout( () => {if (Object.keys(this.context.loggedAdmin).length > 0){
               this.props.history.push('/admin-dashboard')}}, 1000) 
    }


    render(){
        return(
            <div className="AdminLogin">
                <NavBar/>
                <h1 id="admin-login-heading">Administrator Login</h1>
                <div id="sample-admin-credentials">Sample admin credentials:<br/>
                <b>Username:</b> sampleadmin<br/>
                <b>Password:</b> sampleadmin</div>
                <form id="admin-login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="loginUsername"><b>Username:</b> </label>
                    <input type="text" id="loginUsername" name="loginUsername" autoCorrect="off" autoCapitalize="none" required/>
                    <label htmlFor="loginPassword"><b>Password:</b> </label>
                    <input type="password" id="loginPassword" name="loginPassword" autoCorrect="off" autoCapitalize="none" required/><br/>
                    <button type="submit" id="admin-login-button">Log In</button>
                </form>
            </div>
        )
    }
}
export default AdminLogin;