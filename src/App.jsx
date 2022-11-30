import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { ContactUs, Home, Mentors, Partners } from "./pages";

let darkMode = createContext("true", () => {});

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode((curr) => !curr);
  };

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("*"));
    nodes.forEach((node) => node.classList.toggle("change"));
  }, [isDarkMode]);

  return (
    <Router>
      <darkMode.Provider value={{ isDarkMode, handleToggle }}>
        <NavBar />
      </darkMode.Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export { darkMode };
export default App;
