import axios from "axios";

const date = new Date().toLocaleDateString("sv-SE");

const getGames = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/",
  params: {
    start_date: date,
    end_date: date,
  },
});

export default getGames;
