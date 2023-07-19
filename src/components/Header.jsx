import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./css/header.css";

function Header() {
  const activeStyles = {
    fontWeight: "bold",
    color: "#ffa506",
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">MovieMania</Link>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className="nav__link"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              New Releases
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/popularmovies"
              className="nav__link"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              What's Hot
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
