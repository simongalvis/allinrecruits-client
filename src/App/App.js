import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer';
import ApplicationPage from '../ApplicationPage/ApplicationPage';
import AdminLogin from '../AdminLogin/AdminLogin';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import ApplicantList from '../ApplicantList/ApplicantList';
import SubmissionRedirect from '../SubmissionRedirect/SubmissionRedirect';
import config from '../config';
import ApiContext from '../ApiContext';



class App extends React.Component {

state = {
  submissions: '',
  selectedSubject: '',
  admins: '',
  loggedAdmin: {}
}

componentDidMount(){
  //fetch submissions and add them to state
  fetch(`${config.API_ENDPOINT}/submissions`)
    .then(res => res.json())
    .then(resJson => this.setState({
        submissions: resJson
    }))
    //fetch admins and add them to state
    fetch(`${config.API_ENDPOINT}/admins`)
    .then(res => res.json())
    .then(resJson => this.setState({
        admins: resJson
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
    )
}

handleSelectSubject = (subject) =>{
  this.setState({selectedSubject: subject})
};

handleLogin = (loginUsername, loginPassword) => {
  const requestOptions = {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({username: loginUsername, password:loginPassword })
 };

  fetch(`${config.API_ENDPOINT}/admins/login`, requestOptions)
   .then((res) => { if (res.statusText !== 'OK') {
      alert('Username or password are incorrect. Please try again!')
   }
   else if (res.statusText === 'OK') {
     const found = this.state.admins.find(admin => (admin['username'] === loginUsername) ) 
  
      this.setState({loggedAdmin: found})  
   }
 })
};

handleDeleteSubmission = submissionId =>{
    this.setState({
    submissions: !this.state.deleteTriggered
                 ? this.state.submissions.filter(submission => submission.id !== submissionId) 
                 : this.state.submissions.filter(submission => submission.id !== submissionId)
  })

  this.setState({ deleteTriggered: true})  
}


renderMainRoutes(){
  return(
  <>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/application-page" component={ApplicationPage}/>
    <Route exact path="/admin-login" component={AdminLogin}/>
    <Route exact path="/admin-dashboard" component={AdminDashboard}/>
    <Route exact path="/applicant-list" component={ApplicantList}/>
    <Route exact path="/submission-redirect" component={SubmissionRedirect}/>
  </>
  )
  
}
  render(){

    const value = {
      admins: this.state.admins,
      submissions: this.state.submissions,
      addSubmission: this.handleAddSubmission,
      selectSubject: this.handleSelectSubject,
      selectedSubject: this.state.selectedSubject,
      loginAdmin: this.handleLogin,
      loggedAdmin: this.state.loggedAdmin,
      deleteSubmission: this.handleDeleteSubmission,
      deleteTriggered:this.state.deleteTriggered
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
