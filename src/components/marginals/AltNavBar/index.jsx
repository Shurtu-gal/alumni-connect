import React, { useState } from "react";
import { NavList, Nav, MenuButton, Contain } from "./style";
import Logo from "../../shared/Logo";
import { ToggleModeIcon } from "../../shared";
import MobileNavList from "./MobileNavList.jsx/index.jsx";
import nav from "../../../../config/Navigation";
import { Link, animateScroll as scroll } from "react-scroll";

const AltNavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () =>
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "var(--background-primary)",
        position: "sticky",
        top: "0",
      }}
    >
      <Contain>
        <Nav>
          <div className="nav nav--left">
            <Logo ht="90" wt="90" />
          </div>
          <NavList className="nav nav--center">
            {nav.navItems.map(({ id, name }) => (
              <li
                key={id}
                id={name}
                role="menuitem"
                tabIndex="0"
                className="nav-item"
              >
                <Link
                  activeClass="active"
                  to={`${id}`}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  <p className="navLink">{name}</p>
                </Link>
              </li>
            ))}
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

export default AltNavBar;
