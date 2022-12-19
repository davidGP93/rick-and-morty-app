import React, { useState, useMemo, useEffect } from "react";
import ListCharacters from "../../pages/Home/ListCharacters/ListCharacters";
import { getListCharacters } from "../../services/services";
import NotFound from "../notFound/NotFound";
import filterStyles from "./Home.module.scss";

function Filters() {
  const [listCharacters, setListCharacters] = useState([]);
  const [statusFiltered, setStatusFiltered] = useState("Todos");
  const [locationFiltered, setLocationFiltered] = useState("locations");
  const [genderFiltered, setGenderFiltered] = useState("gender");

  useEffect(() => {
    const getData = async () => {
      const response = await getListCharacters();
      setListCharacters(response?.results);
    };
    getData();
  }, []);

  const handleFilteredStatus = (event) => {
    setStatusFiltered(event.target.value);
  };

  const handleFilterLocation = (event) => {
    setLocationFiltered(event.target.value);
  };

  const handleFilterGender = (event) => {
    setGenderFiltered(event.target.value);
  };

  const listCharactersView = useMemo(() => {
    const currentStatusFiltered = statusFiltered;
    const currentLocation = locationFiltered;
    const currentGender = genderFiltered;
    if (
      currentStatusFiltered === "Todos" &&
      currentLocation === "locations" &&
      currentGender === "gender"
    )
      return listCharacters;
    const characterGender = listCharacters.filter((character) => {
      if (
        currentStatusFiltered === "Todos" &&
        currentLocation !== "locations" &&
        currentGender !== "gender"
      )
        return (
          character.location.name === currentLocation &&
          character.gender === currentGender
        );
      if (
        currentStatusFiltered !== "Todos" &&
        currentLocation === "locations" &&
        currentGender === "gender"
      )
        return character.status === currentStatusFiltered;
      if (
        currentStatusFiltered !== "Todos" &&
        currentLocation !== "locations" &&
        currentGender !== "gender"
      )
        return (
          character.status === currentStatusFiltered &&
          character.location.name === currentLocation &&
          character.gender === currentGender
        );
      if (
        currentStatusFiltered === "Todos" &&
        currentLocation !== "locations" &&
        currentGender === "gender"
      )
        return character.location.name === currentLocation;
      if (
        currentStatusFiltered === "Todos" &&
        currentLocation === "locations" &&
        currentGender !== "gender"
      )
        return character.gender === currentGender;
      if (
        currentStatusFiltered !== "Todos" &&
        currentLocation === "locations" &&
        currentGender !== "gender"
      )
        return (
          character.status === currentStatusFiltered &&
          character.gender === currentGender
        );
      if (
        currentStatusFiltered !== "Todos" &&
        currentLocation !== "locations" &&
        currentGender === "gender"
      )
        return (
          character.status === currentStatusFiltered &&
          character.location.name === currentLocation
        );
    });

    return characterGender;
  }, [statusFiltered, listCharacters, locationFiltered, genderFiltered]);

  return (
    <>
      <section className={filterStyles.mainContainer}>
        <select
          className={filterStyles["mainContainer-select"]}
          onChange={handleFilteredStatus}
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

        <select
          className={filterStyles["mainContainer-select"]}
          onChange={handleFilterGender}
        >
          <option value="gender">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </section>
      <hr />
      {listCharactersView.length === 0 ? (
        <NotFound />
      ) : (
        <ListCharacters listCharacters={listCharactersView} />
      )}
    </>
  );
}

export default Filters;