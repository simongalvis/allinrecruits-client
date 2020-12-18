import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer';
import ApplicationPage from '../ApplicationPage/ApplicationPage';



class App extends React.Component {






renderMainRoutes(){
  return(
  <>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/application-page" component={ApplicationPage}/>

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
