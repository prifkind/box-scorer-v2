import React, { useEffect } from "react";
import "../styles.css";
import Row from "./Row";

const Grid = ({ querySubmit, games, selectDate }) => {
  useEffect(() => {
    querySubmit(selectDate);
  },[selectDate]);

  const renderBox = games.map((g) => {
    const homeTeam = g.home_team.full_name;
    const homeTeamScore = g.home_team_score;
    const visitorTeam = g.visitor_team.full_name;
    const visitorTeamScore = g.visitor_team_score;
    const id = g.id;

    return (
      <Row
        key={id}
        column1={homeTeam}
        column2={visitorTeam}
        column3={homeTeamScore}
        column4={visitorTeamScore}
      />
    );
  });

  return (
    <div>
      <div className="gridHeader">
        <Row
          column1="Home"
          column2="Visitor"
          column3="Home Score"
          column4="Visitor Score"
        />
        <div>{renderBox}</div>
      </div>
    </div>
  );
};

export default Grid;
