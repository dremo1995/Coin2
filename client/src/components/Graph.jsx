import React from "react";
const Graph = ({ image, name, high, low, current }) => {
  return (
    <li className="justify-center justify-between items-center flex flex-col">
      <div>{image}</div>
      <div>{name}</div>
      <div>{current}</div>
      <div>{high}</div>
      <div>{low}</div>
    </li>
  );
};

export default Graph;
