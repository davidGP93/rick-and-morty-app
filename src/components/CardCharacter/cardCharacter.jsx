import React from "react";
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import cardStyles from "./CardCharacter.module.scss";

export default function CardCharacter({ character, name, gender, status, id}) {
  return (
    <article className={cardStyles.mainContainer}>
      <Link to={`/character/${id}`}>
      <figure className={cardStyles["mainContainer-img"]}>
        <img src={character} alt={`${name}-character`} />
      </figure>
      </Link>
      <div className={cardStyles["mainContainer-dates"]}>
        <h3 >Name: {name}</h3>
        <h3>Location: {location}</h3>
        <span>Status: <p className={cardStyles[`${status}`]}>{status}</p></span>
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
