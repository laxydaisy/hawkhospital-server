import React from 'react';
import { Link } from "@reach/router";

function NavBar() {
    return (
        <div className="home-container">
            <nav className="home-nav">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                        <Link to="/doctor">Doctor</Link>
                        <Link to="/patient">Patient</Link>
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;