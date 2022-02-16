import React, { useState } from "react";

const Selector = () => {
  const [selectDate, setSelectDate] = useState("");

  return (
    <div>
      <select
        className="ui selection dropdown"
        onChange={(e) => {
          setSelectDate(e.target.value);
        }}
      >
        <option value="Today">Today</option>
        <option value="Yesterday">Yesterday</option>
      </select>
    </div>
  );
};

export default Selector;
