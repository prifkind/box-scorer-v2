import React from "react";
import "../styles.css";

const Row = ({ column1, column2, column3, column4 }) => {
  return (
    <div className="gridRow">
      <div className="gridColumn">{column1}</div>
      <div className="gridColumn">{column2}</div>
      <div className="gridColumn">{column3}</div>
      <div className="gridColumn">{column4}</div>
    </div>
  );
};

export default Row;
