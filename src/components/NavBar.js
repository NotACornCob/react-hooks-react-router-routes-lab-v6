import React from "react";
import Home from "../pages/Home"
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-Home"
      ><div className="navbar">
        Home
        </div>
      </NavLink>
      <NavLink
        to="/directors"
        className="nav-directors"
      ><div className="navbar">
        Directors
        </div>
      </NavLink>
      <NavLink
        to="/actors"
        className="nav-actors"
      > <div className="navbar">
        Actors
        </div>
      </NavLink>
    </nav>
  );
};

export default NavBar;