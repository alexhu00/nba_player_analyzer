import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

// NavBar from example project
// Links to every site we have
const NavBar = (props) => {
  return (
    <nav>
      <Link to="/">All Players</Link>
      <Link to="/Group">Group</Link>
      <Link to="/Head_to_Head">Head to Head</Link>
    </nav>
  );
};

export default NavBar;
