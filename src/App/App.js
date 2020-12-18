import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer';
import ApplicationPage from '../ApplicationPage/ApplicationPage';
import AdminLogin from '../AdminLogin/AdminLogin';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import ApplicantList from '../ApplicantList/ApplicantList'



class App extends React.Component {






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
    return (
      <div className="App">
       <main>
         {this.renderMainRoutes()}
       </main>
       <Footer/>
      </div>
    );

  }
 
}

export default App;
