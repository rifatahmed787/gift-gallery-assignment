import React from "react";
import "../Animation/Animation.css";

const Animation = () => {
  return (
    <div>
      <div className="wave-anim">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
