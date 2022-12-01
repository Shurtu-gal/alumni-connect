import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, AltNavBar } from "./components";
import { Quizzes, Home, Mentors, LandingPage, Connect } from "./pages";
import Pricing from "./pages/Pricing";

let darkMode = createContext("false", () => {});
let login = createContext("false", () => {});

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isLogin, setLogin] = useState(true);

  const handleToggle = () => {
    setDarkMode((curr) => !curr);
  };

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("*"));
    nodes.forEach((node) => node.classList.toggle("change"));
  }, [isDarkMode]);

  return (
    <login.Provider value={{ isLogin, setLogin }}>
      <Router>
        <darkMode.Provider value={{ isDarkMode, handleToggle }}>
          {!isLogin && <LandingPage />}
          {isLogin && <NavBar />}
        </darkMode.Provider>
        {isLogin && (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/quizzes" element={<Quizzes />} />
          </Routes>
        )}
      </Router>
    </login.Provider>
  );
};

export { darkMode, login };
export default App;
