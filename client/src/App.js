import React from 'react';
import NavBar from'./NavBar';
import { Router } from "@reach/router";
import Admin from "./Admin";
import NotFound from "./NotFound";
import './App.css';
import Homepage from './HomePage';
  
function App() {
  return (
    <div className="navbar">
      <header className="daisy">
        <NavBar/>
      </header>
      <main className="hwls-main">
         
      </main>
    </div>
  );
}
  
export default App;
