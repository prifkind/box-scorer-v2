import React, { useEffect, useState } from "react";
import Row from "./Row";
import getGames from "../api/games";

const App = () => {
  const [games, setGames] = useState([]);

  // useEffect(() => {
  //   query();
  // }, [])

  const querySubmit = async () => {
    getGames.get("games", {}).then((response) => {
      setGames(response.data.data);
      console.log(response.data.data);
    });
  };

  return <Row querySubmit={querySubmit} games={games}/>;
};

export default App;
