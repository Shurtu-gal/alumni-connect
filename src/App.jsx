import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import AltNavBar from "./components/AltNavBar";
import { ContactUs, Home, Mentors, Partners, LandingPage } from "./pages";

let darkMode = createContext("true", () => {});
let login = createContext("false", () => {});

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isLogin, setLogin] = useState(false);

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
          {!isLogin && <AltNavBar />}
          {!isLogin && <LandingPage />}
          {isLogin && <NavBar />}
        </darkMode.Provider>
        {isLogin && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        )}
      </Router>
    </login.Provider>
  );
};

export { darkMode, login };
export default App;
