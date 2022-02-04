import React, {useState, useEffect} from "react";
import games from "../api/games";

const [games, setGames] = useState('');

const newGames = async (date) => {
  const response = await games.get('', {
    dates: date
  });

  
}



const Row = () => {
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
