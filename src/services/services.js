import axios from "axios";

const URL = "https://rickandmortyapi.com/api";

export const getListCharacters = async () => {
  const request = await axios
    .get(`${URL}/character`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  return request;
};

export const getCharacterInfo = async(characterId) => {
  const request = await axios
  .get(`${URL}/character/${characterId}`)
  .then((response)=> response.data)
  .catch((error) =>{
    console.log(error);
  });
  return request;
}
