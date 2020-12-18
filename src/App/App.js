import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'



class App extends React.Component {






renderMainRoutes(){
  return(
  <>
    <Route exact path="/" component={LandingPage} />

  </>
  )
  
}
  render(){
    return (
      <div className="App">
       <main>
         {this.renderMainRoutes()}
       </main>
      </div>
    );

  }
 
}

export default App;
