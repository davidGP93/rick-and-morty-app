import React, { useState, useMemo, useEffect } from "react";
import Home from "../../pages/Home/Home";
import { getListCharacters } from "../../services/services";
import filterStyles from "./Filters.module.scss";

function Filters() {
  const [listCharacters, setListCharacters] = useState([]);
  const [statusFiltered, setStatusFiltered] = useState("Todos");
  const [locationFiltered, setLocationFiltered] = useState("locations");

  useEffect(() => {
    const getData = async () => {
      const response = await getListCharacters();
      setListCharacters(response?.results);
    };
    getData();
  }, []);

  const handleFilteredGender = (event) => {
    setStatusFiltered(event.target.value);
  };

  const handleFilterLocation = (event) => {
    setLocationFiltered(event.target.value);
  };

  const listCharactersView = useMemo(() => {
    const currentStatusFiltered = statusFiltered;
    const currentLocation = locationFiltered;
    if (currentStatusFiltered === "Todos" && currentLocation === "locations")
      return listCharacters;
    const characterGender = listCharacters.filter((character) => {
      if (currentStatusFiltered === "Todos" && currentLocation !== "locations")
        return character.location.name === currentLocation;
      if (currentStatusFiltered !== "Todos" && currentLocation === "locations")
        return character.status === currentStatusFiltered;
      if (currentStatusFiltered !== "Todos" && currentLocation !== "locations")
        return (
          character.status === currentStatusFiltered &&
          character.location.name === currentLocation
        );
    });

    return characterGender;
  }, [statusFiltered, listCharacters, locationFiltered]);

  return (
    <>
      <section className={filterStyles.mainContainer}>
        <select
          className={filterStyles["mainContainer-select"]}
          onChange={handleFilteredGender}
        >
          <option value="Todos">Todos</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>

        <select
          className={filterStyles["mainContainer-select"]}
          onChange={handleFilterLocation}
        >
          <option value="locations">Locations</option>
          <option value="Citadel of Ricks">Citadel of Ricks</option>
          <option value="Earth (Replacement Dimension)">
            Earth (Replacement Dimension)
          </option>
          <option value="Abadango">Abadango</option>
          <option value="Testicle Monster Dimension">
            Testicle Monster Dimension
          </option>
          <option value="Worldender's lair">Worldender's lair</option>
          <option value="Anatomy Park">Anatomy Park</option>
          <option value="Unknown">unknown</option>
        </select>
      </section>
      <hr />
      {listCharactersView.length === 0 ? (
        <p>No hay resultados para esta busqueda</p>
      ) : (
        <Home listCharacters={listCharactersView} />
      )}
    </>
  );
}

export default Filters;

// crear componente notfound y corregir la grilla