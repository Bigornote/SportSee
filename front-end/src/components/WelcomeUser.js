import React from "react";

const WelcomeUser = ({ name }) => {
  return (
    <section className="welcome">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

export default WelcomeUser;
