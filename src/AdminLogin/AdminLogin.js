import React from 'react';
import { Link } from 'react-router-dom'
import './AdminLogin.css'
import NavBar from '../NavBar/NavBar'
import ApiContext from '../ApiContext';

class AdminLogin extends React.Component{
    static contextType = ApiContext;

    handleSubmit = e =>{
        e.preventDefault();
       
    
    const  { loginUsername, loginPassword } = e.target;
    this.context.loginAdmin(loginUsername.value, loginPassword.value )
       
      
       
      setTimeout( () => {if (Object.keys(this.context.loggedAdmin).length > 0){
               this.props.history.push('/admin-dashboard')}}, 1000) 
        
       
    
    
    
    
    }


    render(){
        return(
            <div className="AdminLogin">
                <NavBar/>
                <h1>AdminLogin</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="loginUsername"><b>Username:</b> </label>
                    <input type="text" id="loginUsername" name="loginUsername" autoCorrect="off" autoCapitalize="none" required/>
                    <label htmlFor="loginPassword"><b>Password:</b> </label>
                    <input type="password" id="loginPassword" name="loginPassword" autoCorrect="off" autoCapitalize="none" required/>
                    
                    <button type="submit">Log In</button>
                    
                </form>
            </div>
        )
    }
}
export default AdminLogin;