import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavList, Nav, MenuButton, Contain } from "./style";
import Logo from "../../shared/Logo";
import { ToggleModeIcon } from "../../shared";
import MobileNavList from "./MobileNavList.jsx/index.jsx";
import { login } from "../../../App";

const NavBar = () => {
  const { isLogin, setLogin } = useContext(login);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () =>
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);

  const handlelogout = () => {
    setLogin(false);
  };

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "var(--background-primary)",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <Contain>
        <Nav>
          <div className="nav nav--left">
            <Logo ht="90" wt="90" />
          </div>
          <NavList className="nav nav--center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mentors">
                Mentors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/connect">
                Connect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handlelogout}>
                Logout
              </NavLink>
            </li>
          </NavList>
          <div className="nav nav--right">
            <ToggleModeIcon />
            <div className="btn__container" onClick={toggleMenuIsOpen}>
              <MenuButton menuIsOpen={menuIsOpen}>
                <span className="menu_burger" />
              </MenuButton>
            </div>
          </div>
        </Nav>
      </Contain>
      {menuIsOpen && <MobileNavList />}
    </div>
  );
};

export default NavBar;
