import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import data from "../../data/data";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="logo" />
        </a>
        <ul className="listLinks">
          {data.map((obj, i) => (
            <NavLink to={obj.name} className="itemLink" key={i}>
              {obj.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}
