import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="container">
      <h1>Bienvenue sur SportSee</h1>
      <p>Une application mobile dédiée au coaching sportif</p>
      <div className="users">
        <NavLink to="user/12">👦 Karl </NavLink>
        <NavLink to="user/18">👩 Cecilia </NavLink>
      </div>
    </main>
  );
};

export default Home;
