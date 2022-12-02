import axios from "axios";

const URL = "https://rickandmortyapi.com/api/character";

export const getListCharacters = async () => {
  const request = await axios
    .get(URL)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  return request;
};
