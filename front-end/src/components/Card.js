import React from "react";

/**
 * Returns a React component displays Card on Home and Dashboard
 * @param {string} for the params of info, unit and text
 * @returns a React Components
 */
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
