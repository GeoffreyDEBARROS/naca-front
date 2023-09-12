import React from "react";
import Nav from "../components/Nav";

const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="title">
        <img src="./img/logo.jpeg" alt="logo NACA" height="200px" />
        <h4>Connexion</h4>
      </div>
      <div className="form-container">
        <div className="sentence">
          <span className="hello">Bonjour !</span>
          <p>Connectez-vous pour profiter de NACA à 100%</p>
        </div>
        <form action="">
          <label htmlFor="mail" id="mail">
            Email
          </label>
          <input type="mail" id="mail" />
          <label htmlFor="password" id="password">
            Mot de passe
          </label>
          <input type="password" id="password" />
          <div className="btn-container">
            <button type="submmit" onClick={handleClick}>
              connexion
            </button>
          </div>
          <div className="message-container">
            <span></span>
          </div>
        </form>
      </div>
      <Nav />
    </div>
  );
};

export default Login;
