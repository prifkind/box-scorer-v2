import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
