import React from "react";

const Card = ({ icon, info, text }) => {
  return (
    <div className="card">
      <img src={icon} alt="icon" />
      <div className="content">
        <p className="info">{info}</p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
