import React, { useState } from "react";
import Grid from "./Grid";
import getGames from "../api/games";
import Selector from "./Selector";

const App = () => {
  const [games, setGames] = useState([]);
  const [selectDate, setSelectDate] = useState("Today");

  const setYesterday = (date, days) => {
    var dt = new Date(date);
    dt.setDate(dt.getDate() + days);
    return dt;
  };

  const today = new Date().toLocaleDateString("sv-SE");
  const yesterday = setYesterday(today, 0).toLocaleDateString("sv-SE");

  const querySubmit = async () => {
    let activeDate = "";

    if (selectDate === "Today") {
      activeDate = today;
    } else {
      activeDate = yesterday;
    }

    getGames
      .get("games", {
        params: {
          start_date: activeDate,
          end_date: activeDate,
        },
      })
      .then((response) => {
        setGames(response.data.data);
        console.log(response.data.data);
      });
  };

  return (
    <div>
      <Selector setSelectDate={setSelectDate} />
      <Grid querySubmit={querySubmit} games={games} selectDate={selectDate} />
    </div>
  );
};

export default App;
