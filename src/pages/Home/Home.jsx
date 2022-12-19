import CardCharacter from "../../components/CardCharacter/cardCharacter";

import homeStyles from "./Home.module.scss";

function Home({ listCharacters }) {
  return (
    <>
      <section className={homeStyles["home-container"]}>
        {listCharacters.map((character) => {
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
