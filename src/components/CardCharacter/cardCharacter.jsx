import React from "react";
import cardStyles from "./CardCharacter.module.scss";

function CardCharacter({ character, name, gender, status, id }) {
  return (
    <article className={cardStyles.mainContainer}>
      <figure className={cardStyles["mainContainer-img"]}>
        <img src={character} alt="character" />
      </figure>
      <div className={cardStyles["mainContainer-dates"]}>
        <h3 >Name: {name}</h3>
        <span>Status: {status}</span>
        <span>Gender: {gender}</span>
      </div>
    </article>
  );
}

export default CardCharacter;
