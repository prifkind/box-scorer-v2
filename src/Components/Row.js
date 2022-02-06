import React, { useEffect } from "react";

const Row = ({ querySubmit, games }) => {

  useEffect(() => {
    querySubmit();
  }, []);

  useEffect(
    () => {
      renderItems();
    },
    [games]
  );

  const renderItems = () => {
    games.map((g) => {
      const homeTeam = g.home_team.full_name;
      const visitorTeam = g.visitor_team.full_name;
      console.log(homeTeam, visitorTeam);
      return (
        <div className="ui grid">
          <div className="four wide column">{homeTeam}</div>
          <div className="four wide column">{visitorTeam}</div>
          <div className="four wide column">C</div>
          <div className="four wide column">D</div>
        </div>
      );
    });
  };

  return (
    <div>
    </div>
  );
};

export default Row;
