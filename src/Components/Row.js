import React from "react";

const Row = ({ column1, column2, column3, column4 }) => {
  const styles = {
    border: "1px solid black",
  };
  return (
    <div>
      <div className="column">
        <div style={styles}>{column1}</div>
      </div>
      <div className="column">
        <div style={styles}>{column2}</div>
      </div>
      <div className="column">
        <div style={styles}>{column3}</div>
      </div>
      <div className="column">
        <div className="column" style={styles}>
          {column4}
        </div>
      </div>
    </div>
  );
};

export default Row;
