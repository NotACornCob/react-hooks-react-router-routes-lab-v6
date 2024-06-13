import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-Home"
      >
        Home
      </NavLink>
      <NavLink
        to="/directors"
        className="nav-directors"
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        className="nav-actors"
      >
        Actors
      </NavLink>
    </nav>
  );
};

export default NavBar;