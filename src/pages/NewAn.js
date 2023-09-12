import React from "react";
import Nav from "../components/Nav";

const NewAn = () => {
  return (
    <div className="newAn">
      <div className="title">
        <img src="./img/logo.jpeg" alt="logo NACA" height="200px" />
        <h4>Nouvelle annonce</h4>
      </div>
      <Nav />
    </div>
  );
};

export default NewAn;
