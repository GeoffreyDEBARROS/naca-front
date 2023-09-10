import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="./img/logo.jpeg" alt="logo NACA" height="200px" />
      </div>
      <div className="subtitle">
        <p>Un espage dédié à l'échange et à la vente d'animaux exotiques.</p>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
