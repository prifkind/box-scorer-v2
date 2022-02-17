import axios from "axios";

const getGames = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/",
});

export default getGames;
