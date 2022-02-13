import React from "react";
import "../styles.css";

const Row = ({ column1, column2, column3, column4 }) => {
  return (
    <div className="grid">
      <div className="gridRow">{column1}</div>
      <div className="gridRow">{column2}</div>
      <div className="gridRow">{column3}</div>
      <div className="gridRow">{column4}</div>
    </div>
  );
};

export default Row;
