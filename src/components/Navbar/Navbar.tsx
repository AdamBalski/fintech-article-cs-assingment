import React from 'react';
import logo from '../logo.svg';
import './navbar.css';
import LightDarkModeToggle from "./LightDarkModeToggle";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbar-left">
                <img src={logo} className="navbar-logo" alt="logo" />
                <h6>Wywiad z programistą fintech'u</h6>
            </div>
            <div className="navbar-right">
                <LightDarkModeToggle />
            </div>
        </div>
    )
}

export default Navbar;