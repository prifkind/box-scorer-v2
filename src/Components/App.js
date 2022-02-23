import React, { useState } from "react";
import Grid from "./Grid";
import getGames from "../api/games";
import Selector from "./Selector";
import Spinner from "./Spinner";

const App = () => {
  //State assignment
  const [games, setGames] = useState([]);
  const [selectDate, setSelectDate] = useState("Today");
  const [spinnerStatus, setSpinnerStatus] = useState(0);

  //Function to set date to yesterday
  const setYesterday = (date, days) => {
    var dt = new Date(date);
    dt.setDate(dt.getDate() + days);
    return dt;
  };

  //Variable assignment for dates
  const today = new Date().toLocaleDateString("sv-SE");
  const yesterday = setYesterday(today, 0).toLocaleDateString("sv-SE");

  //Async function to query API for games based on date
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
        setSpinnerStatus(1);
      });
  };

  //Conditional  to show loading spinner or render components
  if (spinnerStatus != 1) {
    querySubmit();
    return <Spinner />;
  } else {
    return (
      <div>
        <Selector setSelectDate={setSelectDate} />
        <Grid querySubmit={querySubmit} games={games} selectDate={selectDate} />
      </div>
    );
  }
};

export default App;
