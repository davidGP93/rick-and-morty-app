import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { getCharacterInfo } from "../../../services/services";
import stylesDetail from "./detailCharacter.module.scss";

export default function DetailCharacter() {
  const { characterId } = useParams();
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    getCharacterInfo(characterId).then((response) => {
      setCharacterInfo([response]);
    });
  }, [characterId]);

  return (
    <>
    <section className={stylesDetail.ctabox}>
      <Link className={stylesDetail["ctabox-btn"]} to="/">
        <FontAwesomeIcon icon={faCircleArrowLeft}/> Back home
      </Link>
    </section>
    <section className={stylesDetail.containerGeneral}>
      {characterInfo.map((character) => (
        <article className={stylesDetail.containerDetail} key={`character_${character.id}`}>
          <figure className={stylesDetail["containerDetail-img"]}>
            <img src={character.image} alt="character" />
            </figure>
            <div className={stylesDetail["containerDetail-info"]}>
              <p><span className={stylesDetail[`${character.status}`]}>{character.status}</span></p>
              <h1>Name: {character.name}</h1>
              <span>Gender: {character.gender}</span>
              <span>Specie: {character.species}</span>
              <span>Origen: {character.origin.name}</span>
              <span>Location: {character.location.name}</span>
            </div>
          
        </article>
      ))}

    </section>
    </>
  );
}
