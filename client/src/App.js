import React from 'react';
import NavBar from'./NavBar';
// import doctor from './hawkhospital';
import './App.css';
import Homepage from './HomePage';
  
function App() {
  return (
    <div className="navbar">
      <header className="daisy">
        <NavBar/>
      </header>
      <main className="home-main">
        <Router>
          <Homepage path="/"/>
          <DoctorList path="/DoctorList"/>
          <PatientList path="/PatientList"/>
          <Admin path="/Admin"/>
        </Router>
      </main>
    </div>
  );
}
  
export default App;
