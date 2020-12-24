import React from 'react';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import NavBar from '../NavBar/NavBar';
import './ApplicationPage.css'


class ApplicationPage extends React.Component{

    render(){
        return(
            <div className="ApplicationPage">
                <NavBar/>
                <h1>Application</h1>
                <ApplicationForm history={this.props.history}/>
            </div>
        )
    }
}

export default ApplicationPage;