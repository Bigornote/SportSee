import React from "react";

const Card = ({ icon, info, unit, text }) => {
  return (
    <div className="card">
      <img src={icon} alt="icon" />
      <div className="content">
        <p className="info">
          {info}
          {unit}
        </p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
