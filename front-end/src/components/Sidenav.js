import React from "react";
import iconCycling from "../assets/icons-nav/cycling.svg";
import iconDumbbell from "../assets/icons-nav/dumbbell.svg";
import iconMeditation from "../assets/icons-nav/meditation.svg";
import iconSwimming from "../assets/icons-nav/swimming.svg";
import { Link } from "react-router-dom";

/**
 * Returns a React component displays the navigation to the left side of window
 * @returns a React Components
 */

const Sidenav = () => {
  const autoMajDate = new Date();

  return (
    <aside className="sidenav">
      <nav className="nav">
        <Link to="/">
          <img src={iconMeditation} alt="Icone méditation" />
        </Link>
        <Link to="/">
          <img src={iconSwimming} alt="Icone natation" />
        </Link>
        <Link to="/">
          <img src={iconCycling} alt="Icone cyclisme" />
        </Link>
        <Link to="/">
          <img src={iconDumbbell} alt="Icone musculation" />
        </Link>
      </nav>
      <p>Copyright, SportSee {autoMajDate.getFullYear()}</p>
    </aside>
  );
};

export default Sidenav;
