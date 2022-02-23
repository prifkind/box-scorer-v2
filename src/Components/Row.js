import React from "react";
import "../styles.css";

const Row = ({ column1, column2, column3, column4 }) => {
  return (
    <div className="row">
      <div className="col">{column1}</div>
      <div className="col">{column2}</div>
      <div className="col">{column3}</div>
      <div className="col">{column4}</div>
    </div>
  );
};

export default Row;
