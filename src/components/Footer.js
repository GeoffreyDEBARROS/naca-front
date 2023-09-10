import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-menu">
          <ul>
            <li>Recherche</li>
            <li>Poster une annonce</li>
            <li>Mon compte</li>
            <li>Mentions légales</li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <li>
              <img src="./img/mail.svg" alt="mail" height="30px" />
            </li>
            <li>
              <img src="./img/x.svg" alt="X" height="30px" />
            </li>
            <li>
              <img src="./img/linkedinn.svg" alt="linkedin" height="30px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
