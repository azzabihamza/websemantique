import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              WebSiteName
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
                <Link to="/aliment">Aliment</Link>
            </li>
            <li>
                <Link to="/recette">Recette</Link>
            </li>
            <li>
                <Link to="/plat">Plat</Link>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
