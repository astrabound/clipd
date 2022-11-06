import React from "react";
import {
  Icon,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import BrandIcon from "../../theme/images/clipd.svg";
import { Link, NavLink } from "react-router-dom";

const navbarLinksGroupLeft = [
  { label: "Dashboard", path: "/", icon: "control" },
  { label: "Clips", path: "/clips", icon: "paperclip" },
];
const navbarLinksGroupRight = [
  { label: "About", path: "/about", icon: "info-sign" },
  { label: "Settings", path: "/settings", icon: "settings" },
];

const Navigation = () => {
  return (
    <Navbar>
      <NavbarGroup>
        <Link to={"/"} className="plain-link">
          <NavbarHeading className="clipd-navbar-brand">
            <img
              src={BrandIcon}
              alt="ClipD Icon"
              className="clipd-navbar-brand-icon"
            />
            <span className="clipd-navbar-brand-text">ClipD</span>
          </NavbarHeading>
        </Link>
        <NavbarDivider />
        {navbarLinksGroupLeft.map((navbarLink, index) => (
          <NavLink
            className="clipd-navbar-link plain-link"
            key={index}
            to={navbarLink.path}
            end
          >
            {navbarLink.icon && (
              <Icon className="clipd-navbar-link-icon" icon={navbarLink.icon} />
            )}
            <span className="clipd-navbar-link-text">{navbarLink.label}</span>
          </NavLink>
        ))}
      </NavbarGroup>
      <NavbarGroup align="right">
        {navbarLinksGroupRight.map((navbarLink, index) => (
          <NavLink
            className="clipd-navbar-link plain-link"
            key={index}
            to={navbarLink.path}
            end
          >
            {navbarLink.icon && (
              <Icon className="clipd-navbar-link-icon" icon={navbarLink.icon} />
            )}
            <span className="clipd-navbar-link-text">{navbarLink.label}</span>
          </NavLink>
        ))}
      </NavbarGroup>
    </Navbar>
  );
};

export default Navigation;
