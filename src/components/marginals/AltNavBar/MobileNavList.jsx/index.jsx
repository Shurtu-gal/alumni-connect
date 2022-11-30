import React from "react";
import { NavList } from "./style";
import nav from "../../../../../config/Navigation";
import { Link, animateScroll as scroll } from "react-scroll";

const MobileNavList = () => {
  return (
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
            offset={0}
            duration={500}
          >
            <p className="navLink">{name}</p>
          </Link>
        </li>
      ))}
    </NavList>
  );
};

export default MobileNavList;
