import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  );
}
