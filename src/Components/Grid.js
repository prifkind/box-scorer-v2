import React, { useEffect } from "react";
import Row from "./Row";

const Grid = ({ querySubmit, games }) => {
  useEffect(() => {
    querySubmit();

  }, [querySubmit]);

  const renderBox = games.map((g) => {
    const homeTeam = g.home_team.full_name;
    const homeTeamScore = g.home_team_score;
    const visitorTeam = g.visitor_team.full_name;
    const visitorTeamScore = g.visitor_team_score;
    const id = g.id;
    return (
      <Row
        key={id}
        homeTeam={homeTeam}
        visitorTeam={visitorTeam}
        homeTeamScore={homeTeamScore}
        visitorTeamScore={visitorTeamScore}
      />
    );
  });
  return <div>{renderBox}</div>;
};

export default Grid;
