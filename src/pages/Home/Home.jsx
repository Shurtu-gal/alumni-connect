import React, { useState } from "react";
import "./style.css";
import Sidebar from "../../components/sidebar/Sidebar";
import MainDashboard from "../../components/MainDash/MainDashboard";
import RightSide from "../../components/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
        <RightSide />
        <div></div>
      </div>
    </div>
  );
}

export default App;
