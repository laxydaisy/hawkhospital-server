import React from 'react';
import './App.css';

function NavBar() {
    return (
        <div className="-container">
            <nav className="-nav">
                <a href="/">home</a>
                <a href="/">middle</a>
                <a href="/">last</a>
                <a href="/admin">Admin</a>
            </nav>
        </div>
    );
}

export default NavBar;