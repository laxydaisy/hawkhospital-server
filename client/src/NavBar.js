import React from 'react';
import { Link } from "@reach/router";

function NavBar() {
    return (
        <div className="home-container">
            <nav className="home-nav">
                <a href="/">HOME</a>
                <a href="/DoctorList">Doctor</a>
                <a href="/PatientList">Patient</a>
                <a href="/admin">ADMIN</a>
            </nav>
        </div>
    );
}

export default NavBar;