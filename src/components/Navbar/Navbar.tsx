import React, {useContext} from 'react';
import logo from '../../logo.svg';
import './Navbar.css';
import LightDarkModeToggle from "../LightDarkModeToggle/LightDarkModeToggle";
import {ThemeContext} from "../../ThemeContext";

function Navbar() {
  const themeContext: any = useContext(ThemeContext);
  const themeSuffix = themeContext.isDarkMode ? "-dark" : "-light";

  return (
        <div className={`Navbar Navbar${themeSuffix}`}>
            <div className="navbar-left">
                <img src={logo} className="navbar-logo" alt="logo" />
                <h1>Fintech, co to?</h1>
            </div>
            <div className="navbar-right">
                <LightDarkModeToggle />
            </div>
        </div>
    )
}

export default Navbar;