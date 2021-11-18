import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

// NavBar from example project
// Links to every site we have
const NavBar = (props) => {
  return (
    <nav>
      <div className="nav-group">
        <Link to="/">
          <button className="all-players">All Players</button>
        </Link>
        <Link to="/Group">
          <button className="group-page">Group</button>
        </Link>
        <Link to="/Head_to_Head">
        <button className="head-to-head">Head to Head</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
