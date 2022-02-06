import React, { useState, useEffect } from "react";
import games from "../api/games";

// const [newGames, setNewGames] = useState("");

const results = async () => {
  await games.get("games", {}).then((res) => {
    console.log(res);
  });
};

const Row = () => {
  results();
  return (
    <div className="ui grid">
      <div className="four wide column">A</div>
      <div className="four wide column">B</div>
      <div className="four wide column">C</div>
      <div className="four wide column">D</div>
    </div>
  );
};

export default Row;
