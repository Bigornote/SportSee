import React from "react";
import { Link } from "react-router-dom";

/**
 * Returns a React component displays the Error page
 * @returns a React Components
 */

const Error = () => {
  return (
    <main className="container error">
      <h1>Erreur 404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
};

export default Error;
