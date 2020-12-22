import React from 'react';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import NavBar from '../NavBar/NavBar';
import './ApplicationPage.css'


class ApplicationPage extends React.Component{

    render(){
        return(
            <div className="ApplicationPage">
                <NavBar/>
                <h1>Application Page</h1>
                
                <ApplicationForm/>
            </div>
        )
    }
}

export default ApplicationPage;