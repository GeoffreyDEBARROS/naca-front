import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isNavIsOpen, setIsNavIsOpen] = useState(false);

  const handleClick = () => {
    setIsNavIsOpen(!isNavIsOpen);
  };

  return (
    <div className="nav">
      <div className="brg-btn" onClick={handleClick}>
        <span className={`bgr-line ${isNavIsOpen ? "line1Anim" : ""}`}></span>
        <span className={`bgr-line ${isNavIsOpen ? "line2Anim" : ""}`}></span>
        <span className={`bgr-line ${isNavIsOpen ? "line3Anim" : ""}`}></span>
      </div>

      <div className={`menuAnim ${isNavIsOpen ? "menu" : ""}`}>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/recherche">
            <li>Recherche</li>
          </NavLink>
          <NavLink to="/connexion">
            <li>Connexion</li>
          </NavLink>
          <NavLink to="/poster_une_annonce">
            <li>Poster une annonce</li>
          </NavLink>
          <NavLink to="/inscription">
            <li>Inscription</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
