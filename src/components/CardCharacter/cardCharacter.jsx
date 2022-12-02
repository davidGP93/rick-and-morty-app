import React from "react";
import propTypes from 'prop-types'
import cardStyles from "./CardCharacter.module.scss";

export default function CardCharacter({ character, name, gender, status}) {
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

 CardCharacter.propTypes = {
  character: propTypes.string,
  name: propTypes.string,
  gender: propTypes.string,
  status: propTypes.string,
 }
