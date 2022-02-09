import React from "react";

const Row = ({ homeTeam, visitorTeam, homeTeamScore, visitorTeamScore }) => {

  return (
    <div className="ui grid">
    <div className="four wide column">{homeTeam}</div>
    <div className="four wide column">{visitorTeam}</div>
    <div className="four wide column">{homeTeamScore}</div>
    <div className="four wide column">{visitorTeamScore}</div>
  </div>
  )
};

export default Row;
