import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>{/*{code here}*/}</div>;
  <div className="navbar">
  <NavLink exact to="/">Home</NavLink>
  <NavLink exact to="/movies">Movies</NavLink>
  <NavLink exact to="/directors">Directors</NavLink>
  <NavLink exact to="/actors">Actors</NavLink>
</div>);
}

export default NavBar;
