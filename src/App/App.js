import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer';
import ApplicationPage from '../ApplicationPage/ApplicationPage';
import AdminLogin from '../AdminLogin/AdminLogin';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import ApplicantList from '../ApplicantList/ApplicantList';
import config from '../config';
import ApiContext from '../ApiContext';



class App extends React.Component {

state = {
  submissions: '',
  selectedSubject: ''
}

componentDidMount(){

  fetch(`${config.API_ENDPOINT}/submissions`)
    .then(res => res.json())
    .then(resJson => this.setState({
        submissions: [resJson]
    }))
  
}


handleAddSubmission = (submission) =>{
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  };
  

  fetch(`${config.API_ENDPOINT}/submissions`, requestOptions)
    .then((res) => res.json())
    .then((resJson) =>
      this.setState({
        submissions: [...this.state.submissions, submission ],
      })
    );
    console.log(this.state.submissions)
}
handleSelectSubject = (subject) =>{
  this.setState({selectedSubject: subject})
}



renderMainRoutes(){
  return(
  <>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/application-page" component={ApplicationPage}/>
    <Route exact path="/admin-login" component={AdminLogin}/>
    <Route exact path="/admin-dashboard" component={AdminDashboard}/>
    <Route exact path="/applicant-list" component={ApplicantList}/>

  </>
  )
  
}
  render(){
    const value = {
      admins: this.state.admins,
      submissions: this.state.submissions,
      addSubmission: this.handleAddSubmission,
      selectSubject: this.handleSelectSubject,
      selectedSubject: this.state.selectedSubject
    }
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <main>
            {this.renderMainRoutes()}
          </main>
        <Footer/>
        </div>
      </ApiContext.Provider>
    );

  }
 
}

export default App;
