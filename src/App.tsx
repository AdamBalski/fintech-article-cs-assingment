import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";
import {ThemeContext} from "./ThemeContext";
import Content from "./components/Content/Content";
import AudioContent from "./components/AudioContent/AudioContent";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const flipThemes = () => setDarkMode(!isDarkMode);
  const themeContextProviderValue: any = {isDarkMode, flipThemes};
  const themeSuffix = isDarkMode ? "-dark" : "-light";

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeContextProviderValue}>
        <div className={isDarkMode ? "dark" : "light"}>
          <div className={`Main Main${themeSuffix}`}>
            <Navbar />
            <Routes>
              <Route path={"/"} element={<Content/>} />
              <Route path={"/audio"} element={<AudioContent/>} />
            </Routes>
            <ScrollUpButton />
          </div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;