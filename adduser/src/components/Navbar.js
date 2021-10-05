import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.main_nav}>
      <div className={classes.navbar}>
        <NavLink strict to="/planets" activeClassName={classes.activestyle} >
          <p>Planets</p>
        </NavLink>
        <NavLink to="/people" activeClassName={classes.activestyle}>
          <p>People</p>
        </NavLink>
        <NavLink to="/form" activeClassName={classes.activestyle}>
          <p>Add user</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
