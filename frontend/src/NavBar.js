import React from "react";
import { NavLink } from "react-router-dom";
import "./css/NavBar.css";

// NavBar from example project
// Links to every site we have
const NavBar = (props) => {
  return (
    <nav>
      <div className="nav-group">
        <div>
          <NavLink to="/Players" className="all-players" activeClassName="active">
            All Players
          </NavLink>
          <NavLink to="/Group" className="group-page" activeClassName="active">
            Group
          </NavLink>
          <NavLink to="/Head_to_Head" className="head-to-head" activeClassName="active">
            Head to Head
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
