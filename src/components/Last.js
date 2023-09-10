import React from "react";

const Last = () => {
  return (
    <div className="last-container">
      <div className="last">
        <div className="last-header">
          <h4>Dernières annonces :</h4>
        </div>
        <div className="last-announces">
          <div className="announce1">
            <div className="infos">
              <h6>Sibylla pretiosa</h6>
              <span>12 euros</span>
            </div>
            <div className="picture">
              <img src="./img/Sibylla-pretiosa.jpg" height="120px" alt="Sibylla"/>
            </div>
          </div>
          <div className="announce1">
            <div className="infos">
              <h6>Sibylla pretiosa</h6>
              <span>400 euros</span>
            </div>
            <div className="picture">
              <img src="./img/pardalis.png" height="120px" alt="pardalis"/>
            </div>
          </div>
          <div className="announce1">
            <div className="infos">
              <h6>Platymeris biguttatus</h6>
              <span>4 euros</span>
            </div>
            <div className="picture">
              <img src="./img/platymeris.png" height="120px" alt="platymeris"/>
            </div>
          </div>
          <div className="announce1">
            <div className="infos">
              <h6>Sibylla pretiosa</h6>
              <span>2900 euros</span>
            </div>
            <div className="picture">
              <img src="./img/prasinus.png" height="120px" alt="prasinus"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
