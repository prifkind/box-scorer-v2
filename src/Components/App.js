import React, {  useState } from "react";
import Grid from "./Grid";
import getGames from "../api/games";

const App = () => {
  const [games, setGames] = useState([]);

  const querySubmit = async () => {
    getGames.get("games", {}).then((response) => {
      setGames(response.data.data);
      console.log(response.data.data);
    });
  };

  return <Grid querySubmit={querySubmit} games={games}/>;
};

export default App;
