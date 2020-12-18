import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from "../src/App/App";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
    
  ,
  document.getElementById('root')
);


