import React from 'react';
import './App.css';

function NavBar() {
    return (
        <div className="home-container">
            <nav className="home-nav">
                <a href="/">HOME</a>
                <a href="/DoctorList">MIDDLE</a>
                <a href="/PatientList">LAST</a>
                <a href="/admin">ADMIN</a>
            </nav>
        </div>
    );
}

export default NavBar;