import React, { useEffect, useState } from "react";
import { getListCharacters } from "../../services/services";
import Layout from "../../components/Layout/Layout";
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
    <Layout>
      <hr />
      <section className={homeStyles["home-container"]}>
        {listCharacter.map((character) => {
          return (
            <CardCharacter
              character={character.image}
              name={character.name}
              status={character.status}
              gender={character.gender}
              key={`character_${character.id}`}
            />
          );
        })}
      </section>
    </Layout>
  );
}

export default Home;
