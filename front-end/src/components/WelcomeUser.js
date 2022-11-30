import React from "react";

const WelcomeUser = ({ name }) => {
  return (
    <section>
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </section>
  );
};

export default WelcomeUser;
