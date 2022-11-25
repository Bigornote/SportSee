import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Logo Application SportSee" />
      <nav className="header-nav">
        <Link to="/">Accueil</Link>
        <Link to="/">Profil</Link>
        <Link to="/">Réglage</Link>
        <Link to="/">Communauté</Link>
      </nav>
    </header>
  );
};

export default Navbar;
