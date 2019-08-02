import React from 'react';
import NavBar from'./NavBar';
import { Router } from "@reach/router";
import Homepage from './HomePage';
import DoctorList from "./DoctorList";
import Patient from "./Patient";
import Admin from "./Admin";
import NotFound from "./NotFound";
import './App.css';

  
function App() {
  return (
    <div className="navbar">
      <header className="hm">
        <NavBar/>
      </header>
      <main className="hwls-main">
         <Router>
          <Homepage path="/" />
          <DoctorList path="/doctor"/>
          <Patient path="/patient" />
          <Admin path="/admin" /> 
          <NotFound default/>
         </Router>
      </main>
    </div>
  );
}
  
export default App;
