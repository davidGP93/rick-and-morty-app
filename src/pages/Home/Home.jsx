import React, { useEffect, useState } from "react";
import { getListCharacters } from "../../services/services";
import CardCharacter from "../../components/CardCharacter/cardCharacter";
import homeStyles from "./Home.module.scss";

function Home() {
  const [listCharacter, setListCharacter] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getListCharacters();
      setListCharacter(response?.results);
    };
    getData();
  }, []);

  return (
    <>
      <hr />
      <section className={homeStyles["home-container"]}>
        {listCharacter.map((character) => {
          return (
            <CardCharacter
              character={character.image}
              name={character.name}
              status={character.status}
              gender={character.gender}
              id={character.id}
              location={character.location.name}
              key={`character_${character.id}`}
            />
          );
        })}
      </section>
    </>
  );
}

export default Home;
