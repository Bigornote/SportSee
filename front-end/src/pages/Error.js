import React from "react";
import { Link } from "react-router-dom";

/**
 * Returns a React component displays the Error page
 * @returns a React Components
 */

const Error = () => {
  return (
    <main>
      <h1>Erreur</h1>
      <Link to="/">Cliquez ici pour retourner sur la page d'accueil</Link>
    </main>
  );
};

export default Error;
