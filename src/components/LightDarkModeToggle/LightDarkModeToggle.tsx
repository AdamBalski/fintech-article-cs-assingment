import React, {useContext} from 'react';
import "./LightDarkModeToggle.css";
import {ThemeContext} from "../../ThemeContext";

function LightDarkModeToggle() {
    const themeContext: any = useContext(ThemeContext);
    const themeSuffix = themeContext.isDarkMode ? "-dark" : "-light";

    return (
        <button className={`LightDarkModeToggle LightDarkModeToggle${themeSuffix}`} onClick={themeContext.flipThemes}>
        </button>
    );
}

export default LightDarkModeToggle;