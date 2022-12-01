/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { darkMode } from "../../App";

const Logo = (props) => {
  const { isDarkMode } = useContext(darkMode);

  return (
    <Link className="nav-link" to="/">
      <img src="/Logo.png" height={"80px"} />
    </Link>
  );
};

export default Logo;
