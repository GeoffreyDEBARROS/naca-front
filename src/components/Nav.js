import React, { useState } from "react";

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
          <li>Recherche</li>
          <li>Poster une annonce</li>
          <li>Mon compte</li>
          <li>Mentions légales</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
