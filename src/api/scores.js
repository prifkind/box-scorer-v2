import axios from "axios";
import games from "./games";

const scores = axios.create({
      baseURL: 'http://api.probasketballapi.com/boxscore/player',
      params: {

      }
})

export default scores;